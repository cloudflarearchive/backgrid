/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/

/**
   Body is the table body which contains the rows inside a table. Body is
   responsible for refreshing the rows after sorting, insertion and removal.

   @class Backgrid.Body
   @extends Backbone.View
*/
var Body = Backgrid.Body = Backbone.View.extend({

  /** @property */
  tagName: "tbody",

  /**
     Initializer.

     @param {Object} options
     @param {Backbone.Collection} options.collection
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns
     Column metadata.
     @param {Backgrid.Row} [options.row=Backgrid.Row] The Row class to use.
     @param {string|function(): string} [options.emptyText] The text to display in the empty row.

     @throws {TypeError} If options.columns or options.collection is undefined.

     See Backgrid.Row.
  */
  initialize: function (options) {

    this.columns = options.columns;
    if (!(this.columns instanceof Backbone.Collection)) {
      this.columns = new Columns(this.columns);
    }

    this.row = options.row || this.row || Row;
    this.rows = this.collection.map(function (model) {
      var row = new this.row({
        columns: this.columns,
        model: model
      });

      return row;
    }, this);

    this.emptyText = options.emptyText;
    this._unshiftEmptyRowMayBe();

    var collection = this.collection;
    this.listenTo(collection, "add", this.insertRow);
    this.listenTo(collection, "remove", this.removeRow);
    this.listenTo(collection, "sort", this.refresh);
    this.listenTo(collection, "reset", this.refresh);
    this.listenTo(collection, "backgrid:sort", this.sort);
    this.listenTo(collection, "backgrid:edited", this.moveToNextCell);

    this.listenTo(this.columns, "add remove", this.updateEmptyRow);
  },

  _unshiftEmptyRowMayBe: function () {
    if (this.rows.length === 0 && this.emptyText != null) {
      this.emptyRow = new EmptyRow({
        emptyText: this.emptyText,
        columns: this.columns
      });

      this.rows.unshift(this.emptyRow);
      return true
    }
  },

  /**
     This method can be called either directly or as a callback to a
     [Backbone.Collecton#add](http://backbonejs.org/#Collection-add) event.

     When called directly, it accepts a model or an array of models and an
     option hash just like
     [Backbone.Collection#add](http://backbonejs.org/#Collection-add) and
     delegates to it. Once the model is added, a new row is inserted into the
     body and automatically rendered.

     When called as a callback of an `add` event, splices a new row into the
     body and renders it.

     @param {Backbone.Model} model The model to render as a row.
     @param {Backbone.Collection} collection When called directly, this
     parameter is actually the options to
     [Backbone.Collection#add](http://backbonejs.org/#Collection-add).
     @param {Object} options When called directly, this must be null.

     See:

     - [Backbone.Collection#add](http://backbonejs.org/#Collection-add)
  */
  insertRow: function (model, collection, options) {

    if (this.rows[0] instanceof EmptyRow) this.rows.pop().remove();

    // insertRow() is called directly
    if (!(collection instanceof Backbone.Collection) && !options) {
      this.collection.add(model, (options = collection));
      return;
    }

    var row = new this.row({
      columns: this.columns,
      model: model
    });

    var index = collection.indexOf(model);
    this.rows.splice(index, 0, row);

    var $el = this.$el;
    var $children = $el.children();
    var $rowEl = row.render().$el;

    if (index >= $children.length) {
      $el.append($rowEl);
    }
    else {
      $children.eq(index).before($rowEl);
    }

    return this;
  },

  /**
     The method can be called either directly or as a callback to a
     [Backbone.Collection#remove](http://backbonejs.org/#Collection-remove)
     event.

     When called directly, it accepts a model or an array of models and an
     option hash just like
     [Backbone.Collection#remove](http://backbonejs.org/#Collection-remove) and
     delegates to it. Once the model is removed, a corresponding row is removed
     from the body.

     When called as a callback of a `remove` event, splices into the rows and
     removes the row responsible for rendering the model.

     @param {Backbone.Model} model The model to remove from the body.
     @param {Backbone.Collection} collection When called directly, this
     parameter is actually the options to
     [Backbone.Collection#remove](http://backbonejs.org/#Collection-remove).
     @param {Object} options When called directly, this must be null.

     See:

     - [Backbone.Collection#remove](http://backbonejs.org/#Collection-remove)
  */
  removeRow: function (model, collection, options) {

    // removeRow() is called directly
    if (!options) {
      this.collection.remove(model, (options = collection));
      if (this._unshiftEmptyRowMayBe()) {
        this.render();
      }
      return;
    }

    if (_.isUndefined(options.render) || options.render) {
      this.rows[options.index].remove();
    }

    this.rows.splice(options.index, 1);
    if (this._unshiftEmptyRowMayBe()) {
      this.render();
    }

    return this;
  },

  /**
     Rerender the EmptyRow which empties the DOM element, creates the td with the
     updated colspan, and appends it back into the DOM
  */

  updateEmptyRow: function () {
    if (this.emptyRow != null) {
      this.emptyRow.render();
    }
  },

  /**
     Reinitialize all the rows inside the body and re-render them. Triggers a
     Backbone `backgrid:refresh` event from the collection along with the body
     instance as its sole parameter when done.
  */
  refresh: function () {
    for (var i = 0; i < this.rows.length; i++) {
      this.rows[i].remove();
    }

    this.rows = this.collection.map(function (model) {
      var row = new this.row({
        columns: this.columns,
        model: model
      });

      return row;
    }, this);
    this._unshiftEmptyRowMayBe();

    this.render();

    this.collection.trigger("backgrid:refresh", this);

    return this;
  },

  /**
     Renders all the rows inside this body. If the collection is empty and
     `options.emptyText` is defined and not null in the constructor, an empty
     row is rendered, otherwise no row is rendered.
  */
  render: function () {
    this.$el.empty();

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < this.rows.length; i++) {
      var row = this.rows[i];
      fragment.appendChild(row.render().el);
    }

    this.el.appendChild(fragment);

    this.delegateEvents();

    return this;
  },

  /**
     Clean up this body and it's rows.

     @chainable
  */
  remove: function () {
    for (var i = 0; i < this.rows.length; i++) {
      var row = this.rows[i];
      row.remove.apply(row, arguments);
    }
    return Backbone.View.prototype.remove.apply(this, arguments);
  },

  /**
     If the underlying collection is a Backbone.PageableCollection in
     server-mode or infinite-mode, a page of models is fetched after sorting is
     done on the server.

     If the underlying collection is a Backbone.PageableCollection in
     client-mode, or any
     [Backbone.Collection](http://backbonejs.org/#Collection) instance, sorting
     is done on the client side. If the collection is an instance of a
     Backbone.PageableCollection, sorting will be done globally on all the pages
     and the current page will then be returned.

     Triggers a Backbone `backgrid:sorted` event from the collection when done
     with the column, direction and a reference to the collection.

     @param {Backgrid.Column|string} column
     @param {null|"ascending"|"descending"} direction

     See [Backbone.Collection#comparator](http://backbonejs.org/#Collection-comparator)
  */
  sort: function (column, direction) {

    if (!_.contains(["ascending", "descending", null], direction)) {
      throw new RangeError('direction must be one of "ascending", "descending" or `null`');
    }

    if (_.isString(column)) column = this.columns.findWhere({name: column});

    var collection = this.collection;

    var order;
    if (direction === "ascending") order = -1;
    else if (direction === "descending") order = 1;
    else order = null;

    var comparator = this.makeComparator(column.get("name"), order,
                                         order ?
                                         column.sortValue() :
                                         function (model) {
                                           return model.cid.replace('c', '') * 1;
                                         });

    if (Backbone.PageableCollection &&
        collection instanceof Backbone.PageableCollection) {

      collection.setSorting(order && column.get("name"), order,
                            {sortValue: column.sortValue()});

      if (collection.fullCollection) {
        // If order is null, pageable will remove the comparator on both sides,
        // in this case the default insertion order comparator needs to be
        // attached to get back to the order before sorting.
        if (collection.fullCollection.comparator == null) {
          collection.fullCollection.comparator = comparator;
        }
        collection.fullCollection.sort();
        collection.trigger("backgrid:sorted", column, direction, collection);
      }
      else collection.fetch({reset: true, success: function () {
        collection.trigger("backgrid:sorted", column, direction, collection);
      }});
    }
    else {
      collection.comparator = comparator;
      collection.sort();
      collection.trigger("backgrid:sorted", column, direction, collection);
    }

    column.set("direction", direction);

    return this;
  },

  makeComparator: function (attr, order, func) {

    return function (left, right) {
      // extract the values from the models
      var l = func(left, attr), r = func(right, attr), t;

      // if descending order, swap left and right
      if (order === 1) t = l, l = r, r = t;

      // compare as usual
      if (l === r) return 0;
      else if (l < r) return -1;
      return 1;
    };
  },

  /**
     Moves focus to the next renderable and editable cell and return the
     currently editing cell to display mode.

     Triggers a `backgrid:next` event on the model with the indices of the row
     and column the user *intended* to move to, and whether the intended move
     was going to go out of bounds. Note that *out of bound* always means an
     attempt to go past the end of the last row.

     @param {Backbone.Model} model The originating model
     @param {Backgrid.Column} column The originating model column
     @param {Backgrid.Command} command The Command object constructed from a DOM
     event
  */
  moveToNextCell: function (model, column, command) {
    var i = this.collection.indexOf(model);
    var j = this.columns.indexOf(column);
    var cell, renderable, editable, m, n;

    // return if model being edited in a different grid
    if (j === -1) return this;

    this.rows[i].cells[j].exitEditMode();

    if (command.moveUp() || command.moveDown() || command.moveLeft() ||
        command.moveRight() || command.save()) {
      var l = this.columns.length;
      var maxOffset = l * this.collection.length;

      if (command.moveUp() || command.moveDown()) {
        m = i + (command.moveUp() ? -1 : 1);
        var row = this.rows[m];
        if (row) {
          cell = row.cells[j];
          if (Backgrid.callByNeed(cell.column.editable(), cell.column, model)) {
            cell.enterEditMode();
            model.trigger("backgrid:next", m, j, false);
          }
        }
        else model.trigger("backgrid:next", m, j, true);
      }
      else if (command.moveLeft() || command.moveRight()) {
        var right = command.moveRight();
        for (var offset = i * l + j + (right ? 1 : -1);
             offset >= 0 && offset < maxOffset;
             right ? offset++ : offset--) {
          m = ~~(offset / l);
          n = offset - m * l;
          cell = this.rows[m].cells[n];
          renderable = Backgrid.callByNeed(cell.column.renderable(), cell.column, cell.model);
          editable = Backgrid.callByNeed(cell.column.editable(), cell.column, model);
          if (renderable && editable) {
            cell.enterEditMode();
            model.trigger("backgrid:next", m, n, false);
            break;
          }
        }

        if (offset == maxOffset) {
          model.trigger("backgrid:next", ~~(offset / l), offset - m * l, true);
        }
      }
    }

    return this;
  }
});
