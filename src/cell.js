/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/*global Backbone:false, Backgrid:false, Column:false, Formatter:false */

var CellEditor = Backgrid.CellEditor = Backbone.View.extend({

  initialize: function (options) {
    Backbone.View.prototype.initialize.apply(this, arguments);
    this.formatter = options.formatter;
    this.column = options.column;

    if (!this.formatter) throw new Error("formatter is required");
    if (!this.column) throw new Error("column is required");
  },

  postRender: function () {
    this.$el.focus();
    return this;
  }

});

var DivCellEditor = Backgrid.DivCellEditor = CellEditor.extend({

  tagName: "div",

  attributes: {
    contenteditable: "true"
  },

  events: {
    "blur": "saveOrCancel",
    "keydown": "saveOrCancel"
  },

  initialize: function (options) {
    CellEditor.prototype.initialize.apply(this, arguments);
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

    return this;
  },

  saveOrCancel: function (e) {

    if (e.type === "keydown") {
      // enter or tab
      if (e.keyCode === 13 || e.keyCode === 9) {
        e.preventDefault();
        var valueToSet = this.formatter.toRaw(this.$el.text());

        if (typeof valueToSet === "undefined") {
          this.trigger("error");
          return;
        }

        if (this.model.set(this.column.get("name"), valueToSet)) {
          this.trigger("done");
        }
        else {
          this.trigger("error");
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
    return this;
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
  // value from the model keyed by the column name.
  render: function () {
    this.$el.empty().text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  },

  enterEditMode: function (e) {
    if (this.column.get("editable")) {

      this.currentEditor = new this.editor({
        column: this.column,
        model: this.model,
        formatter: this.formatter
      });

      this.currentEditor.on("done", this.exitEditMode, this);
      this.currentEditor.on("error", this.renderError, this);

      this.$el.empty();
      this.undelegateEvents();
      this.$el.append(this.currentEditor.render().$el);
      this.currentEditor.postRender();
      this.$el.addClass("editor");
    }
  },

  renderError: function () {
    this.$el.addClass("error");
  },

  exitEditMode: function () {
    this.$el.removeClass("error");
    this.currentEditor.remove();
    delete this.currentEditor;
    this.$el.removeClass("editor");
    this.render();
    this.delegateEvents();
  },

  remove: function () {
    Backbone.View.prototype.remove.apply(this, arguments);
    if (this.currentEditor) {
      this.currentEditor.remove();
      delete this.currentEditor;
    }
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
      title: formattedValue,
      target: "_blank"
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
// or W3C's subset of ISO-8601 and displays them in ISO-8601 format. For a much
// more sophisticated date time cell with better datetime formatted and a
// datepicker for an editor, take a look at the kalendae-cell.js extension.
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
  className: "time-cell",
  includeDate: false
});

// BooleanCell is a different kind of cell in that there's no difference between
// display mode and edit mode and this cell type always renders a checkbox for
// selection.
var BooleanCell = Backgrid.BooleanCell = Cell.extend({

  className: "boolean-cell",

  editor: _.template("<input type='checkbox value='<%= checked %>' />'"),

  events: {
    "click": "enterEditMode",
    "blur input[type=checkbox]": "exitEditMode",
    "change input[type=checkbox]": "save"
  },

  render: function () {
    this.currentEditor = $(this.editor({
      checked: this.formatter.fromRaw(this.model.get(this.column.get("name")))
    }));
    this.$el.append(this.currentEditor);
    return this;
  },

  enterEditMode: function (e) {
    this.$el.addClass("editor");
    this.currentEditor.focus();
  },

  exitEditMode: function (e) {
    this.$el.removeClass("editor");
  },

  save: function (e) {
    var val = this.formatter.toRaw(this.curentEditor.val());
    this.model.set(this.column.get("name"), val);
  }

});

var SelectCellEditor = Backgrid.SelectCellEditor = CellEditor.extend({

  tagName: "select",

  events: {
    "change": "save",
    "blur": "save"
  },

  initialize: function (options) {
    CellEditor.prototype.initialize.apply(this, arguments);
    this.optionValues = options.optionValues;
  },

  _renderOptions: function (nvps) {
    var options = '';
    for (var i = 0; i < nvps.length; i++) {
      options = options + "<option value='" + nvps[i][0]  + "'>" + nvps[i][1]  + "</option>";
    }
    return options;
  },

  render: function () {
    var optionValues = _.result(this, "optionValues");

    if (!_.isArray(optionValues)) throw TypeError("optionValues must be an array");

    var optionValue = null;
    var optionText = null;
    var optionValue = null;
    var optgroupName = null;
    for (var i = 0; i < optionValues.length; i++) {
      var optionValue = optionValues[i];

      if (_.isArray(optionValue)) {
        optionText  = optionValue[0];
        optionValue = optionValue[1];
        this.$el.append($("<option value='" + optionValue  + "'>" + optionText + "</option>"));
      }
      else if (_.isObject(optionValue)) {
        optgroupName = optionValue.name;
        optgroup = $("<optgroup></optgroup>", { label: optgroupName });
        optgroup.append(this._renderOptions(optionValue.value));
        this.$el.append(optgroup);
      }
      else {
        throw TypeError("optionValues elements must be a name-value pair or an object hash of { name: 'optgroup label', value: [option name-value pairs] }");
      }
    }

    return this;
  },

  save: function (e) {
    this.model.set(this.colume.get("name"), this.$el.val());
    this.trigger("done");
  }

});

// SelectCell is also a different kind of cell in that upon going into edit mode
// the cell renders a list of options for to pick from, as opposed to
// a contenteditable div.
var SelectCell = Backgrid.SelectCell = Cell.extend({

  className: "select-cell",

  editor: SelectCellEditor,

  // Besides the usual Cell constructor parameter, SelectCell also requires an
  // optionValues parameter which can either be a list of name-value pairs, to
  // be rendered as options, or a list of objects hashes which consist of a key
  // *name* which is the option group name, and a key *value* which is a list of
  // name-value pairs to be rendered as options under that option group.
  //
  // In addition, optionValues can also be a parameter-less function that
  // returns one of the above. If the options are static, it is recommended the
  // returned values to be memoized. _.memoize() is a good function to help with
  // that.
  initialize: function (options) {
    Cell.prototype.initialize.apply(this, arguments);
    this.optionValues = options.optionValues;
    if (!optionValues) throw new Error("optionValues is required");
  },

  enterEditMode: function (e) {
    Cell.prototype.enterEditMode.apply(this, arguments);
    this.currentEditor.initialize({
      formatter: this.formatter,
      column: this.column,
      model: this.model,
      optionValues: this.optionValues
    });
  }

});
