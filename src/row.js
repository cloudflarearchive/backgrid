/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

var Row = Backgrid.Row = Backbone.View.extend({

  tagName: "tr",

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
    Backbone.View.prototype.dispose.apply(this, arguments);
    this.columns.off(null, null, this);
    if (this.parent && this.parent.off) this.parent.off(null, null, this);
    var cell = null;
    for (var i = 0; i < this.cells.length; i++) {
      cell = this.cells[i];
      cell.off(null, null, this);
      cell.dispose();
    }
    return this;
  },

  render: function () {
    this.$el.empty();
    for (var i = 0; i < this.cells.length; i++) {
      this.$el.append(this.cells[i].render().$el);
    }
    return this;
  }

});
