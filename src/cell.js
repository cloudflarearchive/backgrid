/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/*global Backbone:false, Backgrid:false, Column:false, Formatter:false */

var DivCellEditor = Backgrid.CellEditor = Backbone.View.extend({

  tagName: "div",

  attributes: {
    contenteditable: "true"
  },

  events: {
    "blur": "saveOrCancel",
    "keydown": "saveOrCancel"
  },

  initialize: function (options) {
    Backbone.View.prototype.initialize.apply(this, arguments);
    this.formatter = options && options.formatter || this.formatter;
    this.column = options && options.column;

    this.on("done", this.remove, this);
  },

  render: function () {
    this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  },

  // MUST be called after the rendered *el* has been inserted into the DOM for
  // things such as focusing and selecting the content of the editor
  postRender: function () {
    this.$el.focus();

    if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
      var rng = document.createRange();
      rng.selectNodeContents(this.el);
      rng.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(rng);
    }
    if (typeof document.body.createTextRange !== "undefined") {
      var txtRng = document.body.createTextRange();
      txtRng.moveToElementText(this.el);
      txtRng.collapse(false);
      txtRng.select();
    }
  },

  saveOrCancel: function (e) {
    if (e.type === "keydown") {
      // enter or tab
      if (e.keyCode === 13 || e.keyCode === 9) {
        e.preventDefault();
        var valueToSet = this.formatter.toRaw(this.$el.text());
        if (this.model.set(this.column.get("name"), valueToSet)) {
          this.trigger("done");
        }
        else {
          // TODO: handle error
        }
      }
      // esc
      else if (e.keyCode === 27) {
        // undo
        e.stopPropagation();
        this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
        this.trigger("done");
      }
    }
    else if (e.type === "blur") {
      this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
      this.trigger("done");
    }
  },

  remove: function () {
    Backbone.View.prototype.remove.apply(this, arguments);
    // FF inexplicably still place a blanking caret at the beginning of the
    // parent's text after this editor element has been removed from the DOM
    if (typeof window.getSelection !== "undefined") {
      var sel = window.getSelection();
      sel.removeAllRanges();
    }
  }
  
});

var Cell = Backgrid.Cell = Backbone.View.extend({

  tagName: "td",

  formatter: new Formatter,

  editor: DivCellEditor,

  events: {
    "click": "enterEditMode"
  },

  initialize: function (options) {
    Backbone.View.prototype.initialize.apply(this, arguments);
    this.formatter = options && options.formatter || this.formatter;
    this.editor = options && options.editor || this.editor;
    this.column = options && options.column;
  },

  // Given a column and a model instance, render() will output the formatted
  // value from the model keyed with the column name.
  render: function () {
    this.$el.empty()
      .text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  },

  enterEditMode: function (e) {
    if (this.column.get("editable")) {

      var editor = new this.editor({
        column: this.column,
        model: this.model,
        formatter: this.formatter
      });

      editor.on("done", this.exitEditMode, this);

      this.$el.empty();
      this.undelegateEvents();
      this.$el.append(editor.render().$el);
      editor.postRender();
      this.$el.addClass("editor");
    }
  },

  exitEditMode: function () {
    this.$el.removeClass("editor");
    this.render();
    this.delegateEvents();
  }

});

// StringCell displays HTML escaped data and accepts anything typed in.
var StringCell = Backgrid.StringCell = Cell.extend({

  className: "string-cell",

  formatter: {
    fromRaw: function (rawData) {
      return _.escape(rawData);
    },
    toRaw: function (formattedData) {
      return formattedData;
    }
  }

});

var UriCell = Backgrid.UriCell = StringCell.extend({

  className: "uri-cell",

  formatter: {
    fromRaw: function (rawData) {
      return rawData;
    },
    toRaw: function (formattedData) {
      return encodeURI(formattedData);
    }
  },
  
  render: function () {
    this.$el.empty();
    var formattedValue = this.formatter.fromRaw(this.model.get(this.column.get("name")));
    this.$el.append($("<a>", {
      href: formattedValue,
      title: formattedValue
    }).text(formattedValue));
    return this;
  }

});

var NumberCell = Backgrid.NumberCell = Cell.extend({

  className: "number-cell",

  decimals: NumberFormatter.prototype.defaults.decimals,
  decimalSeparator: NumberFormatter.prototype.defaults.decimalSeparator,
  orderSeparator: NumberFormatter.prototype.defaults.orderSeparator,
  
  initialize: function (options) {
    Cell.prototype.initialize.apply(this, arguments);

    if (options) {
      this.decimals = typeof options.decimals !== "undefined" ? options.decimals : this.decimals;
      this.decimalSeparator = typeof options.decimalSeparator !== "undefined" ? options.decimalSeparator : this.decimalSeparator;
      this.orderSeparator = typeof options.orderSeparator !== "undefined" ? options.orderSeparator : this.orderSeparator;
    }

    this.formatter = options && options.formatter || new NumberFormatter({
      decimals: this.decimals,
      decimalSeparator: this.decimalSeparator,
      orderSeparator: this.orderSeparator
    });
  }

});

// An IntegerCell is just a NumberCell with 0 decimals. If a floating point
// number is supplied, the number is simply rounded the usual way when
// displayed.
var IntegerCell = Backgrid.IntegerCell = NumberCell.extend({
  className: "integer-cell",
  decimals: 0
});

// DatetimeCell is a basic cell that accepts datetime string values in RFC-2822
// or W3C's subset of ISO-8601 and displays them in ISO-8601 format. Only works
// with browsers that have a Ecmascript 5 compliant Date class at the
// moment. For a much more sophisticated date time cell, take a look at the
// kalendae-cell.js extension.
var DatetimeCell = Backgrid.DatetimeCell = Cell.extend({

  className: "datetime-cell",

  includeDate: DatetimeFormatter.prototype.defaults.includeDate,
  includeTime: DatetimeFormatter.prototype.defaults.includeTime,

  initialize: function (options) {
    Cell.prototype.initialize.apply(this, arguments);
    if (options) {
      this.includeDate = typeof options.includeDate !== "undefined" ? options.includeDate : this.includeDate;
      this.includeTime = typeof options.includeTime !== "undefined" ? options.includeTime : this.includeTime;
    }

    this.formatter = options && options.formatter || new DatetimeFormatter({
      includeDate: this.includeDate,
      includeTime: this.includeTime
    });
  }

});

var DateCell = Backgrid.DateCell = DatetimeCell.extend({
  className: "date-cell",
  includeTime: false
});

var TimeCell = Backgrid.TimeCell = DatetimeCell.extend({
  className: "date-cell",
  includeDate: false
});
