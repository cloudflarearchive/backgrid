'use strict';

var Cell = Backgrid.Cell = Backbone.View.extend({

  tagName: 'td',

  errorClassName: 'backgrid-error',

  initialize: function (options) {
    this.parent = options.parent;
    this.column = options.column;
    if (this.column && !(this.column instanceof Column)) {
      this.column = new Column(this.column);
    }

    var formatter = this.column.get('formatter');
    if (formatter) {
      this.formatter = this.colume.get('formatter');
    }

    this.model.on('change:' + this.column.get('name'), this.render, this);
  },

  formatter: new Formatter(),

  render: function () {
    this.$el.empty();
    this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get('name'))));
    return this;
  },

  // By default this method only applies a .error class to the cell,
  // subclasses are encouraged to override this method when neccessary.
  renderError: function (message) {
    this.$el.addClass(this.errorClassName);
  },

  clearError: function () {
    this.$el.removeClass(this.errorClassName);
  }

});

var StringCell = Backgrid.StringCell = Cell.extend({

  className: 'backgrid-string-cell',

  formatter: {

    fromRaw: function (rawData) {
      return _.escape(rawData);
    },

    toRaw: function (formattedData) {
      return formattedData;
    }
  }

});

var RegexCell = Backgrid.RegexCell = StringCell.extend({

});

var EmailCell = Backgrid.EmailCell = RegexCell.extend({

});

var URICell = Backgrid.URICell = RegexCell.extend({

});

var NumberCell = Backgrid.NumberCell = Cell.extend({

  className: 'backgrid-number-cell',

});

var IntegerCell = Backgrid.IntegerCell = NumberCell.extend({

});

var FloatCell = Backgrid.FloatCell = NumberCell.extend({

});

var CurrencyCell = Backgrid.CurrencyCell = NumberCell.extend({

});

var DateTimeCell = Backgrid.DateTimeCell = Cell.extend({

  className: 'backgrid-datetime-cell',

});

var TextCell = Backgrid.TextCell = StringCell.extend({

  className: 'backgrid-text-cell',

});
