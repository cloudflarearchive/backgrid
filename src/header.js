/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/**
   HeaderCell is a special cell class that renders a column header if the column
   is renderable. If the column is sortable, a sorter is also rendered and will
   trigger a table refresh after sorting.

   @class Backgrid.HeaderCell
   @extends Backbone.View
 */
var HeaderCell = Backgrid.HeaderCell = Backbone.View.extend({

  /** @property */
  tagName: "th",

  /** @property */
  events: {
    "click a": "triggerSort"
  },

  /**
    @property {null|"ascending"|"descending"} direction
  */
  direction: null,

  /**
     Initializer.

     @param {Object} options
     @param {*} options.parent
     @param {Backgrid.Column|Object} options.column
   */
  initialize: function (options) {
    this.parent = options.parent;
    this.column = options.column;
    if (!this.column instanceof Column) {
      this.column = new Column(this.column);
    }
  },

  dispose: function () {
    if (this.parent && this.parent.off) this.parent.off(null, null, this);
    this.column.off(null, null, this);
    return Backbone.View.prototype.dispose.apply(this, arguments);
  },

  /**
     This is an internal function used by Backgrid.Header to toggle the
     rendering of a sorting state.
   */
  toggle: function (columnName, direction) {
    var $label = this.$el.find("a");
    $label.removeClass("ascending descending");

    if (columnName === this.column.get("name")) {
      if (direction) {
        $label.addClass(direction);
      }
      this.direction = direction;
    }
    else {
      this.direction = null;
    }
  },

  /**
     Event handler for the `click` event on the cell's anchor. If the column is
     sortable, clicking on the anchor will cycle through 3 sorting orderings -
     `ascending`, `descending`, and default. If the ordering is not default, a
     CSS class corresponding to the ordering will be applied to the header cell.

     This method will trigger a Backbone `sort` event to listeners with a custom
     comparator. The default implementation will delegate to the underlying
     collection to do the sorting.
   */
  triggerSort: function (e) {
    e.preventDefault();

    var self = this;
    var columnName = self.column.get("name");

    if (self.column.get("sortable")) {
      if (this.direction === "ascending") {

        /**
           Backbone event. Fired when the sorter is clicked on a sortable
           column.

           @event sort
           @param {function(*, *): number} comparator A Backbone.Collection#comparator.
         */
        self.trigger("sort", function (left, right) {
          var leftVal = left.get(columnName);
          var rightVal = right.get(columnName);
          if (leftVal === rightVal) {
            return 0;
          }
          else if (leftVal > rightVal) { return -1; }
          return 1;
        }, columnName, "descending");
      }
      else if (this.direction === "descending") {
        self.trigger("sort", null, columnName, null);
      }
      else {
        self.trigger("sort", function (left, right) {
          var leftVal = left.get(columnName);
          var rightVal = right.get(columnName);
          if (leftVal === rightVal) {
            return 0;
          }
          else if (leftVal < rightVal) { return -1; }
          return 1;
        }, columnName, "ascending");
      }
    }
  },

  /**
     Renders a header cell with a sorter and a label.
   */
  render: function () {
    this.$el.empty();
    var $label = $("<a>").text(this.column.get("label")).append("<b class='sort-caret'></b>");
    this.$el.append($label);
    return this;
  }

});

/**
   Header is a special structural view class that renders a table head with a
   single row of header cells.

   @class Backgrid.Header
   @extends Backbone.View
 */
var Header = Backgrid.Header = Backbone.View.extend({

  /** @property */
  tagName: "thead",

  /**
     Initializer.

     @param {Object} options
     @param {*} [options.parent]
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns
     @param {Backgrid.HeaderCell} options.headerCell You can customize header
     cell rendering by supplying your own header cell view.

     See:

     - Backgrid.HeaderCell
   */
  initialize: function (options) {
    var self = this;

    self.parent = options.parent;
    self.columns = options.columns;
    if (!(self.columns instanceof Backbone.Collection)) {
      self.columns = new Columns(self.columns);
    }
    self.cells = [];

    self.headerCell = options.headerCell || HeaderCell;
    for (var i = 0; i < self.columns.length; i++) {
      var column = self.columns.at(i);
      if (column.get("renderable")) {
        var headerCell = column.get("headerCell") || self.headerCell;
        var cell = new headerCell({
          parent: self,
          column: column
        });
        cell.on("sort", self.dispatchSortEvent, self);
        self.cells.push(cell);
      }
    }

  },

  dispose: function () {
    this.columns.off(null, null, this);
    if (this.parent && this.parent.off) this.parent.off(null, null, this);
    var cell = null;
    for (var i = 0; i < this.cells.length; i++) {
      cell = this.cells[i];
      cell.off(null, null, this);
      cell.dispose();
    }
    return Backbone.View.prototype.dispose.apply(this, arguments);
  },

  /**
     Internal callback function to respond to a `sort` event from a
     HeaderCell. The comparator is dispatched to the underlying collection
     through the parent and the header cells are cycled to their correct
     rendering for this sorting event.
   */
  dispatchSortEvent: function (comparator, sortByColName, direction) {
    this.parent.sort(comparator);
    _.each(this.cells, function (cell) {
      cell.toggle(sortByColName, direction);
    });
  },

  /**
     Renders this table head with a single row of header cells.
     @chainable
   */
  render: function () {
    var self = this;
    self.$el.empty();
    var $tr = $("<tr>");
    _.each(self.cells, function (cell) {
      $tr.append(cell.render().$el);
    });
    self.$el.append($tr);
    return self;
  }

});
