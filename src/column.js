/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

var Column = Backgrid.Column = Backbone.Model.extend({

  defaults: {
    name: null,
    label: null,
    sortable: true,
    editable: true,
    renderable: true,
    formatter: null,
    cell: null
  },

  initialize: function (attrs) {

    if (!this.has("label")) {
      this.set({ label: this.get("name") }, { silent: true });
    }

    if (!attrs.cell) { throw new Error("Column.cell is required"); }
    if (!attrs.name) { throw new Error("Column.name is required"); }

    if (typeof attrs.cell === "string") {
      var cell = Backgrid[capitalize(this.get("cell")) + "Cell"];
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

var Columns = Backgrid.Columns = Backbone.Collection.extend({
  model: Column
});
