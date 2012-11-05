'use strict';

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

    if (!this.has('label')) {
      this.set({
        label: this.get('name')
      }, {
        silent: true
      });
    }

    if (!attrs.cell) { throw new Error('Column.cell is required'); }
    if (!attrs.name) { throw new Error('Column.name is required'); }
  }

});

var Columns = Backgrid.Columns = Backbone.Collection.extend({
  model: Column
});
