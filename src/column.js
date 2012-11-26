/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/**
   A Column is a placeholder for column metadata.

   You usually don't need to create an instance of this class yourself as a
   collection of column instances will be created for you from a list of column
   attributes in the Backgrid.js view class constructors.

   @class Backgrid.Column
   @extends Backbone.Model
 */
var Column = Backgrid.Column = Backbone.Model.extend({

  defaults: {
    name: null,
    label: null,
    sortable: true,
    editable: true,
    renderable: true,
    formatter: null,
    cell: null,
    headerCell: null
  },

  /**
     Initializes this Column instance.

     @param {Object} attrs Column attributes.
     @param {string} attrs.name The name of the model attribute.
     @param {string|Backgrid.Cell} attrs.cell The cell type.
     If this is a string, the capitalized form will be used to look up a
     cell class in Backbone, i.e.: string => StringCell. If a Cell subclass
     is supplied, it is initialized with a hash of parameters. If a Cell
     instance is supplied, it is used directly.
     @param {string|Backgrid.HeaderCell} attrs.headerCell The header cell type.
     @param {string} [attrs.label=null] The label to show in the header.
     @param {boolean} [attrs.sortable=true]
     @param {boolean} [attrs.editable=true]
     @param {boolean} [attrs.renderable=true]
     @param {Backgrid.Formatter|Object|string} [attrs.formatter=null] The
     formatter to use to convert between raw model values and user input.

     @throws {Error} If attrs.cell or attrs.options are not supplied.
     @throws {ReferenceError} If attrs.cell is a string but a cell class of
     said name cannot be found in the Backgrid module.

     See:

     - Backgrid.Cell
     - Backgrid.Formatter
   */
  initialize: function (attrs) {

    if (!this.has("label")) {
      this.set({ label: this.get("name") }, { silent: true });
    }

    if (!attrs.cell) { throw new Error("cell is required"); }
    if (!attrs.name) { throw new Error("name is required"); }

    if (typeof attrs.cell === "string") {
      var key = capitalize(this.get("cell")) + "Cell";
      var cell = Backgrid[key] || Backgrid.Extension[key];
      if (typeof cell === "undefined") throw new ReferenceError("Cell type '" + attrs.cell  + "' not found");
      this.set({
        cell: cell
      }, { silent: true });
    }
    else {
      this.set({ cell: attrs.cell }, { silent: true });
    }
  }

});

/**
   A Backbone collection of Column instances.

   @class Backgrid.Columns
   @extends Backbone.Collection
 */
var Columns = Backgrid.Columns = Backbone.Collection.extend({

  /**
     @property {Backgrid.Column} model
   */
  model: Column
});
