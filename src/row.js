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
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns Column metadata.
     @param {Backbone.Model} options.model The model instance to render.

     @throws {TypeError} If options.columns or options.model is undefined.
   */
  initialize: function (options) {
    requireOptions(options, ["columns", "model"]);
    this.columns = options.columns;
    if (!(this.columns instanceof Backbone.Collection)) {
      this.columns = new Columns(this.columns);
    }
    this.listenTo(this.columns, "change:renderable", this.renderColumn);

    var cells = this.cells = [];
    for (var i = 0; i < this.columns.length; i++) {
      var column = this.columns.at(i);
      cells.push(new (column.get("cell"))({
        column: column,
        model: this.model
      }));
    }
  },

  /**
     Backbone event handler. Insert a table cell to the right column in the row
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
