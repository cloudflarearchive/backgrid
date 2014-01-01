/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/

var Container = Backgrid.Container = Backbone.View.extend({
  events: {
    "scroll": "onScroll"
  },

  /** @property */
  prefetch: 1,

  /** @property */
  throttle: 200,

  /** @property */
  tagName: "div",

  /** @property */
  className: "backgrid-container",

  initialize: function (options) {
    if (!options.grid) throw "grid is a mandatory options for Backgrid.Container";

    this.height = options.height || 200;
    this.throttle = options.throttle || this.throttle;
    this.prefetch = "prefetch" in options ? options.prefetch : this.prefetch;
    this.grid = options.grid;
    this.onScroll = _.debounce(_.bind(this.onScroll, this), this.throttle);
    this.indicator = $("<h1>HEY I'M LOADING OVER HERE</h1>").hide();

    this.listenTo(this.grid.collection.pageableCollection, "request", this.onRequest);
  },

  onScroll: function (e) {
    var top = e.target.scrollTop,
        shouldFetch = top >= e.target.scrollHeight - this.$el.height(),
        collection = this.grid.collection.pageableCollection,
        hideIndicator = _.bind(this.hideIndicator, this),
        prefetch = this.prefetch,
        next;

    if (shouldFetch) {
      if (next = collection.getNextPage({ scrolling: true })) {
        next.then(function() {
          if (!prefetch) return;

          // Prefetching sequence
          (function prefetchNext(remaining) {
            if (!remaining) return;

            console.info("prefetching, remaining ", remaining);

            if (collection.hasNext()) {
              collection.getNextPage({
                scrolling: true
              }).then(function() {
                console.info("prefetched ", remaining, "decreasing remaining");
                return --remaining;
              }).then(prefetchNext).always(hideIndicator);
            }
          })(prefetch);

        }).always(hideIndicator);
      }
    }
  },

  showIndicator: function() {
    this.indicator.detach().appendTo(this.grid.footer.el);
  },

  hideIndicator: function() {
    this.indicator.hide();
  },

  onRequest: function (collection, xhr, options) {
    if (options.scrolling) this.indicator.show();
  },

  render: function () {
    this.grid.render().$el.appendTo(this.$el.css({
      height: this.height + "px",
      overflow: "scroll"
    }));

    this.hideIndicator();
    this.delegateEvents();
    return this;
  }
});