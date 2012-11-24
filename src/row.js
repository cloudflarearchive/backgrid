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
   */
  initialize: function (options) {
    var self = this;
    self.parent = options.parent;
    self.columns = options.columns;
    if (!(self.columns instanceof Backbone.Collection)) {
      self.columns = new Columns(self.columns);
    }
    self.cells = [];
    self.columns.each(function (column) {
      if (column.get("renderable")) {
        var cell = column.get("cell");
        cell = new cell({
          column: column,
          model: self.model
        });
        self.cells.push(cell);
      }
    });
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
     Renders a row of cells for this row's model.
   */
  render: function () {
    this.$el.empty();
    for (var i = 0; i < this.cells.length; i++) {
      this.$el.append(this.cells[i].render().$el);
    }
    return this;
  }

});
