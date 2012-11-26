/*
  backgrid-paginator
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

(function ($, _, Backbone, Backgrid) {

  /**
     Helper class for rendering the individual page handles.

     @class Backgrid.Extension.PageHandle
  */
  var PageHandle = Backgrid.Extension.PageHandle = Backbone.View.extend({

    /** @property */
    tagName: "li",

    /** @property */
    events: {
      "click a": "loadPage"
    },

    /**
       Initializer.

       @param {Object} options
       @param {string} options.label The label of the handle, usually the same
       as the current page number.
       @param {number} options.page The current page number of this handle.
       @param {Backbone.Collection} options.collection
       @param {string} [options.className]
    */
    initialize: function (options) {
      this.label = options.label;
      this.page = options.page;
    },

    /**
       Render the page handle as an anchor inside a list item.
    */
    render: function () {
      var $a = $("<a>" + this.label + "</a>", {
        href: "#",
        title: "Page " + this.label
      });
      this.$el.append($a);

      return this;
    },

    /**
       Event handler. Refresh the collection with just the page's model.
    */
    loadPage: function (e) {
      e.preventDefault();
      if (!this.$el.hasClass("active") && !this.$el.hasClass('disabled')) {
        this.collection.goTo(this.page);
      }
    }

  });

  /**
     Paginator is a Footer element that re-renders a large result set in a table
     by splitting it across multiple pages. If the result set is still larger,
     the page handles are rendered within a sliding window, with 10 indexed page
     handles each by default, plus the fast forward, fast backward, previous and
     next page handles. The fast forward, fast backward, previous and next page
     handles can be turned off.

     @class Backgrid.Extension.Paginator
  */
  var Paginator = Backgrid.Extension.Paginator = Backgrid.Footer.extend({

    /** @property */
    className: "paginator",

    /** @property */
    windowSize: 10,

    /** @property */
    hasFastForward: true,

    /**
       Initializer.

       @param {Object} options
       @param {*} options.parent The parent view class of this footer.
       @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns
       Column metadata.
       @param {Backbone.Collection} options.collection
       @param {number} options.windowSize The number of page handles to display per sliding window.
       @param {boolean} options.hasFastForward Whether to render fast forward buttons.
    */
    initialize: function (options) {
      Backgrid.Footer.prototype.initialize.apply(this, arguments);
      options = options ? _.clone(options) : {};
      this.collection.on("reset", this.refresh, this);
      this.windowSize = options.windowSize || this.windowSize;
      this.hasFastForward = options.hasFastForward || this.hasFastForward;
      this.handles = [];
    },

    dispose: function () {
      if (this.parent && this.parent.off) this.parent.off(null, null, this);
      this.columns.off(null, null, this);
      var handle = null;
      for (var i = 0; i < this.handles.length; i++) {
        handle = this.handles[i];
        handle.off(null, null, this);
        handle.dispose();
      }
      return Backbone.View.prototype.dispose.apply(this, arguments);
    },

    /**
       Re-render the page handles. Current page handle is disabled.
    */
    refresh: function () {
      var $ul = this.$el.find("ul");

      for (var i = 0; i < this.handles.length; i++) {
        this.handles[i].remove();
      }
      this.handles = [];

      var collection = this.collection;

      // 0-based here
      var lastPage = collection.totalPages;
      var windowStart = Math.floor((collection.currentPage - 1) / this.windowSize) * this.windowSize;
      var windowEnd = windowStart + this.windowSize;
      windowEnd = windowEnd <= lastPage ? windowEnd : lastPage;
      for (var i = windowStart; i < windowEnd; i++) {
        // render link if not at current page
        var handle = new PageHandle({
          label: i + 1,
          page: i + 1,
          className: i + 1 === collection.currentPage ? "active" : undefined,
          collection: collection
        });
        this.handles.push(handle);
        $ul.append(handle.render().$el);
      }

      this.renderFastForward();
    },

    /**
       Render the fast forward, fast backward, previous page and next page
       handles if `hasFastward` is true. Page handles are disabled at
       boundaries.
    */
    renderFastForward: function () {
      if (this.hasFastForward) {

        var $ul = this.$el.find("ul");
        var collection = this.collection;

        var gotoFirst = new PageHandle({
          label: "《",
          page: 1,
          className: collection.currentPage > collection.firstPage ? undefined : "disabled",
          collection: collection
        });

        var gotoPrev = new PageHandle({
          label: "〈",
          page: collection.currentPage - 1,
          className: collection.currentPage > collection.firstPage ? undefined : "disabled",
          collection: collection
        });

        var gotoNext = new PageHandle({
          label: "〉",
          page: collection.currentPage + 1,
          className: collection.currentPage < collection.totalPages ? undefined : "disabled",
          collection: collection
        });

        var gotoLast = new PageHandle({
          label: "》",
          page: collection.totalPages,
          className: collection.currentPage < collection.totalPages ? undefined : "disabled",
          collection: collection
        });

        this.handles.unshift(gotoPrev);
        this.handles.unshift(gotoFirst);
        this.handles.push(gotoNext);
        this.handles.push(gotoLast);
        $ul.prepend(gotoPrev.render().$el);
        $ul.prepend(gotoFirst.render().$el);
        $ul.append(gotoNext.render().$el);
        $ul.append(gotoLast.render().$el);
      }
    },

    /**
       Render the paginator handles inside an unordered list placed inside a
       cell that spans all the columns.
    */
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
