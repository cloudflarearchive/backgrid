/*
  backgrid-paginator
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

(function ($, _, Backbone, Backgrid) {

  var PaginatorItem = Backgrid.PaginatorItem = Backbone.View.extend({

    tagName: "li",

    events: {
      "click a": "loadPage"
    },

    initialize: function (options) {
      this.label = options.label;
      this.page = options.page;
      this.hasAnchor = typeof options.hasAnchor !== "undefined" ? options.hasAnchor : true;
    },

    render: function () {
      var $a = $("<a>" + this.label + "</a>", {
        href: "#",
        title: "Page " + this.label
      });
      this.$el.append($a);

      return this;
    },

    loadPage: function (e) {
      e.preventDefault();
      if (!this.$el.hasClass("active") && !this.$el.hasClass('disabled')) {
        this.collection.goTo(this.page);
      }
    }

  });

  var Paginator = Backgrid.Paginator = Backgrid.Footer.extend({

    className: "paginator",

    windowSize: 10,
    hasFastForward: true,

    initialize: function (options) {
      Backgrid.Footer.prototype.initialize.apply(this, arguments);
      options = options ? _.clone(options) : {};
      this.parent = options.parent;
      this.columns = options.columns;
      if (!(this.columns instanceof Backbone.Collection)) {
        this.columns = new Backgrid.Columns(this.columns);
      }
      this.collection.on("reset", this.refresh, this);
      this.windowSize = options.windowSize || this.windowSize;
      this.hasFastForward = options.hasFastForward || this.hasFastForward;
      this.items = [];
    },

    dispose: function () {
      Backbone.View.prototype.dispose.apply(this, arguments);
      if (this.parent && this.parent.off) this.parent.off(null, null, this);
      this.columns.off(null, null, this);
      var item = null;
      for (var i = 0; i < this.items.length; i++) {
        item = this.items[i];
        item.off(null, null, this);
        item.dispose();
      }
      return this;
    },

    refresh: function () {
      var $ul = this.$el.find("ul");

      for (var i = 0; i < this.items.length; i++) {
        this.items[i].remove();
      }
      this.items = [];

      var collection = this.collection;

      // 0-based here
      var lastPage = collection.totalPages;
      var windowStart = Math.floor((collection.currentPage - 1) / this.windowSize) * this.windowSize;
      var windowEnd = windowStart + this.windowSize;
      windowEnd = windowEnd <= lastPage ? windowEnd : lastPage;
      for (var i = windowStart; i < windowEnd; i++) {
        // render link if not at current page
        var item = new PaginatorItem({
          label: i + 1,
          page: i + 1,
          className: i + 1 === collection.currentPage ? "active" : undefined,
          collection: collection
        });
        this.items.push(item);
        $ul.append(item.render().$el);
      }

      this.renderFastForward();
    },

    renderFastForward: function () {
      if (this.hasFastForward) {

        var $ul = this.$el.find("ul");
        var collection = this.collection;

        var gotoFirst = new PaginatorItem({
          label: "<<",
          page: 1,
          className: collection.currentPage > collection.firstPage ? undefined : "disabled",
          collection: collection
        });

        var gotoPrev = new PaginatorItem({
          label: "<",
          page: collection.currentPage - 1,
          className: collection.currentPage > collection.firstPage ? undefined : "disabled",
          collection: collection
        });

        var gotoNext = new PaginatorItem({
          label: ">",
          page: collection.currentPage + 1,
          className: collection.currentPage < collection.totalPages ? undefined : "disabled",
          collection: collection
        });

        var gotoLast = new PaginatorItem({
          label: ">>",
          page: collection.totalPages,
          className: collection.currentPage < collection.totalPages ? undefined : "disabled",
          collection: collection
        });

        this.items.unshift(gotoPrev);
        this.items.unshift(gotoFirst);
        this.items.push(gotoNext);
        this.items.push(gotoLast);
        $ul.prepend(gotoPrev.render().$el);
        $ul.prepend(gotoFirst.render().$el);
        $ul.append(gotoNext.render().$el);
        $ul.append(gotoLast.render().$el);
      }
    },

    render: function () {
      var renderableColCount = _.reduce(
        this.columns.pluck("renderable"),
        function (accum, renderable) {
          return renderable ? accum + 1 : 0;
        }, 0);
      this.$el.append($("<tr><td colspan='" + renderableColCount  + "'><ul></ul></td></tr>"));
      this.refresh();
      return this;
    }

  });

}(jQuery, _, Backbone, Backgrid));
