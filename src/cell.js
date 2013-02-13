/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong
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
     @param {Backgrid.CellFormatter} options.formatter
     @param {Backgrid.Column} options.column
     @param {Backbone.Model} options.model

     @throws {TypeError} If `formatter` is not a formatter instance, or when
     `model` or `column` are undefined.
  */
  initialize: function (options) {
    requireOptions(options, ["formatter", "column", "model"]);
    this.parent = options.parent;
    this.formatter = options.formatter;
    this.column = options.column;
    if (!(this.column instanceof Column)) {
      this.column = new Column(this.column);
    }
    if (this.parent && _.isFunction(this.parent.on)) {
      this.listenTo(this.parent, "editing", this.postRender);
    }
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
   InputCellEditor the cell editor type used by most core cell types. This cell
   editor renders a text input box as its editor. The input will render a
   placeholder if the value is empty on supported browsers.

   @class Backgrid.InputCellEditor
   @extends Backgrid.CellEditor
*/
var InputCellEditor = Backgrid.InputCellEditor = CellEditor.extend({

  /** @property */
  tagName: "input",

  /** @property */
  attributes: {
    type: "text"
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
     @param {Backgrid.CellFormatter} options.formatter
     @param {Backgrid.Column} options.column
     @param {Backbone.Model} options.model
     @param {string} [options.placeholder]
  */
  initialize: function (options) {
    CellEditor.prototype.initialize.apply(this, arguments);

    if (options.placeholder) {
      this.$el.attr("placeholder", options.placeholder);
    }

    this.listenTo(this, "done", this.remove);
  },

  /**
     Renders a text input with the cell value formatted for display, if it
     exists.
  */
  render: function () {
    this.$el.val(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  },

  /**
     If the key pressed is `enter` or `tab`, converts the value in the editor to
     a raw value for the model using the formatter.

     If the key pressed is `esc` the changes are undone.

     If the editor's value was changed and goes out of focus (`blur`), the event
     is intercepted, cancelled so the cell remains in focus pending for further
     action.

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
        var valueToSet = this.formatter.toRaw(this.$el.val());

        if (_.isUndefined(valueToSet) ||
            !this.model.set(this.column.get("name"), valueToSet,
                            {validate: true})) {
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
        this.trigger("done");
      }
    }
    else if (e.type === "blur") {
      if (this.formatter.fromRaw(this.model.get(this.column.get("name"))) === this.$el.val()) {
        this.trigger("done");
      }
      else {
        var self = this;
        var timeout = window.setTimeout(function () {
          self.$el.focus();
          window.clearTimeout(timeout);
        }, 1);
      }
    }
  },

  postRender: function () {
    // move the cursor to the end on firefox if text is right aligned
    if (this.$el.css("text-align") === "right") {
      var val = this.$el.val();
      this.$el.focus().val(null).val(val);
    }
    else {
      this.$el.focus();
    }
    return this;
  }

});

/**
   The super-class for all Cell types. By default, this class renders a plain
   table cell with the model value converted to a string using the
   formatter. The table cell is clickable, upon which the cell will go into
   editor mode, which is rendered by a Backgrid.InputCellEditor instance by
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
     @property {Backgrid.CellFormatter|Object|string} [formatter=new CellFormatter()]
  */
  formatter: new CellFormatter(),

  /**
     @property {Backgrid.CellEditor} [editor=Backgrid.InputCellEditor] The
     default editor for all cell instances of this class. This value must be a
     class, it will be automatically instantiated upon entering edit mode.

     See Backgrid.CellEditor
  */
  editor: InputCellEditor,

  /** @property */
  events: {
    "click": "enterEditMode"
  },

  /**
     Initializer.

     @param {Object} options
     @param {Backbone.Model} options.model
     @param {Backgrid.Column} options.column

     @throws {ReferenceError} If formatter is a string but a formatter class of
     said name cannot be found in the Backgrid module.
  */
  initialize: function (options) {
    requireOptions(options, ["model", "column"]);
    this.column = options.column;
    if (!(this.column instanceof Column)) {
      this.column = new Column(this.column);
    }
    this.formatter = resolveNameToClass(this.formatter, "Formatter");
    this.editor = resolveNameToClass(this.editor, "CellEditor");
    this.listenTo(this.model, "change:" + this.column.get("name"), function () {
      if (!this.$el.hasClass("editor")) this.render();
    });
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

      this.listenTo(this.currentEditor, "done", this.exitEditMode);
      this.listenTo(this.currentEditor, "error", this.renderError);

      this.$el.empty();
      this.undelegateEvents();
      this.$el.append(this.currentEditor.$el);
      this.currentEditor.render();
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

  /**
     Clean up this cell.

     @chainable
   */
  remove: function () {
    if (this.currentEditor) {
      this.currentEditor.remove.apply(this, arguments);
      delete this.currentEditor;
    }
    return Backbone.View.prototype.remove.apply(this, arguments);
  }

});

/**
   StringCell displays HTML escaped strings and accepts anything typed in.

   @class Backgrid.StringCell
   @extends Backgrid.Cell
*/
var StringCell = Backgrid.StringCell = Cell.extend({

  /** @property */
  className: "string-cell"

  // No formatter needed. Strings call auto-escaped by jQuery on insertion.

});

/**
   UriCell renders an HTML `<a>` anchor for the value and accepts URIs as user
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
      var result = encodeURI(formattedData);
      return result === "undefined" ? undefined : result;
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
   Like Backgrid.UriCell, EmailCell renders an HTML `<a>` anchor for the
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
      var parts = formattedData.split("@");
      if (parts.length === 2 && _.all(parts)) {
        return formattedData;
      }
    }
  },

  render: function () {
    this.$el.empty();
    var formattedValue = this.formatter.fromRaw(this.model.get(this.column.get("name")));
    this.$el.append($("<a>", {
      href: "mailto:" + formattedValue,
      title: formattedValue
    }).text(formattedValue));
    return this;
  }

});

/**
   NumberCell is a generic cell that renders all numbers. Numbers are formatted
   using a Backgrid.NumberFormatter.

   @class Backgrid.NumberCell
   @extends Backgrid.Cell
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

  /** @property {Backgrid.CellFormatter} [formatter=Backgrid.NumberFormatter] */
  formatter: NumberFormatter,

  /**
     Initializes this cell and the number formatter.

     @param {Object} options
     @param {Backbone.Model} options.model
     @param {Backgrid.Column} options.column
  */
  initialize: function (options) {
    Cell.prototype.initialize.apply(this, arguments);
    this.formatter = new this.formatter({
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
   @extends Backgrid.NumberCell
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
   more sophisticated date time cell with better datetime formatting, take a
   look at the Backgrid.Extension.MomentCell extension.

   @class Backgrid.DatetimeCell
   @extends Backgrid.Cell

   See:

   - Backgrid.Extension.MomentCell
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

  /** @property {Backgrid.CellFormatter} [formatter=Backgrid.DatetimeFormatter] */
  formatter: DatetimeFormatter,

  /**
     Initializes this cell and the datetime formatter.

     @param {Object} options
     @param {Backbone.Model} options.model
     @param {Backgrid.Column} options.column
  */
  initialize: function (options) {
    Cell.prototype.initialize.apply(this, arguments);
    this.formatter = new this.formatter({
      includeDate: this.includeDate,
      includeTime: this.includeTime,
      includeMilli: this.includeMilli
    });

    var placeholder = this.includeDate ? "YYYY-MM-DD" : "";
    placeholder += (this.includeDate && this.includeTime) ? "T" : "";
    placeholder += this.includeTime ? "HH:mm:ss" : "";
    placeholder += (this.includeTime && this.includeMilli) ? ".SSS" : "";

    this.editor = this.editor.extend({
      attributes: _.extend({}, this.editor.prototype.attributes, this.editor.attributes, {
        placeholder: placeholder
      })
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

     @property {function(Object, ?Object=): string} editor The Underscore.js template to
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
    this.$el.empty();
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
   SelectCellEditor renders an HTML `<select>` fragment as the editor.

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

  /** @property {function(Object, ?Object=): string} template */
  template: _.template('<option value="<%- value %>" <%= selected ? \'selected="selected"\' : "" %>><%- text %></option>'),

  setOptionValues: function (optionValues) {
    this.optionValues = optionValues;
  },

  _renderOptions: function (nvps, currentValue) {
    var options = '';
    for (var i = 0; i < nvps.length; i++) {
      options = options + this.template({
        text: nvps[i][0],
        value: nvps[i][1],
        selected: currentValue == nvps[i][1]
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
    this.$el.empty();

    var optionValues = _.result(this, "optionValues");
    var currentValue = this.model.get(this.column.get("name"));

    if (!_.isArray(optionValues)) throw TypeError("optionValues must be an array");

    var optionValue = null;
    var optionText = null;
    var optionValue = null;
    var optgroupName = null;
    var optgroup = null;
    for (var i = 0; i < optionValues.length; i++) {
      var optionValue = optionValues[i];

      if (_.isArray(optionValue)) {
        optionText  = optionValue[0];
        optionValue = optionValue[1];

        this.$el.append(this.template({
          text: optionText,
          value: optionValue,
          selected: optionValue == currentValue
        }));
      }
      else if (_.isObject(optionValue)) {
        optgroupName = optionValue.name;
        optgroup = $("<optgroup></optgroup>", { label: optgroupName });
        optgroup.append(this._renderOptions(optionValue.values, currentValue));
        this.$el.append(optgroup);
      }
      else {
        throw TypeError("optionValues elements must be a name-value pair or an object hash of { name: 'optgroup label', value: [option name-value pairs] }");
      }
    }

    return this;
  },

  /**
     Saves the value of the selected option to the model attribute. Triggers a
     `done` Backbone event.
  */
  save: function (e) {
    this.model.set(this.column.get("name"), this.formatter.toRaw(this.$el.val()));
    this.trigger("done");
  }

});

/**
   SelectCell is also a different kind of cell in that upon going into edit mode
   the cell renders a list of options for to pick from, as opposed to an input
   box.

   SelectCell cannot be referenced by its string name when used in a column
   definition because requires an `optionValues` class attribute to be
   defined. `optionValues` can either be a list of name-value pairs, to be
   rendered as options, or a list of object hashes which consist of a key *name*
   which is the option group name, and a key *values* which is a list of
   name-value pairs to be rendered as options under that option group.

   In addition, `optionValues` can also be a parameter-less function that
   returns one of the above. If the options are static, it is recommended the
   returned values to be memoized. _.memoize() is a good function to help with
   that.

   @class Backgrid.SelectCell
   @extends Backgrid.Cell
*/
var SelectCell = Backgrid.SelectCell = Cell.extend({

  /** @property */
  className: "select-cell",

  /** @property */
  editor: SelectCellEditor,

  /**
     @property {Array.<Array>|Array.<{name: string, values: Array.<Array>}>} optionValues
  */
  optionValues: undefined,

  /**
     Initializer.

     @param {Object} options
     @param {Backbone.Model} options.model
     @param {Backgrid.Column} options.column

     @throws {TypeError} If `optionsValues` is undefined.
  */
  initialize: function (options) {
    Cell.prototype.initialize.apply(this, arguments);
    requireOptions(this, ["optionValues"]);
    this.optionValues = _.result(this, "optionValues");
    this.listenTo(this, "edit", this.setOptionValues);
  },

  setOptionValues: function (cell, editor) {
    editor.setOptionValues(this.optionValues);
  },

  /**
     Renders the label using the raw value as key to look up from `optionValues`.

     @throws {TypeError} If `optionValues` is malformed.
  */
  render: function () {
    this.$el.empty();

    var optionValues = this.optionValues;
    var rawData = this.formatter.fromRaw(this.model.get(this.column.get("name")));

    try {
      if (!_.isArray(optionValues) || _.isEmpty(optionValues)) throw new TypeError;

      for (var i = 0; i < optionValues.length; i++) {
        var optionValue = optionValues[i];

        if (_.isArray(optionValue)) {
          var optionText  = optionValue[0];
          var optionValue = optionValue[1];

          if (optionValue == rawData) {
            this.$el.append(optionText);
            break;
          }
        }
        else if (_.isObject(optionValue)) {
          var optionGroupValues = optionValue.values;
          for (var j = 0; j < optionGroupValues.length; j++) {
            var optionGroupValue = optionGroupValues[j];
            if (optionGroupValue[1] == rawData) {
              this.$el.append(optionGroupValue[0]);
              break;
            }
          }
        }
        else {
          throw new TypeError;
        }
      }
    }
    catch (ex) {
      if (ex instanceof TypeError) {
        throw TypeError("'optionValues' must be of type {Array.<Array>|Array.<{name: string, values: Array.<Array>}>}");
      }
      throw ex;
    }

    return this;
  }

});
