/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
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
     Column metadata
     @param {Backgrid.Row} [options.row=Backgrid.Row] The Row class to use.

     @throws {TypeError} If options.columns or options.collection is undefined.

     See Backgrid.Row.
  */
  initialize: function (options) {
    requireOptions(options, ["columns", "collection"]);

    this.columns = options.columns;
    if (!(this.columns instanceof Backbone.Collection)) {
      this.columns = new Columns(this.columns);
    }

    this.row = options.row || Row;
    this.rows = this.collection.map(function (model) {
      var row = new this.row({
        body: this,
        columns: this.columns,
        model: model
      });

      return row;
    }, this);

    var collection = this.collection;
    this.listenTo(collection, "add", this.insertRow);
    this.listenTo(collection, "remove", this.removeRow);
    this.listenTo(collection, "sort", this.refresh);
    this.listenTo(collection, "reset", this.refresh);
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

    // insertRow() is called directly
    if (!(collection instanceof Backbone.Collection) && !options) {
      this.collection.add(model, (options = collection));
      return;
    }

    options = _.extend({render: true}, options || {});

    var row = new this.row({
      body: this,
      columns: this.columns,
      model: model
    });

    var index = collection.indexOf(model);
    this.rows.splice(index, 0, row);

    var $el = this.$el;
    var $children = $el.children();
    var $rowEl = row.render().$el;

    if (options.render) {
      if (index >= $children.length) {
        $el.append($rowEl);
      }
      else {
        $children.eq(index).before($rowEl);
      }
    }
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
      return;
    }

    if (_.isUndefined(options.render) || options.render) {
      this.rows[options.index].remove();
    }

    this.rows.splice(options.index, 1);
  },

  /**
     Reinitialize all the rows inside the body and re-render them. Triggers a
     Backbone `backgrid:refresh` event along with the body instance as its event
     parameter when done.
  */
  refresh: function () {
    for (var i = 0; i < this.rows.length; i++) {
      this.rows[i].remove();
    }

    this.rows = this.collection.map(function (model) {
      var row = new this.row({
        body: this,
        columns: this.columns,
        model: model
      });

      return row;
    }, this);

    this.render();

    Backbone.trigger("backgrid:refresh", this);

    return this;
  },

  /**
     Renders all the rows inside this body.
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
    Determines index of first editable column
   */
  firstEditableColumnIdx: function() {
    // See which is the first editable column
    for (var i = 0; i < this.columns.length; i++) {
        var col = this.columns.at(i);
        if (col.get("editable")) {
            return i;
        }
    }
    return undefined;
  },


  /**
    Start editing paricular row, column
   */
  editRowCol: function(rowIdx, colIdx) {
    var targetRow = this.rows[rowIdx];
    if (targetRow !== undefined) {
        var targetCell = targetRow.cells[colIdx];
        if (targetCell !== undefined) {
            targetCell.enterEditMode();
        }
    }
  },

  /** 
    Starts editing a cell on the previous row before the exitedCell (same column)
  */
  editPrevRow: function(exitedCell, forceFirstColumn) {
    // Determine which row we exited from
    var exitRowIdx = this.rows.indexOf(exitedCell.row);
    
    // Determine which column we exited from
    var exitColIdx = this.columns.indexOf(exitedCell.column);

    
    // Determine target row/col
    var targetRowIdx = exitRowIdx - 1;
    var targetColIdx = exitColIdx;
    if (forceFirstColumn) {
        targetColIdx = this.firstEditableColumnIdx();
    }
    this.editRowCol(targetRowIdx, targetColIdx);


  },

  /** 
    Starts editing a cell on the next row after the exitedCell (same column)
  */
  editNextRow: function(exitedCell, forceFirstColumn) {
    // Determine which row we exited from
    var exitRowIdx = this.rows.indexOf(exitedCell.row);
    
    // Determine which column we exited from
    var exitColIdx = this.columns.indexOf(exitedCell.column);

    // Determine target row/col
    var targetRowIdx = exitRowIdx + 1;
    var targetColIdx = exitColIdx;
    if (forceFirstColumn) {
        targetColIdx = this.firstEditableColumnIdx();
    }
    this.editRowCol(targetRowIdx, targetColIdx);

    
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
  }

});
