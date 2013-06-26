/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
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
    name: undefined,
    label: undefined,
    sortable: true,
    editable: true,
    renderable: true,
    formatter: undefined,
    sortValue: undefined,
    cell: undefined,
    headerCell: undefined,
    direction: null
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

     @param {string|Backgrid.HeaderCell} [attrs.headerCell] The header cell type.

     @param {string} [attrs.label] The label to show in the header.

     @param {boolean|string} [attrs.sortable=true]

     @param {boolean|string} [attrs.editable=true]

     @param {boolean|string} [attrs.renderable=true]

     @param {Backgrid.CellFormatter | Object | string} [attrs.formatter] The
     formatter to use to convert between raw model values and user input.

     @param {(function(Backbone.Model, string): Object) | string} [sortValue] The
     function to use to extract a value from the model for comparison during
     sorting. If this value is a string, a method with the same name will be
     looked up from the column instance.

     @throws {TypeError} If attrs.cell or attrs.options are not supplied.

     @throws {ReferenceError} If formatter is a string but a formatter class of
     said name cannot be found in the Backgrid module.

     See:

     - Backgrid.Cell
     - Backgrid.CellFormatter
   */
  initialize: function (attrs) {
    Backgrid.requireOptions(attrs, ["cell", "name"]);

    if (!this.has("label")) {
      this.set({ label: this.get("name") }, { silent: true });
    }

    var headerCell = Backgrid.resolveNameToClass(this.get("headerCell"), "HeaderCell");

    var cell = Backgrid.resolveNameToClass(this.get("cell"), "Cell");

    var sortValue = this.get("sortValue");
    if (sortValue == null) sortValue = function (model, colName) {
      return model.get(colName);
    };
    else if (_.isString(sortValue)) sortValue = this[sortValue];

    var sortable = this.get("sortable");
    if (_.isString(sortable)) sortable = this[sortable];

    var editable = this.get("editable");
    if (_.isString(editable)) editable = this[editable];

    var renderable = this.get("renderable");
    if (_.isString(renderable)) renderable = this[renderable];

    this.set({
      cell: cell,
      headerCell: headerCell,
      sortable: sortable,
      editable: editable,
      renderable: renderable,
      sortValue: sortValue
    }, { silent: true });
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
