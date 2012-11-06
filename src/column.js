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
      this.set({
        cell: new Backgrid[_.str.capitalize(this.get("cell")) + "Cell"]
      }, { silent: true });
    }
    else if (typeof attrs.cell === "function") {
      this.set({
        cell: new attrs.cell
      }, { silent: true });
    }
  }

});

var Columns = Backgrid.Columns = Backbone.Collection.extend({
  model: Column
});
