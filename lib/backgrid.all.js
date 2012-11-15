/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

(function (root) {

  var require = require || function(packageName) {
    throw new ReferenceError(packageName + " is required but missing.");
  };

  var _ = root._ || require("underscore");

  var Backbone = root.Backbone || require("backbone");

  // Monkey-patch Backbone <= 0.9.2 with dispose() on the View
  if (!Backbone.View.prototype.dispose) {
    _.extend(Backbone.View.prototype, {
      dispose: function() {
        this.undelegateEvents();
        if (this.model && this.model.off) {
          this.model.off(null, null, this);
        }
        if (this.collection && this.collection.off) {
          this.collection.off(null, null, this);
        }
        return this;
      },
      remove: function() {
        this.dispose();
        this.$el.remove();
        return this;
      }
    });
  }

  function trim(s) {
    if (String.prototype.trim) {
      return String.prototype.trim.call(s, s);
    } else {
      return s.replace(/^\s+|\s+$/g, "");
    }
  }

  function capitalize(s) {
    return String.fromCharCode(s.charCodeAt(0) - 32) + s.slice(1);
  }

  function lpad(str, length, padstr) {
    var paddingLen = length - (str + "").length;
    paddingLen = paddingLen < 0 ? 0 : paddingLen;
    var padding = "";
    for (var i = 0; i < paddingLen; i++) {
      padding += padstr;
    }
    return padding + str;
  }

  var Backgrid = root.Backgrid = {};

  Backgrid.VERSION = "0.1";

  // Just a convenient class for interested parties to subclass.
  // The default Cell classes don't require the formatter to be a subclass of
  // Formatter as long as the fromRaw(rawData) and toRaw(formattedData) methods
  // are defined.
  var Formatter = Backgrid.Formatter = function() {};

  _.extend(Formatter.prototype, {
    // Takes a raw value from a model and returns a formatted string for display.
    fromRaw: function(rawData) {
      return rawData;
    },
    // Takes a formatted string, usually from user input, and returns a
    // appropriately typed value for persistence in the model.
    toRaw: function(formattedData) {
      return formattedData;
    }
  });

  // A floating point number formatter. Doesn't speak scientific notation at the
  // moment.
  var NumberFormatter = Backgrid.NumberFormatter = function(options) {
    options = options ? _.clone(options) : {};
    _.extend(this, this.defaults, options);
    if (this.decimals < 0 || this.decimals > 20) {
      throw new RangeError("decimals must be between 0 and 20");
    }
  };

  NumberFormatter.prototype = new Formatter();

  _.extend(NumberFormatter.prototype, {
    defaults: {
      decimals: 2,
      decimalSeparator: ".",
      orderSeparator: ","
    },
    HUMANIZED_NUM_RE: /(\d)(?=(?:\d{3})+$)/g,
    fromRaw: function(number) {
      if (isNaN(number) || number === null) {
        return "";
      }
      number = number.toFixed(~~this.decimals);
      var parts = number.split(".");
      var integerPart = parts[0];
      var decimalPart = parts[1] ? (this.decimalSeparator || ".") + parts[1] : "";
      return integerPart.replace(this.HUMANIZED_NUM_RE, "$1" + this.orderSeparator) + decimalPart;
    },
    toRaw: function(formattedData) {
      var rawData = "";
      var thousands = trim(formattedData).split(this.orderSeparator);
      for (var i = 0; i < thousands.length; i++) {
        rawData += thousands[i];
      }
      var decimalParts = rawData.split(this.decimalSeparator);
      rawData = "";
      for (var i = 0; i < decimalParts.length; i++) {
        rawData = rawData + decimalParts[i] + ".";
      }
      if (rawData[rawData.length - 1] === ".") {
        rawData = rawData.slice(0, rawData.length - 1);
      }
      var result = (rawData * 1).toFixed(~~this.decimals) * 1;
      if (_.isNumber(result) && !_.isNaN(result)) {
        return result;
      } else {
        return void 0;
      }
    }
  });

  // Only understands ISO-8601 formatted datetime strings. If a timezone is
  // specified, it must be an offset.
  var DatetimeFormatter = Backgrid.DatetimeFormatter = function(options) {
    options = options ? _.clone(options) : {};
    _.extend(this, this.defaults, options);
    if (!this.includeDate && !this.includeTime) {
      throw new Error("Either includeDate or includeTime must be true");
    }
  };

  DatetimeFormatter.prototype = new Formatter();

  _.extend(DatetimeFormatter.prototype, {
    defaults: {
      includeDate: true,
      includeTime: true,
      includeMilli: false
    },
    DATE_RE: /^([+\-]?\d{4})-(\d{2})-(\d{2})$/,
    TIME_RE: /^(\d{2}):(\d{2}):(\d{2})(\.\d{3})?$/,
    ZONE_RE: /^([+\-]\d{2}):?(\d{2})$/,
    ISO_SPLITTER_RE: /T|Z| +/,
    fromRaw: function(rawData) {
      rawData = trim(rawData);
      var parts = rawData.split(this.ISO_SPLITTER_RE) || [];
      var date = this.includeDate ? parts[0] : "";
      var time = this.includeDate ? parts[1] : parts[0] || "";
      var zone = this.includeDate ? parts[2] : parts[1] || "";
      var YYYYMMDD = this.DATE_RE.exec(date) || [];
      var HHmmssSSS = this.TIME_RE.exec(time) || [];
      var zzZZ = this.ZONE_RE.exec(zone) || [];
      zzZZ[1] = zzZZ[1] * 1 || 0;
      zzZZ[2] = zzZZ[2] * 1 || 0;
      var jsDate = new Date(Date.UTC(YYYYMMDD[1] * 1 || 0, YYYYMMDD[2] * 1 - 1 || 0, YYYYMMDD[3] * 1 || 0, (HHmmssSSS[1] * 1 || null) + zzZZ[1], (HHmmssSSS[2] * 1 || null) + zzZZ[2], HHmmssSSS[3] * 1 || null, HHmmssSSS[4] * 1 || null));
      var result = "";
      if (this.includeDate) {
        result = lpad(jsDate.getFullYear(), 4, 0) + "-" + lpad(jsDate.getMonth() + 1, 2, 0) + "-" + lpad(jsDate.getDate(), 2, 0);
      }
      if (this.includeTime) {
        result = result + " " + lpad(jsDate.getHours(), 2, 0) + ":" + lpad(jsDate.getMinutes(), 2, 0) + ":" + lpad(jsDate.getSeconds(), 2, 0);
        if (this.includeMilli) {
          result = result + "." + lpad(jsDate.getMilliseconds(), 3, 0);
        }
      }
      return result;
    },
    toRaw: function(formattedData) {
      formattedData = trim(formattedData);
      var parts = formattedData.split(this.ISO_SPLITTER_RE) || [];
      var date = this.includeDate ? parts[0] : "";
      var time = this.includeDate ? parts[1] : parts[0] || "";
      var zone = this.includeDate ? parts[2] : parts[1] || "";
      var YYYYMMDD = this.DATE_RE.exec(date) || [];
      var HHmmssSSS = this.TIME_RE.exec(time) || [];
      var zzZZ = this.ZONE_RE.exec(zone) || [];
      if (this.includeDate && typeof YYYYMMDD[0] === "undefined") {
        return void 0;
      }
      if (this.includeTime && typeof HHmmssSSS[0] === "undefined") {
        return void 0;
      }
      if (!this.includeDate && date) {
        return void 0;
      }
      if (!this.includeTime && time) {
        return void 0;
      }
      var jsDate = null;
      if (zzZZ !== []) {
        zzZZ[1] = zzZZ[1] * 1 || 0;
        zzZZ[2] = zzZZ[2] * 1 || 0;
        jsDate = new Date(Date.UTC(YYYYMMDD[1] * 1 || 0, YYYYMMDD[2] * 1 - 1 || 0, YYYYMMDD[3] * 1 || 0, (HHmmssSSS[1] * 1 || null) + zzZZ[1], (HHmmssSSS[2] * 1 || null) + zzZZ[2], HHmmssSSS[3] * 1 || null, HHmmssSSS[4] * 1 || null));
      } else {
        jsDate = new Date(YYYYMMDD[1] * 1 || 0, YYYYMMDD[2] * 1 - 1 || 0, YYYYMMDD[3] * 1 || 0, HHmmssSSS[1] * 1 || null, HHmmssSSS[2] * 1 || null, HHmmssSSS[3] * 1 || null, HHmmssSSS[4] * 1 || null);
      }
      var result = "";
      if (this.includeDate) {
        result = lpad(jsDate.getUTCFullYear(), 4, 0) + "-" + lpad(jsDate.getUTCMonth() + 1, 2, 0) + "-" + lpad(jsDate.getUTCDate(), 2, 0);
      }
      if (this.includeTime) {
        result = result + "T" + lpad(jsDate.getUTCHours(), 2, 0) + ":" + lpad(jsDate.getUTCMinutes(), 2, 0) + ":" + lpad(jsDate.getUTCSeconds(), 2, 0);
        if (this.includeMilli) {
          result = result + "." + lpad(jsDate.getUTCMilliseconds(), 3, 0);
        }
        result += "Z";
      }
      return result;
    }
  });

  var CellEditor = Backgrid.CellEditor = Backbone.View.extend({
    initialize: function(options) {
      Backbone.View.prototype.initialize.apply(this, arguments);
      this.formatter = options.formatter;
      this.column = options.column;
      if (!this.formatter) {
        throw new Error("formatter is required");
      }
      if (!this.column) {
        throw new Error("column is required");
      }
    },
    postRender: function() {
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
      blur: "saveOrCancel",
      keydown: "saveOrCancel"
    },
    initialize: function(options) {
      CellEditor.prototype.initialize.apply(this, arguments);
      this.on("done", this.remove, this);
    },
    render: function() {
      this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
      return this;
    },
    // MUST be called after the rendered *el* has been inserted into the DOM for
    // things such as focusing and selecting the content of the editor
    postRender: function() {
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
    saveOrCancel: function(e) {
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
          } else {
            this.trigger("error");
          }
        } else {
          if (e.keyCode === 27) {
            // undo
            e.stopPropagation();
            this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
            this.trigger("done");
          }
        }
      } else {
        if (e.type === "blur") {
          this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
          this.trigger("done");
        }
      }
    },
    remove: function() {
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
    formatter: new Formatter(),
    editor: DivCellEditor,
    events: {
      click: "enterEditMode"
    },
    initialize: function(options) {
      Backbone.View.prototype.initialize.apply(this, arguments);
      this.formatter = options && options.formatter || this.formatter;
      this.editor = options && options.editor || this.editor;
      this.column = options && options.column;
    },
    // Given a column and a model instance, render() will output the formatted
    // value from the model keyed by the column name.
    render: function() {
      this.$el.empty().text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
      return this;
    },
    enterEditMode: function(e) {
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
    renderError: function() {
      this.$el.addClass("error");
    },
    exitEditMode: function() {
      this.$el.removeClass("error");
      this.currentEditor.remove();
      delete this.currentEditor;
      this.$el.removeClass("editor");
      this.render();
      this.delegateEvents();
    },
    remove: function() {
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
      fromRaw: function(rawData) {
        return _.escape(rawData);
      },
      toRaw: function(formattedData) {
        return formattedData;
      }
    }
  });

  var UriCell = Backgrid.UriCell = StringCell.extend({
    className: "uri-cell",
    formatter: {
      fromRaw: function(rawData) {
        return rawData;
      },
      toRaw: function(formattedData) {
        return encodeURI(formattedData);
      }
    },
    render: function() {
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
    initialize: function(options) {
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
    initialize: function(options) {
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
      click: "enterEditMode",
      "blur input[type=checkbox]": "exitEditMode",
      "change input[type=checkbox]": "save"
    },
    render: function() {
      this.currentEditor = $(this.editor({
        checked: this.formatter.fromRaw(this.model.get(this.column.get("name")))
      }));
      this.$el.append(this.currentEditor);
      return this;
    },
    enterEditMode: function(e) {
      this.$el.addClass("editor");
      this.currentEditor.focus();
    },
    exitEditMode: function(e) {
      this.$el.removeClass("editor");
    },
    save: function(e) {
      var val = this.formatter.toRaw(this.curentEditor.val());
      this.model.set(this.column.get("name"), val);
    }
  });

  var SelectCellEditor = Backgrid.SelectCellEditor = CellEditor.extend({
    tagName: "select",
    events: {
      change: "save",
      blur: "save"
    },
    initialize: function(options) {
      CellEditor.prototype.initialize.apply(this, arguments);
      this.optionValues = options.optionValues;
    },
    _renderOptions: function(nvps) {
      var options = "";
      for (var i = 0; i < nvps.length; i++) {
        options = options + "<option value='" + nvps[i][0] + "'>" + nvps[i][1] + "</option>";
      }
      return options;
    },
    render: function() {
      var optionValues = _.result(this, "optionValues");
      if (!_.isArray(optionValues)) {
        throw TypeError("optionValues must be an array");
      }
      var optionValue = null;
      var optionText = null;
      var optionValue = null;
      var optgroupName = null;
      for (var i = 0; i < optionValues.length; i++) {
        var optionValue = optionValues[i];
        if (_.isArray(optionValue)) {
          optionText = optionValue[0];
          optionValue = optionValue[1];
          this.$el.append($("<option value='" + optionValue + "'>" + optionText + "</option>"));
        } else {
          if (_.isObject(optionValue)) {
            optgroupName = optionValue.name;
            optgroup = $("<optgroup></optgroup>", {
              label: optgroupName
            });
            optgroup.append(this._renderOptions(optionValue.value));
            this.$el.append(optgroup);
          } else {
            throw TypeError("optionValues elements must be a name-value pair or an object hash of { name: 'optgroup label', value: [option name-value pairs] }");
          }
        }
      }
      return this;
    },
    save: function(e) {
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
    // In addition, optionValues can also be a parameter-less function that
    // returns one of the above. If the options are static, it is recommended the
    // returned values to be memoized. _.memoize() is a good function to help with
    // that.
    initialize: function(options) {
      Cell.prototype.initialize.apply(this, arguments);
      this.optionValues = options.optionValues;
      if (!optionValues) {
        throw new Error("optionValues is required");
      }
    },
    enterEditMode: function(e) {
      Cell.prototype.enterEditMode.apply(this, arguments);
      this.currentEditor.initialize({
        formatter: this.formatter,
        column: this.column,
        model: this.model,
        optionValues: this.optionValues
      });
    }
  });

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
    initialize: function(attrs) {
      if (!this.has("label")) {
        this.set({
          label: this.get("name")
        }, {
          silent: true
        });
      }
      if (!attrs.cell) {
        throw new Error("cell is required");
      }
      if (!attrs.name) {
        throw new Error("name is required");
      }
      if (typeof attrs.cell === "string") {
        var cell = Backgrid[capitalize(this.get("cell")) + "Cell"];
        if (typeof cell === "undefined") {
          throw new ReferenceError("Cell type '" + attrs.cell + "' not found");
        }
        this.set({
          cell: cell
        }, {
          silent: true
        });
      } else {
        this.set({
          cell: attrs.cell
        }, {
          silent: true
        });
      }
    }
  });

  var Columns = Backgrid.Columns = Backbone.Collection.extend({
    model: Column
  });

  var Row = Backgrid.Row = Backbone.View.extend({
    tagName: "tr",
    initialize: function(options) {
      var self = this;
      self.parent = options.parent;
      self.columns = options.columns;
      if (!(self.columns instanceof Backbone.Collection)) {
        self.columns = new Columns(self.columns);
      }
      self.cells = [];
      self.columns.each(function(column) {
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
    dispose: function() {
      Backbone.View.prototype.dispose.apply(this, arguments);
      this.columns.off(null, null, this);
      if (this.parent && this.parent.off) {
        this.parent.off(null, null, this);
      }
      var cell = null;
      for (var i = 0; i < this.cells.length; i++) {
        cell = this.cells[i];
        cell.off(null, null, this);
        cell.dispose();
      }
      return this;
    },
    render: function() {
      this.$el.empty();
      for (var i = 0; i < this.cells.length; i++) {
        this.$el.append(this.cells[i].render().$el);
      }
      return this;
    }
  });

  var HeaderCell = Backgrid.HeaderCell = Backbone.View.extend({
    tagName: "th",
    events: {
      "click a": "triggerSort"
    },
    direction: null,
    initialize: function(options) {
      this.parent = options.parent;
      this.column = options.column;
      if (!this.column instanceof Column) {
        this.column = new Column(this.column);
      }
    },
    dispose: function() {
      Backbone.View.prototype.dispose.apply(this, arguments);
      if (this.parent && this.parent.off) {
        this.parent.off(null, null, this);
      }
      this.column.off(null, null, this);
      return this;
    },
    toggle: function(columnName, direction) {
      var $label = this.$el.find("a");
      $label.removeClass("ascending descending");
      if (columnName === this.column.get("name")) {
        if (direction) {
          $label.addClass(direction);
        }
        this.direction = direction;
      } else {
        this.direction = null;
      }
    },
    triggerSort: function(e) {
      e.preventDefault();
      var self = this;
      var columnName = self.column.get("name");
      if (self.column.get("sortable")) {
        if (this.direction === "ascending") {
          self.trigger("sort", function(left, right) {
            var leftVal = left.get(columnName);
            var rightVal = right.get(columnName);
            if (leftVal === rightVal) {
              return 0;
            } else {
              if (leftVal > rightVal) {
                return -1;
              }
            }
            return 1;
          }, columnName, "descending");
        } else {
          if (this.direction === "descending") {
            self.trigger("sort", null, columnName, null);
          } else {
            self.trigger("sort", function(left, right) {
              var leftVal = left.get(columnName);
              var rightVal = right.get(columnName);
              if (leftVal === rightVal) {
                return 0;
              } else {
                if (leftVal < rightVal) {
                  return -1;
                }
              }
              return 1;
            }, columnName, "ascending");
          }
        }
      }
    },
    render: function() {
      this.$el.empty();
      var $label = $("<a>").text(this.column.get("label")).append("<b class='sort-caret'></b>");
      this.$el.append($label);
      return this;
    }
  });

  var Header = Backgrid.Header = Backbone.View.extend({
    tagName: "thead",
    initialize: function(options) {
      var self = this;
      self.parent = options.parent;
      self.columns = options.columns;
      if (!(self.columns instanceof Backbone.Collection)) {
        self.columns = new Columns(self.columns);
      }
      self.cells = [];
      for (var i = 0; i < self.columns.length; i++) {
        var column = self.columns.at(i);
        if (column.get("renderable")) {
          var cell = new HeaderCell({
            parent: self,
            column: column
          });
          cell.on("sort", self.dispatchSortEvent, self);
          self.cells.push(cell);
        }
      }
    },
    dispose: function() {
      Backbone.View.prototype.dispose.apply(this, arguments);
      this.columns.off(null, null, this);
      if (this.parent && this.parent.off) {
        this.parent.off(null, null, this);
      }
      var cell = null;
      for (var i = 0; i < this.cells.length; i++) {
        cell = this.cells[i];
        cell.off(null, null, this);
        cell.dispose();
      }
      return this;
    },
    dispatchSortEvent: function(comparator, sortByColName, direction) {
      this.parent.sort(comparator);
      _.each(this.cells, function(cell) {
        cell.toggle(sortByColName, direction);
      });
    },
    render: function() {
      var self = this;
      self.$el.empty();
      _.each(self.cells, function(cell) {
        self.$el.append(cell.render().$el);
      });
      return self;
    }
  });

  var Body = Backgrid.Body = Backbone.View.extend({
    tagName: "tbody",
    initialize: function(options) {
      var self = this;
      self.parent = options.parent;
      self.columns = options.columns;
      if (!(self.columns instanceof Backbone.Collection)) {
        self.columns = new Columns(self.columns);
      }
      self.rows = self.collection.map(function(model) {
        var row = new Row({
          parent: self,
          columns: self.columns,
          model: model
        });
        return row;
      });
      self.collection.on("add", self.insertRow, self);
      self.collection.on("remove", self.removeRow, self);
      self.collection.on("reset", self.refresh, self);
      if (!self.collection.comparator) {
        self.collection.comparator = self._idCidComparator;
      }
    },
    dispose: function() {
      Backbone.View.prototype.dispose.apply(this, arguments);
      this.columns.off(null, null, this);
      if (this.parent && this.parent.off) {
        this.parent.off(null, null, this);
      }
      var row = null;
      for (var i = 0; i < this.rows.length; i++) {
        row = this.rows[i];
        row.off(null, null, this);
        row.dispose();
      }
      return this;
    },
    sort: function(comparator) {
      this.collection.comparator = comparator || this._idCidComparator;
      this.collection.sort();
    },
    _idCidComparator: function(left, right) {
      var lid = left.id, lcid = left.cid, rid = right.cid, rcid = right.rcid;
      if (lid && rid) {
        if (lid < rid) {
          return -1;
        } else {
          if (lid > rid) {
            return -1;
          }
        }
      } else {
        if (lid && rcid) {
          if (lid < rcid) {
            return -1;
          } else {
            if (lid > rcid) {
              return 1;
            }
          }
        } else {
          if (lcid && rid) {
            if (lcid < rid) {
              return -1;
            } else {
              if (lcid > rid) {
                return 1;
              }
            }
          } else {
            if (lcid && rcid) {
              if (lcid < rcid) {
                return -1;
              } else {
                if (lcid > rcid) {
                  return 1;
                }
              }
            }
          }
        }
      }
      return 0;
    },
    insertRow: function(model, collection, options) {
      // if insertRow() is called directly
      if (options) {
        var row = new Row({
          parent: this,
          columns: this.columns,
          model: model
        });
        this.rows.splice(options.index, 0, row);
        if (typeof options.render === "undefined" || options.render) {
          if (options.index >= this.$el.children().length) {
            this.$el.children().last().after(row.render().$el);
          } else {
            this.$el.children().eq(options.index).before(row.render().$el);
          }
        }
      } else {
        this.collection.add(model, options = collection);
      }
    },
    removeRow: function(model, collection, options) {
      if (options) {
        if (typeof options.render === "undefined" || options.render) {
          this.rows[options.index].remove();
        }
        this.rows.splice(options.index, 1);
      } else {
        this.collection.remove(model, options = collection);
      }
    },
    refresh: function() {
      var self = this;
      self.rows = self.collection.map(function(model) {
        var row = new Row({
          parent: self,
          columns: self.columns,
          model: model
        });
        return row;
      });
      return self.render();
    },
    render: function() {
      var self = this;
      self.$el.empty();
      _.each(self.rows, function(row) {
        self.$el.append(row.render().$el);
      });
      return this;
    }
  });

  var Footer = Backgrid.Footer = Backbone.View.extend({
    tagName: "tfoot"
  });

  var Grid = Backgrid.Grid = Backbone.View.extend({
    tagName: "table",
    className: "backgrid",
    initialize: function(options) {
      this.columns = options.columns;
      this.header = options.header || Header;
      this.header = new this.header({
        parent: this,
        columns: this.columns,
        collection: this.collection
      });
      this.body = new Body({
        parent: this,
        columns: this.columns,
        collection: this.collection
      });
      if (options.footer) {
        this.footer = new options.footer({
          parent: this,
          columns: this.columns,
          collection: this.collection
        });
      }
    },
    dispose: function() {
      Backbone.View.prototype.dispose.apply(this, arguments);
      this.columns.off(null, null, this);
      this.header.off(null, null, this);
      this.header.dispose();
      this.body.off(null, null, this);
      this.body.dispose();
      if (this.footer) {
        this.footer.off(null, null, this);
        this.footer.dispose();
      }
      return this;
    },
    sort: function(comparator) {
      this.body.sort(comparator);
    },
    render: function() {
      this.$el.empty();
      this.$el.append(this.header.render().$el);
      if (this.footer) {
        this.$el.append(this.footer.render().$el);
      }
      this.$el.append(this.body.render().$el);
      this.trigger("rendered");
      return this;
    }
  });

  // TODO: Make this work when prepopulated and/or empty
  var PageableCollection = Backgrid.PageableCollection = Backbone.Collection.extend({
    perPage: 30,
    page: 0,
    initialize: function(models, options) {
      Backbone.Collection.prototype.initialize.apply(this, arguments);
      if (options) {
        this.perPage = options.perPage || this.perPage;
        this.page = options.page || this.page;
      }
    },
    parse: function(resp, xhr) {
      var count = xhr.getResponseHeader("X-Object-Count");
      if (count) {
        this.pageCount = count * 1 / this.perPage;
      }
      return resp;
    },
    fetch: function(options) {
      var self = this;
      options = options ? _.clone(options) : {};
      var success = options.success;
      options.success = function(resp, status, xhr) {
        if (success) {
          success(self, resp);
        }
        self.trigger("fetched");
      };
      this.trigger("fetching");
      return Backbone.Collection.prototype.fetch(options);
    },
    prevPage: function() {
      return this.getPage(this.page + 1);
    },
    nextPage: function() {
      return this.getPage(this.page - 1);
    },
    getPage: function(page) {
      if (this.page < 0) {
        throw new RangeError("You are already at the first page.");
      } else {
        if (this.page >= this.pageCount) {
          throw new RangeError("You are already at the last page.");
        }
      }
      this.page = page;
      return this.fetch({
        data: {
          page: this.page,
          per_page: this.perPage
        }
      });
    }
  });

  var PaginatorItem = Backgrid.PaginatorItem = Backbone.View.extend({
    tagName: "li",
    events: {
      "click a": "triggerLinkClicked"
    },
    initialize: function(options) {
      this.label = options.label;
      this.page = options.page;
      this.hasAnchor = typeof options.hasAnchor !== "undefined" ? options.hasAnchor : true;
    },
    render: function() {
      if (this.hasAnchor) {
        var $a = $("<a>" + this.label + "</a>", {
          href: "#",
          title: "Page " + this.label
        });
        this.$el.append($a);
      } else {
        this.$el.text(this.label);
      }
      return this;
    },
    triggerLinkClicked: function(e) {
      e.preventDefault();
      this.trigger("clicked", this.page);
    }
  });

  var Paginator = Backgrid.Paginator = Footer.extend({
    className: "paginator",
    windowSize: 10,
    initialize: function(options) {
      Footer.prototype.initialize.apply(this, arguments);
      options = options ? _.clone(options) : {};
      this.parent = options.parent;
      this.columns = options.columns;
      if (!(this.columns instanceof Backbone.Collection)) {
        this.columns = new Columns(this.columns);
      }
      this.collection.on("fetched", this.refresh, this);
      this.windowSize = options.windowSize || this.windowSize;
      this.items = [];
    },
    dispose: function() {
      Backbone.View.prototype.dispose.apply(this, arguments);
      if (this.parent && this.parent.off) {
        this.parent.off(null, null, this);
      }
      this.columns.off(null, null, this);
      var item = null;
      for (var i = 0; i < this.items.length; i++) {
        item = this.items[i];
        item.off(null, null, this);
        item.dispose();
      }
      return this;
    },
    refresh: function() {
      var $ul = this.$el.find("ul");
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].remove();
      }
      this.items = [];
      var collection = this.collection;
      // render prev handle if not at first page
      if (collection.page > 0) {
        var item = new PaginatorItem({
          label: ">",
          page: collection.page
        });
        item.on("clicked", collection.getPage, collection);
        this.items.push(item);
        $ul.append(item.render().$el);
      }
      var lastPage = Math.ceil(collection.pageCount / collection.pageSize) - 1;
      var windowStart = collection.page % this.windowSize + Math.floor(collection.page / this.windowSize);
      var windowEnd = windowStart + this.windowSize;
      windowEnd = windowEnd <= lastPage ? windowEnd : lastPage;
      for (var i = windowStart; i < windowEnd; i++) {
        // render link if not at current page
        var item = new PaginatorItem({
          label: i + 1,
          page: i,
          hasAnchor: i !== collection.page
        });
        item.on("clicked", collection.getPage, collection);
        this.items.push(item);
        $ul.append(item.render().$el);
      }
      // render last handle if not at last page
      if (collection.page < collection.pageCount - 1) {
        var item = new PaginatorItem({
          label: "<",
          page: collection.page
        });
        item.on("clicked", collection.getPage, collection);
        this.items.push(item);
        $ul.append(item.render().$el);
      }
    },
    render: function() {
      var renderableColCount = _.reduce(this.columns.pluck("renderable"), function(accum, renderable) {
        return renderable ? accum + 1 : 0;
      }, 0);
      this.$el.append($("<tr><td span='" + renderableColCount + "'><ul></ul></td></tr>"));
      this.refresh();
      return this;
    }
  });}(this));
