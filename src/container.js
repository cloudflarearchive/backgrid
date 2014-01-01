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
    this.grid = options.grid;
    this.onScroll = _.debounce(_.bind(this.onScroll, this), this.throttle);
    this.indicator = $("<h1>HEY I'M LOADING OVER HERE</h1>").hide();

    this.listenTo(this.grid.collection.pageableCollection, "request", this.onRequest);
  },

  onScroll: function (e) {
    var top = e.target.scrollTop,
        prefetch = this.prefetch,
        maxScrollTop = e.target.scrollHeight - this.$el.height(),
        collection = this.grid.collection.pageableCollection,
        indicator = this.indicator,
        next;

    if (top >= maxScrollTop) {
      if (next = collection.getNextPage({
        scrolling: true
      })) {
        next.then(function() {
          prefetch && collection.hasNext() && collection.getNextPage({
            scrolling: true
          });
        }).always(function() {
          indicator.hide();
        });
      }
    }
  },

  onRequest: function (collection, xhr, options) {
    if (options.scrolling) this.indicator.show();
  },

  render: function () {
    this.grid.render().$el.appendTo(this.$el.css({
      height: this.height + "px",
      overflow: "scroll"
    }));
    this.indicator.detach().appendTo(this.grid.footer.el);
    this.delegateEvents();
    return this;
  }
});