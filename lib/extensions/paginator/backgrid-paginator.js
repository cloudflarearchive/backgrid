/*
  backgrid-paginator
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

(function ($, _, Backbone, Backgrid) {

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

    /** @property */
    template: _.template('<tr><td colspan="<%= colspan %>"><ul><% _.each(handles, function (handle) { %><li <% if (handle.className) { %>class="<%= handle.className %>"<% } %>><a href="#" <% if (handle.title) {%> title="<%= handle.title %>"<% } %>><%= handle.label %></a></li><% }); %></ul></td></tr>'),

    /** @property */
    events: {
      "click a": "changePage"
    },

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
      this.collection.on("reset", this.render, this);
    },

    dispose: function () {
      if (this.parent && this.parent.off) this.parent.off(null, null, this);
      this.columns.off(null, null, this);
      return Backbone.View.prototype.dispose.apply(this, arguments);
    },

    /**
       jQuery event handler for the page handlers. Goes to the right page upon
       clicking.

       @param {Event} e
     */
    changePage: function (e) {
      e.preventDefault();

      var $anchors = this.$el.find("a");

      var pageIndexInWindow = $anchors.index(e.target);
      var anchorSize = $anchors.size();

      if (this.hasFastForward) {
        switch (pageIndexInWindow) {
        case 0:
          this.collection.getFirstPage();
          return;
        case 1:
          this.collection.getPreviousPage();
          return;
        case anchorSize - 2:
          this.collection.getNextPage();
          return;
        case anchorSize - 1:
          this.collection.getLastPage();
          return;
        default:
          pageIndexInWindow -= 2;
        }
      }

      var state = this.collection.state;
      var currentPage = state.firstPage === 0 ?
        state.currentPage :
        state.currentPage - 1;
      var windowStart = Math.floor(currentPage / this.windowSize) * this.windowSize;
      var pageIndex = windowStart + pageIndexInWindow;
      this.collection.getPage(state.firstPage === 0 ? pageIndex : pageIndex + 1);
    },

    /**
       Internal method to create a list of page handle objects for the template
       to render them.

       @return Array.<Object> an array of page handle objects hashes
     */
    makeHandles: function () {

      var handles = [];
      var collection = this.collection;
      var state = collection.state;

      // convert all indices to 0-based here
      var lastPage = state.firstPage === 0 ? state.lastPage : state.lastPage - 1;
      var currentPage = state.firstPage === 0 ? state.currentPage : state.currentPage - 1;
      var windowStart = Math.floor(currentPage / this.windowSize) * this.windowSize;
      var windowEnd = windowStart + this.windowSize;
      windowEnd = windowEnd <= lastPage ? windowEnd : lastPage + 1;
      for (var i = windowStart; i < windowEnd; i++) {
        handles.push({
          label: i + 1,
          title: "No. " + (i + 1),
          className: currentPage === i ? "active" : undefined
        });
      }

      if (this.hasFastForward) {
        handles.unshift({
          label: "〈",
          className: currentPage - 1 < 0 ? "disabled" : undefined
        });

        handles.unshift({
          label: "《",
          className: currentPage - 1 < 0 ? "disabled" : undefined
        });

        handles.push({
          label: "〉",
          className: currentPage + 1 > lastPage ? "disabled" : undefined
        });

        handles.push({
          label: "》",
          className: currentPage + 1 > lastPage ? "disabled" : undefined
        });
      }

      return handles;
    },

    /**
       Render the paginator handles inside an unordered list placed inside a
       cell that spans all the columns.
    */
    render: function () {

      this.$el.empty();

      var colspan = _.reduce(
        this.columns.pluck("renderable"),
        function (accum, renderable) {
          return renderable ? accum + 1 : 0;
        }, 0);

      this.$el.append($(this.template({
        colspan: colspan,
        handles: this.makeHandles()
      })));

      return this;
    }

  });

}(jQuery, _, Backbone, Backgrid));
