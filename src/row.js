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
  },

  render: function () {
    var self = this;
    self.$el.empty();
    self.columns.each(function (column) {
      if (column.get("renderable")) {
        var cell = column.get("cell");
        cell = new cell({
          column: column,
          model: self.model
        });
        self.$el.append(cell.render(self.model).$el);
      }
    });
    return self;
  }
});
