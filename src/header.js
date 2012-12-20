/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/**
   HeaderCell is a special cell class that renders a column header cell. If the
   column is sortable, a sorter is also rendered and will trigger a table
   refresh after sorting.

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
    @property {null|"ascending"|"descending"} _direction The current sorting
    direction of this column.
  */
  _direction: null,

  /**
     Initializer.

     @param {Object} options
     @param {*} options.parent
     @param {Backgrid.Column|Object} options.column

     @throws {TypeError} If options.column or options.collection is undefined.
   */
  initialize: function (options) {
    requireOptions(options, ["column", "collection"]);
    this.parent = options.parent;
    this.column = options.column;
    if (!(this.column instanceof Column)) {
      this.column = new Column(this.column);
    }
    this.on("sort", this.sort, this);
  },

  dispose: function () {
    if (this.parent && this.parent.off) this.parent.off(null, null, this);
    this.column.off(null, null, this);
    return Backbone.View.prototype.dispose.apply(this, arguments);
  },

  /**
     Gets or sets the direction of this cell. If called directly without
     parameters, returns the current direction of this cell, otherwise sets
     it. If a `null` is given, sets this cell back to the default order.

     @param {null|"ascending"|"descending"} dir
     @return {null|string} The current direction or the changed direction.
   */
  direction: function (dir) {
    if (arguments.length) {

      if (this._direction) {
        this.$el.removeClass(this._direction);
      }

      if (dir) {
        this.$el.addClass(dir);
      }

      this._direction = dir;
    }

    return this._direction;
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

    var columnName = this.column.get("name");

    if (this.column.get("sortable")) {
      if (this.direction() === "ascending") {

        /**
           Backbone event. Fired when the sorter is clicked on a sortable
           column.

           @event sort
           @param {function(*, *): number} comparator A Backbone.Collection#comparator.
         */
        this.trigger("sort", function (left, right) {
          var leftVal = left.get(columnName);
          var rightVal = right.get(columnName);
          if (leftVal === rightVal) {
            return 0;
          }
          else if (leftVal > rightVal) { return -1; }
          return 1;
        }, columnName, "descending");
        this.direction("descending");
      }
      else if (this.direction() === "descending") {
        this.trigger("sort", null, columnName, null);
        this.direction(null);
      }
      else {
        this.trigger("sort", function (left, right) {
          var leftVal = left.get(columnName);
          var rightVal = right.get(columnName);
          if (leftVal === rightVal) {
            return 0;
          }
          else if (leftVal < rightVal) { return -1; }
          return 1;
        }, columnName, "ascending");
        this.direction("ascending");
      }
    }
  },

  /**
     If the underlying collection is a Backbone.PageableCollection in
     server-mode, a page of models is fetched after sorting is done on the
     server.

     If the underlying collection is a Backbone.PageableCollection in
     client-mode, or any
     [Backbone.Collection](http://backbonejs.org/#Collection) instance, sorting
     is done on the client side. If the collection is an instance of a
     Backbone.PageableCollection, sorting will be done globally on all the pages
     and the current page will then be returned.

     @param {function(*, *): number} [comparator]

     See [Backbone.Collection#comparator](http://backbonejs.org/#Collection-comparator)
  */
  sort: function (comparator, columnName, direction) {

    comparator = direction ? comparator : this._idCidComparator;

    var collection = this.collection;

    if (this.collection instanceof Backbone.PageableCollection) {

      var state = collection.state;
      state.sortKey = columnName;

      if (direction === "ascending") {
        state.order = -1;
      }
      else if (direction === "descending") {
        state.order = 1;
      }
      else {
        state.order = null;
      }

      if (state.isClientMode) {
        if (!(collection.fullCollection.comparator = collection.makeComparator())) {
          collection.fullCollection.comparator = comparator;
        }
        collection.fullCollection.sort();
      }
      else {
        collection.fetch();
      }
    }
    else {
      var oldComparator = collection.comparator;
      collection.comparator = comparator;
      try {
        collection.sort();
      }
      finally {
        collection.comparator = oldComparator;
      }
    }
  },

  /**
     Default comparator for Backbone.Collections. Sorts ids and cids in
     ascending order.

     @private
     @param {*} left
     @param {*} right
  */
  _idCidComparator: function (left, right) {
    var lid = left.id,
    lcid = left.cid,
    rid = right.id,
    rcid = right.cid;

    if (!_.isUndefined(lid) || !_.isUndefined(rid)) {
      if (lid < rid) return -1;
      else if (lid > rid) return 1;
    }
    else if (!_.isUndefined(lid) && !_.isUndefined(rcid)) {
      if (lid < rcid) return -1;
      else if (lid > rcid) return 1;
    }
    else if (!_.isUndefined(lcid) && !_.isUndefined(rid)) {
      if (lcid < rid) return -1;
      else if (lcid > rid) return 1;
    }
    else if (!_.isUndefined(lcid) && !_.isUndefined(rcid)) {
      if (lcid < rcid) return -1;
      else if (lcid > rcid) return 1;
    }

    return 0;
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
   HeaderRow is a controller for a row of header cells.

   @class Backgrid.HeaderRow
   @extends Backgrid.Row
 */
var HeaderRow = Backgrid.HeaderRow = Backgrid.Row.extend({

  /**
     Initializer.

     @param {Object} options
     @param {*} [options.parent]
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns
     @param {Backgrid.HeaderCell} options.headerCell You can customize header
     cell rendering by supplying your own header cell view.

     @throws {TypeError} If options.columns or options.collection is undefined.
   */
  initialize: function (options) {
    requireOptions(options, ["columns", "collection"]);

    this.parent = options.parent;
    this.columns = options.columns;
    if (!(this.columns instanceof Backbone.Collection)) {
      this.columns = new Columns(this.columns);
    }
    this.columns.on("change:renderable", this.renderColumn, this);

    this.cells = [];
    this.headerCell = options.headerCell || HeaderCell;
    for (var i = 0; i < this.columns.length; i++) {
      var column = this.columns.at(i);
      var headerCell = column.get("headerCell") || this.headerCell;
      var cell = new headerCell({
        parent: this,
        column: column,
        collection: this.collection
      });
      cell.on("sort", this.resetCellDirections, this);
      this.cells.push(cell);
    }
  },

  /**
     Internal callback function to respond to a `sort` event from a
     HeaderCell. Resets the sorting directions of the cells that the `sort`
     event *DID NOT* originate from.
   */
  resetCellDirections: function (comparator, sortByColName, direction) {
    _.each(this.cells, function (cell) {
      if (cell.column.get("renderable") && cell.column.get("name") !== sortByColName) {
        cell.direction(null);
      }
    });
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
     Initializer. Initializes this table head view to contain a single header
     row view.

     @param {Object} options
     @param {*} options.parent
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns Column metadata.
     @param {Backbone.Model} options.model The model instance to render.

     @throws {TypeError} If options.columns or options.model is undefined.
   */
  initialize: function (options) {
    requireOptions(options, ["columns", "collection"]);

    this.parent = options.parent;
    this.columns = options.columns;
    if (!(this.columns instanceof Backbone.Collection)) {
      this.columns = new Columns(this.columns);
    }

    this.row = new Backgrid.HeaderRow({
      parent: this,
      columns: this.columns,
      collection: this.collection
    });
  },

  dispose: function () {
    this.row.off(null, null, this);
    this.columns.off(null, null, this);
    if (this.parent && this.parent.on) this.parent.off(null, null, this);
    return Backbone.View.prototype.dispose.apply(this, arguments);
  },

  /**
     Renders this table head with a single row of header cells.
   */
  render: function () {
    this.$el.append(this.row.render().$el);
    return this;
  }

});
