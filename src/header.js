/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/

/**
   HeaderCell is a special cell class that renders a column header cell. If the
   column is sortable, a sorter is also rendered and will trigger a table
   refresh after sorting.

   @class Backgrid.HeaderCell
   @extends Backgrid.View
 */
var HeaderCell = Backgrid.HeaderCell = Backgrid.View.extend({

  /** @property */
  tagName: "th",

  /** @property */
  events: {
    "click a": "onClick"
  },

  /**
     Initializer.

     @param {Object} options
     @param {Backgrid.Column|Object} options.column

     @throws {TypeError} If options.column or options.collection is undefined.
   */
  initialize: function (options) {
    this.column = options.column;
    if (!(this.column instanceof Column)) {
      this.column = new Column(this.column);
    }

    var column = this.column
    var collection = this.collection
    var el = this.el;
    var classes = el.classList;

    this.listenTo(column, "change:editable change:sortable change:renderable",
                  function (column) {
                    var changed = column.changedAttributes();
                    for (var key in changed) {
                      if (changed.hasOwnProperty(key)) {
                        if (changed[key]) classes.add(key);
                        else classes.remove(key);
                      }
                    }
                  });
    this.listenTo(column, "change:direction", this.setCellDirectionMaybe);
    this.listenTo(column, "change:name change:label", this.render);

    if (Backgrid.callByNeed(column.editable(), column, collection)) classes.add("editable");
    if (Backgrid.callByNeed(column.sortable(), column, collection)) classes.add("sortable");
    if (Backgrid.callByNeed(column.renderable(), column, collection)) classes.add("renderable");

    this.listenTo(collection, "backgrid:sort", this.removeCellDirectionMaybe);
  },

  /**
     Event handler for the collection's `backgrid:sort` event. Removes all the
     CSS direction classes if the column being sorted on is not the same as this
     header cell's.
   */
  removeCellDirectionMaybe: function (columnToSort) {
    if (columnToSort.cid != this.column.cid) {
      var classes = this.el.classList;
      classes.remove("ascending");
      classes.remove("descending");
      this.column.set("direction", null);
    }
  },

  /**
     Event handler for the column's `change:direction` event. If this
     HeaderCell's column is being sorted on, it applies the direction given as a
     CSS class to the header cell. Removes all the CSS direction classes
     otherwise.
   */
  setCellDirectionMaybe: function (columnToSort, direction) {
    var classes = this.el.classList;
    classes.remove("ascending");
    classes.remove("descending");
    if (columnToSort.cid == this.column.cid && direction) classes.add(direction);
  },

  /**
     Event handler for the `click` event on the cell's anchor. If the column is
     sortable, clicking on the anchor will cycle through 3 sorting orderings -
     `ascending`, `descending`, and default.
   */
  onClick: function (e) {
    e.preventDefault();

    var column = this.column;
    var collection = this.collection;
    var event = "backgrid:sort";

    function cycleSort(header, col) {
      if (column.get("direction") === "ascending") collection.trigger(event, col, "descending");
      else if (column.get("direction") === "descending") collection.trigger(event, col, null);
      else collection.trigger(event, col, "ascending");
    }

    function toggleSort(header, col) {
      if (column.get("direction") === "ascending") collection.trigger(event, col, "descending");
      else collection.trigger(event, col, "ascending");
    }

    var sortable = Backgrid.callByNeed(column.sortable(), column, this.collection);
    if (sortable) {
      var sortType = column.get("sortType");
      if (sortType === "toggle") toggleSort(this, column);
      else cycleSort(this, column);
    }
  },

  /**
     Renders a header cell with a sorter, a label, and a class name for this
     column.
   */
  render: function () {
    this.empty();

    var label;

    var column = this.column;
    var sortable = Backgrid.callByNeed(column.sortable(), column, this.collection);

    if (sortable) {
      label = document.createElement("a");
      label.appendChild(document.createTextNode(this.column.get("label")));
      var caret = document.createElement("b");
      caret.className = "sort-caret";
      label.appendChild(caret);
    }
    else label = document.createTextNode(column.get("label"));
    this.el.appendChild(label);

    var classes = this.el.classList;
    classes.add(column.get("name"));

    var direction = column.get("direction");
    if (direction) classes.add(direction);

    this.delegateEvents();
    return this;
  }

});

/**
   HeaderRow is a controller for a row of header cells.

   @class Backgrid.HeaderRow
   @extends Backgrid.Row
 */
var HeaderRow = Backgrid.HeaderRow = Backgrid.Row.extend({

  requiredOptions: ["columns", "collection"],

  /**
     Initializer.

     @param {Object} options
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns
     @param {Backgrid.HeaderCell} [options.headerCell] Customized default
     HeaderCell for all the columns. Supply a HeaderCell class or instance to a
     the `headerCell` key in a column definition for column-specific header
     rendering.

     @throws {TypeError} If options.columns or options.collection is undefined.
   */
  initialize: function () {
    HeaderRow.__super__.initialize.apply(this, arguments);
  },

  makeCell: function (column, options) {
    var headerCell = column.get("headerCell") || options.headerCell || HeaderCell;
    headerCell = new headerCell({
      column: column,
      collection: this.collection
    });
    return headerCell;
  }

});

/**
   Header is a special structural view class that renders a table head with a
   single row of header cells.

   @class Backgrid.Header
   @extends Backgrid.View
 */
var Header = Backgrid.Header = Backgrid.View.extend({

  /** @property */
  tagName: "thead",

  /**
     Initializer. Initializes this table head view to contain a single header
     row view.

     @param {Object} options
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns Column metadata.
     @param {Backbone.Model} options.model The model instance to render.

     @throws {TypeError} If options.columns or options.model is undefined.
   */
  initialize: function (options) {
    this.columns = options.columns;
    if (!(this.columns instanceof Backbone.Collection)) {
      this.columns = new Columns(this.columns);
    }

    this.row = new Backgrid.HeaderRow({
      columns: this.columns,
      collection: this.collection
    });
  },

  /**
     Renders this table head with a single row of header cells.
   */
  render: function () {
    this.el.appendChild(this.row.render().el);
    this.delegateEvents();
    return this;
  },

  /**
     Clean up this header and its row.

     @chainable
   */
  remove: function () {
    this.row.remove.apply(this.row, arguments);
    return Header.__super__.remove.apply(this, arguments);
  }

});
