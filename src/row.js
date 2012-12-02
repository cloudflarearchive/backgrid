/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/**
   Row is a simple container view that takes a model instance and a list of
   column metadata describing how each of the model's attribute is to be
   rendered, and apply the appropriate cell to each attribute.

   @class Backgrid.Row
   @extends Backbone.View
 */
var Row = Backgrid.Row = Backbone.View.extend({

  /** @property */
  tagName: "tr",

  /**
     Initializes a row view instance.

     @param {Object} options
     @param {*} options.parent
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns Column metadata.
     @param {Backbone.Model} options.model The model instance to render.

     @throws {TypeError} If options.columns or options.model is undefined.
   */
  initialize: function (options) {
    requireOptions(options, ["columns", "model"]);
    this.parent = options.parent;
    this.columns = options.columns;
    if (!(this.columns instanceof Backbone.Collection)) {
      this.columns = new Columns(this.columns);
    }
    this.columns.on("change:renderable", this.renderColumn, this);

    this.cells = [];
    var self = this;
    this.columns.each(function (column) {
      var cell = new (column.get("cell"))({
        parent: self,
        column: column,
        model: self.model
      });

      self.cells.push(cell);
    });
  },

  dispose: function () {
    this.columns.off(null, null, this);
    if (this.parent && this.parent.off) this.parent.off(null, null, this);
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i].off(null, null, this);
    }
    return Backbone.View.prototype.dispose.apply(this, arguments);
  },

  /**
     Backbone event handler. Insert a table cell DOM subtree to the right column
     if renderable is true, detach otherwise.

     @param {Backgrid.Column} column
     @param {boolean} renderable
   */
  renderColumn: function (column, renderable) {
    var spliceIndex = this.columns.indexOf(column);
    if (renderable) {
      var cell = this.cells[spliceIndex];
      if (spliceIndex === 0) {
        this.$el.prepend(cell.render().$el);
      }
      else if (spliceIndex === this.columns.length - 1) {
        this.$el.append(cell.render().$el);
      }
      else {
        this.$el.children().eq(spliceIndex).before(cell.render().$el);
      }
    }
    else {
      this.$el.children().eq(spliceIndex).detach();
    }
  },

  /**
     Renders a row of cells for this row's model.
   */
  render: function () {
    this.$el.empty();
    for (var i = 0; i < this.cells.length; i++) {
      var cell = this.cells[i];
      if (cell.column.get("renderable")) {
        this.$el.append(cell.render().$el);
      }
    }
    return this;
  }

});
