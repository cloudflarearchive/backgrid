'use strict';

var Row = Backgrid.Row = Backbone.View.extend({

  tagName: 'tr',

  initialize: function (options) {
    var self = this;

    self._byColumnName = {};
    self.parent = options.parent;
    self.columns = options.columns;
    if (!(self.columns instanceof Backbone.Collection)) {
      self.columns = new Columns(self.columns);
    }

    self.cells = self.columns.map(function (column) {

      var cellClass = column.get('cell');

      var cell = null;

      var cellParams = {
        parent: self,
        column: column,
        model: self.model
      };

      if (!cellClass) {
        if (typeof self.model.get(column.get('name')) === 'number') {
          cell = new FloatCell(cellParams);
        }
        else {
          cell = new StringCell(cellParams);
        }
      }
      else {
        cell = new cellClass(cellParams);
      }

      self._byColumnName[column.get('name')] = cell;

      return cell;
    });

    self.model.on('error', self.dispatchErrorToCell, self);
  },

  dispatchErrorToCell: function (model, error) {
    var self = this;
    _.each(_.pairs(error), function (pair) {
      var attr = pair[0];
      var message = pair[1];
      self._byColumnName[attr].renderError(message);
    });
  },

  render: function () {
    var self = this;

    self.$el.empty();

    _.each(self.cells, function (cell) {
      if (cell.column.get('renderable')) {
        self.$el.append(cell.render().$el);
      }
    });

    return self;
  }
});
