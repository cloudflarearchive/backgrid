/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

(function (root) {

/*global root:true */
    var require = require || function(packageName) {
    throw new ReferenceError(packageName + " is required but missing.");
  };

  var _ = root._ || require("underscore");

  var Backbone = root.Backbone || require("backbone");

  if (!_.string && !_.str) {
    _.string = _.str = require("underscore.string");
  }

  var Backgrid = root.Backgrid = {};

  // Just a convenient class for interested parties to subclass.
  // The default Cell classes don't require the formatter to be a subclass of
  // Formatter as long as the fromRaw(rawData) and toRaw(formattedData) methods
  // are defined.
  var Formatter = Backgrid.Formatter = function() {};

  _.extend(Formatter.prototype, {
    // Takes raw data from a model to its formatted form and return it
    fromRaw: function(rawData) {
      return rawData;
    },
    // Takes formatted data from a cell editor to its raw form for the model and return it
    toRaw: function(formattedData) {
      return formattedData;
    }
  });

  /*global Backbone:false, Backgrid:false, Column:false, Formatter:false */
  var Cell = Backgrid.Cell = Backbone.View.extend({
    tagName: "td",
    formatter: new Formatter(),
    viewModeEvents: {
      click: "enterEditMode"
    },
    editModeEvents: {
      blur: "undoAndExitEditMode",
      keydown: "saveAndExitEditMode"
    },
    echo: function(e) {
      console.dir(e);
    },
    initialize: function(options) {
      Backbone.View.prototype.initialize.apply(this, arguments);
      this.formatter = options && options.formatter || this.formatter;
      this.column = options && options.column;
    },
    // Given a column and a model instance, render() will output the formatted
    // value from the model keyed with the column name.
    render: function() {
      this.$el.empty();
      this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
      this.delegateEvents(this.viewModeEvents);
      return this;
    },
    enterEditMode: function(e) {
      if (this.column.get("editable")) {
        e.preventDefault();
        e.stopPropagation();
        var $el = this.$el;
        this.delegateEvents(this.editModeEvents);
        $el.attr("contenteditable", true).focus();
      }
    },
    saveAndExitEditMode: function(e) {
      // enter
      if (e.keyCode === 13) {
        e.preventDefault();
        var valueToSet = this.formatter.toRaw(this.$el.text());
        if (this.model.set(this.column.get("name"), valueToSet)) {
          this.exitEditMode();
        }
      } else {
        if (e.keyCode === 27) {
          // undo
          this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
          this.exitEditMode();
        }
      }
    },
    undoAndExitEditMode: function(e) {
      this.render();
    },
    exitEditMode: function() {
      this.$el.removeAttr("contenteditable");
      this.delegateEvents(this.viewModeEvents);
    }
  });

  // StringCell displays HTML escaped data and accepts anything typed in.
  var StringCell = Backgrid.StringCell = Cell.extend({
    className: "backgrid-string-cell",
    formatter: {
      fromRaw: function(rawData) {
        return _.escape(rawData);
      },
      toRaw: function(formattedData) {
        return formattedData;
      }
    }
  });

  // TODO: allow editing a uri cell
  var URICell = Backgrid.URICell = StringCell.extend({
    className: "backgrid-uri-cell",
    render: function(model) {
      this.setElement(this.$el.clone(true, true)[0]);
      this.$el.empty();
      var formattedValue = this.formatter.fromRaw(model.get(this.column.get("name")));
      this.$el.text(formattedValue).children().wrap("<a>", {
        href: formattedValue
      });
      return this;
    }
  });

  var NumberCell = Backgrid.NumberCell = Cell.extend({
    className: "backgrid-number-cell",
    decimals: 2,
    decimalSeparator: ".",
    orderSeparator: ",",
    initialize: function(options) {
      var self = this;
      Cell.prototype.initialize.apply(self, arguments);
      if (options) {
        self.decimals = typeof options.decimals !== "undefined" ? options.decimals : self.decimals;
        self.decimalSeparator = options.decimalSeparator || self.decimalSeparator;
        self.orderSeparator = typeof options.orderSeparator !== "undefined" ? options.orderSeparator : self.orderSeparator;
      }
      self.formatter = options && options.formatter || {
        fromRaw: function(rawData) {
          var result = _.str.numberFormat(rawData, self.decimals, self.decimalSeparator);
          // underscore.string issue #154
          return result.replace(",", self.orderSeparator);
        },
        toRaw: function(formattedData) {
          return (formattedData.replace(self.orderSeparator, "").replace(self.decimalSeparator, ".") * 1 || 0).toFixed(~~self.decimals);
        }
      };
    }
  });

  // An IntegerCell is just a NumberCell with 0 decimals. If a floating point
  // number is supplied, the number is simply rounded the usual way when
  // displayed.
  var IntegerCell = Backgrid.IntegerCell = NumberCell.extend({
    decimals: 0
  });

  // DatetimeCell is a basic cell that accepts datetime string values in RFC-2822
  // or W3C's subset of ISO-8601 and displays them in ISO-8601 format. Only works
  // with EcmaScript 5 compliant browsers at the moment. For a much more
  // sophisticated date time cell, the recommended way is to use the bundled
  // kalendae-cell.js extension which supplies a KalendaeCell that renders a
  // Kalendae widget and uses moment.js to parse the datetime values.
  var DatetimeCell = Backgrid.DatetimeCell = Cell.extend({
    className: "backgrid-datetime-cell",
    formatter: {
      fromRaw: function(rawData) {
        return new Date(rawData).toISOString();
      },
      toRaw: function(formattedData) {
        return new Date(rawData).toISOString();
      }
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
        throw new Error("Column.cell is required");
      }
      if (!attrs.name) {
        throw new Error("Column.name is required");
      }
      if (typeof attrs.cell === "string") {
        this.set({
          cell: Backgrid[_.str.capitalize(this.get("cell")) + "Cell"]
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
    },
    render: function() {
      var self = this;
      self.$el.empty();
      self.columns.each(function(column) {
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

  var HeaderCell = Backgrid.HeaderCell = Backbone.View.extend({
    tagName: "th",
    events: {
      "click a": "toggleSorting"
    },
    initialize: function(options) {
      this.parent = options.parent;
      this.column = options.column;
      if (!this.column instanceof Column) {
        this.column = new Column(this.column);
      }
    },
    toggleSorting: function(e) {
      e.preventDefault();
      var self = this;
      var columnName = self.column.get("name");
      var $label = self.$el.find("a");
      if ($label.hasClass("backgrid-ascending")) {
        $label.removeClass("backgrid-ascending").addClass("backgrid-descending");
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
        });
      } else {
        $label.removeClass("backgrid-descending").addClass("backgrid-ascending");
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
        });
      }
    },
    render: function() {
      this.$el.empty();
      var $label = $("<a>").addClass("backgrid-column-label backgrid-ascending").text(this.column.get("label"));
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
      self.cells = self.columns.map(function(column) {
        var cell = new HeaderCell({
          parent: self,
          column: column
        });
        cell.on("sort", self.parent.sort, self.parent);
        return cell;
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
    initialize: function(options) {
      this.columns = options.columns;
      if (options.header) {
        this.header = new options.header({
          parent: this,
          columns: this.columns
        });
      } else {
        this.header = new Header({
          parent: this,
          columns: this.columns
        });
      }
      this.body = new Body({
        parent: this,
        columns: this.columns,
        collection: this.collection
      });
      if (options.footer) {
        this.footer = new options.footer({
          parent: this,
          columns: this.columns
        });
      }
    },
    sort: function(comparator) {
      this.collection.comparator = comparator;
      this.collection.sort();
      this.collection.comparator = void 0;
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
  });}(this));
