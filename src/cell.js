/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/**
   Generic cell editor base class. Only defines an initializer for a number of
   required parameters.

   @abstract
   @class Backgrid.CellEditor
   @extends Backbone.View
*/
var CellEditor = Backgrid.CellEditor = Backbone.View.extend({

  /**
     Initializer.

     @param {Object} options
     @param {*} options.parent
     @param {Backgrid.Formatter} options.formatter
     @param {Backgrid.Column} options.column
     @param {Backbone.Model} options.model
  */
  initialize: function (options) {
    Backbone.View.prototype.initialize.apply(this, arguments);
    this.parent = options.parent;
    this.formatter = options.formatter;
    this.column = options.column;

    if (!this.formatter) throw new Error("formatter is required");
    if (!this.column) throw new Error("column is required");

    if (this.parent && this.parent.on) this.parent.on("editing", this.postRender, this);
  },

  dispose: function () {
    this.column.off(null, null, this);
    if (this.parent && this.parent.off) this.parent.off(null, null, this);
    return Backbone.View.prototype.dispose.apply(this, arguments);
  },

  /**
     Post-rendering setup and initialization. Focuses the cell editor's `el` in
     this default implementation. **Should** be called by Cell classes after
     calling Backgrid.CellEditor#render.
  */
  postRender: function () {
    this.$el.focus();
    return this;
  }

});

/**
   A CellEditor subclass that uses a contenteditable `div` tag as the editing
   area. Used by most built-in cell types.

   @class Backgrid.DivCellEditor
   @extends Backgrid.CellEditor
*/
var DivCellEditor = Backgrid.DivCellEditor = CellEditor.extend({

  /** @property */
  tagName: "div",

  /** @property */
  attributes: {
    contenteditable: "true"
  },

  /** @property */
  events: {
    "blur": "saveOrCancel",
    "keydown": "saveOrCancel"
  },

  /**
     Initializer. Removes this `el` from the DOM when a `done` event is
     triggered.

     @param {Object} options
     @param {Backgrid.Formatter} options.formatter
     @param {Backgrid.Column} options.column
     @param {Backbone.Model} options.model
  */
  initialize: function (options) {
    CellEditor.prototype.initialize.apply(this, arguments);
    this.on("done", this.remove, this);
  },

  /**
     Renders this editor.
  */
  render: function () {
    this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  },

  /**
     Focuses the editor and moves the caret inside and to the end of the text.
     See Backgrid.CellEditor#postRender.
  */
  postRender: function () {
    this.$el.focus();

    if (!_.isUndefined(window.getSelection) && !_.isUndefined(document.createRange)) {
      var rng = document.createRange();
      rng.selectNodeContents(this.el);
      rng.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(rng);
    }
    if (!_.isUndefined(document.body.createTextRange)) {
      var txtRng = document.body.createTextRange();
      txtRng.moveToElementText(this.el);
      txtRng.collapse(false);
      txtRng.select();
    }

    return this;
  },

  /**
     If the key pressed is `enter` or `tab`, converts the value in the editor to
     a raw value for the model using the formatter.

     If the key pressed is `esc` or the event type is `blur`, undo the changes.

     Triggers a Backbone `done` event when successful. `error` if the value
     cannot be converted. Classes listening to the `error` event, usually the
     Cell classes, should respond appropriately, usually by rendering some kind
     of error feedback.

     @param {Event} e
  */
  saveOrCancel: function (e) {

    if (e.type === "keydown") {
      // enter or tab
      if (e.keyCode === 13 || e.keyCode === 9) {
        e.preventDefault();
        var valueToSet = this.formatter.toRaw(this.$el.text());

        if (_.isUndefined(valueToSet) || this.model.set(this.column.get("name"), valueToSet)) {
          this.trigger("error");
        }
        else {
          this.trigger("done");
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
    if (!_.isUndefined(window.getSelection)) {
      var sel = window.getSelection();
      sel.removeAllRanges();
    }
    return this;
  }

});

/**
   The super-class for all Cell types. By default, this class renders a plain
   table cell with the model value converted to a string using the
   formatter. The table cell is clickable, upon which the cell will go into
   editor mode, which is rendered by a Backgrid.DivCellEditor instance by
   default. Upon any formatting errors, this class will add a `error` CSS class
   to the table cell.

   @abstract
   @class Backgrid.Cell
   @extends Backbone.View
*/
var Cell = Backgrid.Cell = Backbone.View.extend({

  /** @property */
  tagName: "td",

  /**
     @property {Backgrid.Formatter|Object|string} [formatter=new Formatter()]
  */
  formatter: new Formatter(),

  /**
     @property {Backgrid.CellEditor} [editor=DivCellEditor] The default editor for all cell
     instances of this class. This value must be a class, it will be
     automatically instantiated upon entering edit mode.

     See Backgrid.CellEditor.
  */
  editor: DivCellEditor,

  /** @property */
  events: {
    "click": "enterEditMode"
  },

  /**
     Initializer.

     @param {Object} options
     @param {Backbone.Model} options.model
     @param {Backgrid.Column} options.column
     @param {Backgrid.CellEditor} [options.editor]
     @param {Backgrid.Formatter} [options.formatter]

     @throws {ReferenceError} If formatter is a string but a formatter class of
     said name cannot be found in the Backgrid module.
  */
  initialize: function (options) {
    Backbone.View.prototype.initialize.apply(this, arguments);

    this.column = options.column;
    if (!this.column instanceof Column) {
      this.column = new Column(this.column);
    }

    this.editor = options.editor || this.editor;
    this.formatter = options.formatter || this.column.get("formatter") || this.formatter;
    if (_.isString(this.formatter)) {
      var formatter = Backgrid[capitalize(this.formatter) + "Formatter"];
      if (_.isUndefined(formatter)) {
        throw new ReferenceError("Formatter type '" + this.formatter  + "' not found");
      }
      else {
        this.formatter = new formatter;
      }
    }
  },

  dispose: function () {
    if (this.currentEditor) this.exitEditMode();
    this.column.off(null, null, this);
    if (this.parent && this.parent.off) this.parent.off(null, null, this);
    return Backbone.View.prototype.dispose.apply(this, arguments);
  },

  /**
     Render a text string in a table cell. The text is converted from the
     model's raw value for this cell's column.
  */
  render: function () {
    this.$el.empty().text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  },

  /**
     If this column is editable, a new CellEditor instance is instantiated with
     its required parameters and listens on the editor's `done` and `error`
     events. When the editor is `done`, edit mode is exited. When the editor
     triggers an `error` event, it means the editor is unable to convert the
     current user input to an apprpriate value for the model's column. An
     `editor` CSS class is added to the cell upon entering edit mode.
  */
  enterEditMode: function (e) {
    if (this.column.get("editable")) {

      this.currentEditor = new this.editor({
        parent: this,
        column: this.column,
        model: this.model,
        formatter: this.formatter
      });

      /**
         Backbone Event. Fired when a cell is entering edit mode and an editor
         instance has been constructed, but before it is rendered and inserted
         into the DOM.

         @event edit
         @param {Backgrid.Cell} cell This cell instance.
         @param {Backgrid.CellEditor} editor The cell editor constructed.
      */
      this.trigger("edit", this, this.currentEditor);

      this.currentEditor.on("done", this.exitEditMode, this);
      this.currentEditor.on("error", this.renderError, this);

      this.$el.empty();
      this.undelegateEvents();
      this.$el.append(this.currentEditor.render().$el);
      this.$el.addClass("editor");

      /**
         Backbone Event. Fired when a cell has finished switching to edit mode.

         @event editing
         @param {Backgrid.Cell} cell This cell instance.
         @param {Backgrid.CellEditor} editor The cell editor constructed.
      */
      this.trigger("editing", this, this.currentEditor);
    }
  },

  /**
     Put an `error` CSS class on the table cell.
  */
  renderError: function () {
    this.$el.addClass("error");
  },

  /**
     Removes the editor and re-render in display mode.
  */
  exitEditMode: function () {
    this.$el.removeClass("error");
    this.currentEditor.off(null, null, this);
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

/**
   StringCell displays HTML escaped strings and accepts anything typed in.

   @class Backgrid.StringCell
   @extends Backgrid.Cell
*/
var StringCell = Backgrid.StringCell = Cell.extend({

  /** @property */
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

/**
   UriCell renders an HTML <a> anchor for the value and accepts URIs as user
   input values. A URI input is URI encoded using `encodeURI()` before writing
   to the underlying model.

   @class Backgrid.UriCell
   @extends Backgrid.Cell
*/
var UriCell = Backgrid.UriCell = Cell.extend({

  /** @property */
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

/**
   Like Backgrid.UriCell, EmailCell renders an HTML <a> anchor for the
   value. The `href` in the anchor is prefixed with `mailto:`. EmailCell will
   complain if the user enters a string that doesn't contain the `@` sign.

   @class Backgrid.EmailCell
   @extends Backgrid.Cell
*/
var EmailCell = Backgrid.EmailCell = Cell.extend({

  /** @property */
  className: "email-cell",

  formatter: {
    fromRaw: function (rawData) {
      return rawData;
    },
    toRaw: function (formattedData) {
      return formattedData.indexOf('@') === -1 ? undefined : formattedData;
    }
  },

  render: function () {
    this.$el.empty();
    var formattedValue = this.formatter.fromRaw(this.model.get(this.column.get("name")));
    this.$el.append($("<a>", {
      href: "mailto:" + formattedValue,
      title: formattedValue,
      target: "_blank"
    }).text(formattedValue));
    return this;
  }

});

/**
   NumberCell is a generic cell that renders all numbers. Numbers are formatted
   using Backgrid.NumberFormatter.

   @class Backgrid.NumberCell
   @extends Backgrid.Cell

   See:

   - Backgrid.NumberFormatter
*/
var NumberCell = Backgrid.NumberCell = Cell.extend({

  /** @property */
  className: "number-cell",

  /**
     @property {number} [decimals=2] Must be an integer.
  */
  decimals: NumberFormatter.prototype.defaults.decimals,

  /** @property {string} [decimalSeparator='.'] */
  decimalSeparator: NumberFormatter.prototype.defaults.decimalSeparator,

  /** @property {string} [orderSeparator=','] */
  orderSeparator: NumberFormatter.prototype.defaults.orderSeparator,

  /**
     Initializer.

     @param {Object} options
     @param {Backbone.Model} options.model
     @param {Backgrid.Column} options.column
     @param {Backgrid.CellEditor} [options.editor]
     @param {Backgrid.Formatter} [options.formatter]
     @param {number} [options.decimals] Must be an integer.
     @param {string} [options.decimalSeparator]
     @param {string} [options.orderSeparator]
  */
  initialize: function (options) {
    Cell.prototype.initialize.apply(this, arguments);

    if (options) {
      this.decimals = _.isUndefined(options.decimals) ? this.decimals : options.decimals;
      this.decimalSeparator = _.isUndefined(options.decimalSeparator) ? this.decimalSeparator : options.decimalSeparator;
      this.orderSeparator = _.isUndefined(options.orderSeparator) ? this.orderSeparator : options.orderSeparator;
    }

    this.formatter = options.formatter || this.column.get("formatter") || new NumberFormatter({
      decimals: this.decimals,
      decimalSeparator: this.decimalSeparator,
      orderSeparator: this.orderSeparator
    });
  }

});

/**
   An IntegerCell is just a Backgrid.NumberCell with 0 decimals. If a floating point
   number is supplied, the number is simply rounded the usual way when
   displayed.

   @class Backgrid.IntegerCell
   @extends Backgrid.Cell
*/
var IntegerCell = Backgrid.IntegerCell = NumberCell.extend({

  /** @property */
  className: "integer-cell",

  /**
     @property {number} decimals Must be an integer.
  */
  decimals: 0
});

/**
   DatetimeCell is a basic cell that accepts datetime string values in RFC-2822
   or W3C's subset of ISO-8601 and displays them in ISO-8601 format. For a much
   more sophisticated date time cell with better datetime formatted and a
   datepicker for an editor, take a look at the KalendaeCell extension.

   @class Backgrid.DatetimeCell
   @extends Backgrid.Cell

   See:

   - Backgrid.KalendaeCell
   - Backgrid.DatetimeFormatter
*/
var DatetimeCell = Backgrid.DatetimeCell = Cell.extend({

  /** @property */
  className: "datetime-cell",

  /**
     @property {boolean} [includeDate=true]
  */
  includeDate: DatetimeFormatter.prototype.defaults.includeDate,

  /**
     @property {boolean} [includeTime=true]
  */
  includeTime: DatetimeFormatter.prototype.defaults.includeTime,

  /**
     @property {boolean} [includeMilli=false]
  */
  includeMilli: DatetimeFormatter.prototype.defaults.includeMilli,

  /**
     Initializer.

     @param {Object} options
     @param {Backbone.Model} options.model
     @param {Backgrid.Column} options.column
     @param {Backgrid.CellEditor} [options.editor]
     @param {Backgrid.Formatter} [options.formatter]
     @param {boolean} [options.includeDate]
     @param {boolean} [options.includeTime]
     @param {boolean} [options.includeMilli]
  */
  initialize: function (options) {
    Cell.prototype.initialize.apply(this, arguments);
    if (options) {
      this.includeDate = _.isUndefined(options.includeDate) ? this.includeDate : options.includeDate;
      this.includeTime = _.isUndefined(options.includeTime) ? this.includeTime : options.includeTime;
      this.includeMilli = _.isUndefined(options.includeMilli) ? this.includeMilli : options.includeMilli;
    }

    this.formatter = options.formatter || this.column.get("formatter") ||  new DatetimeFormatter({
      includeDate: this.includeDate,
      includeTime: this.includeTime,
      includeMilli: this.includeMilli
    });
  }

});

/**
   DateCell is a Backgrid.DatetimeCell without the time part.

   @class Backgrid.DateCell
   @extends Backgrid.DatetimeCell
*/
var DateCell = Backgrid.DateCell = DatetimeCell.extend({

  /** @property */
  className: "date-cell",

  /** @property */
  includeTime: false

});

/**
   TimeCell is a Backgrid.DatetimeCell without the date part.

   @class Backgrid.TimeCell
   @extends Backgrid.DatetimeCell
*/
var TimeCell = Backgrid.TimeCell = DatetimeCell.extend({

  /** @property */
  className: "time-cell",

  /** @property */
  includeDate: false

});

/**
   BooleanCell is a different kind of cell in that there's no difference between
   display mode and edit mode and this cell type always renders a checkbox for
   selection.

   @class Backgrid.BooleanCell
   @extends Backgrid.Cell
*/
var BooleanCell = Backgrid.BooleanCell = Cell.extend({

  /** @property */
  className: "boolean-cell",

  /**
     BooleanCell simple uses a default HTML checkbox template instead of a
     CellEditor instance.

     @property {function(Object): string} editor The Underscore.js template to
     render the editor.
  */
  editor: _.template("<input type='checkbox'<%= checked ? checked='checked' : '' %> />'"),

  /**
     Since the editor is not an instance of a CellEditor subclass, more things
     need to be done in BooleanCell class to listen to editor mode events.
  */
  events: {
    "click": "enterEditMode",
    "blur input[type=checkbox]": "exitEditMode",
    "change input[type=checkbox]": "save"
  },

  /**
     Renders a checkbox and check it if the model value of this column is true,
     uncheck otherwise.
  */
  render: function () {
    this.currentEditor = $(this.editor({
      checked: this.formatter.fromRaw(this.model.get(this.column.get("name")))
    }));
    this.$el.append(this.currentEditor);
    return this;
  },

  /**
     Simple focuses the checkbox and add an `editor` CSS class to the cell.
  */
  enterEditMode: function (e) {
    this.$el.addClass("editor");
    this.currentEditor.focus();
  },

  /**
     Removed the `editor` CSS class from the cell.
  */
  exitEditMode: function (e) {
    this.$el.removeClass("editor");
  },

  /**
     Set true to the model attribute if the checkbox is checked, false
     otherwise.
  */
  save: function (e) {
    var val = this.formatter.toRaw(this.currentEditor.prop("checked"));
    this.model.set(this.column.get("name"), val);
  }

});

/**
   SelectCellEditor renders an HTML <select> fragment as the editor.

   @class Backgrid.SelectCellEditor
   @extends Backgrid.CellEditor
*/
var SelectCellEditor = Backgrid.SelectCellEditor = CellEditor.extend({

  /** @property */
  tagName: "select",

  /** @property */
  events: {
    "change": "save",
    "blur": "save"
  },

  template: _.template('<option value="<%= value %>" <%= selected ? \'selected="selected"\' : "" %>><%= text %></option>'),

  setOptionValues: function (optionValues) {
    this.optionValues = optionValues;
  },

  _renderOptions: function (nvps, currentValue) {
    var options = '';
    for (var i = 0; i < nvps.length; i++) {
      options = options + this.template({
        text: nvps[i][0],
        value: nvps[i][1],
        selected: currentValue === nvps[i][1]
      });
    }
    return options;
  },

  /**
     Renders the options if `optionValues` is a list of name-value pairs. The
     options are contained inside option groups if `optionValues` is a list of
     object hashes. The name is rendered at the option text and the value is the
     option value. If `optionValues` is a function, it is called without a
     parameter.
  */
  render: function () {
    var optionValues = _.result(this, "optionValues");
    var currentValue = this.model.get(this.column.get("name"));

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

        this.$el.append(this.template({
          text: optionText,
          value: optionValue,
          selected: optionValue === currentValue
        }));
      }
      else if (_.isObject(optionValue)) {
        optgroupName = optionValue.name;
        optgroup = $("<optgroup></optgroup>", { label: optgroupName });
        optgroup.append(this._renderOptions(optionValue.value, currentValue));
        this.$el.append(optgroup);
      }
      else {
        throw TypeError("optionValues elements must be a name-value pair or an object hash of { name: 'optgroup label', value: [option name-value pairs] }");
      }
    }

    return this;
  },

  /**
     Saves the value of the selected option to the model attribute. Triggers
     `done` event.
  */
  save: function (e) {
    this.model.set(this.column.get("name"), this.$el.val());
    this.trigger("done");
  }

});

/**
   SelectCell is also a different kind of cell in that upon going into edit mode
   the cell renders a list of options for to pick from, as opposed to
   a contenteditable div.

   @class Backgrid.SelectCell
   @extends Backgrid.Cell
*/
var SelectCell = Backgrid.SelectCell = Cell.extend({

  /** @property */
  className: "select-cell",

  /** @property */
  editor: SelectCellEditor,

  /**
     Besides the usual Cell constructor parameter, SelectCell also requires an
     optionValues parameter which can either be a list of name-value pairs, to
     be rendered as options, or a list of object hashes which consist of a key
     *name* which is the option group name, and a key *value* which is a list of
     name-value pairs to be rendered as options under that option group.

     In addition, optionValues can also be a parameter-less function that
     returns one of the above. If the options are static, it is recommended the
     returned values to be memoized. _.memoize() is a good function to help with
     that.

     @param {Object} options
     @param {Array.<Array>|Array.<Object>} options.optionValues
     @param {Backbone.Model} options.model
     @param {Backgrid.Column} options.column
     @throws {Error} If options.optionValues is missing.
  */
  initialize: function (options) {
    Cell.prototype.initialize.apply(this, arguments);
    this.optionValues = options.optionValues || this.optionValues;
    if (!this.optionValues) throw new Error("optionValues is required");
    this.on("edit", this.setOptionValues, this);
  },

  setOptionValues: function (cell, editor) {
    editor.setOptionValues(this.optionValues);
  },

  /**
     Renders the label using the raw value as key to look up from `optionValues`.

     @throws {TypeError} If `optionValues` is not a right data structure.
  */
  render: function () {
    var optionValues = _.result(this, "optionValues");
    var rawData = this.model.get(this.column.get("name"));

    for (var i = 0; i < optionValues.length; i++) {
      var optionValue = optionValues[i];

      if (_.isArray(optionValue)) {
        var optionText  = optionValue[0];
        var optionValue = optionValue[1];

        if (optionValue === rawData) {
          this.$el.append(optionText);
        }
      }
      else if (_.isObject(optionValue)) {
        var optionGroupValues = optionValue.value;
        for (var j = 0; j < optionGroupValues; j++) {
          var optionGroupValue = optionGroupValues[j];
          if (optionGroupValue[1] === rawData) {
            this.$el.append(optionGroupValue[0]);
          }
        }
      }
      else {
        throw TypeError("optionValues elements must be a list if name-value pairs or a list of object literals of { name: 'optgroup label', value: [option name-value pairs] }");
      }
    }

    return this;
  }

});
