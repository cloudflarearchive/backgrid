/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

var HeaderCell = Backgrid.HeaderCell = Backbone.View.extend({

  tagName: "th",

  events: {
    "click a": "toggleSorting"
  },

  initialize: function (options) {
    this.parent = options.parent;
    this.column = options.column;
    if (!this.column instanceof Column) {
      this.column = new Column(this.column);
    }
  },

  toggleSorting: function (e) {
    e.preventDefault();

    var self = this;

    var columnName = self.column.get("name");
    var $label = self.$el.find("a");

    if ($label.hasClass("backgrid-ascending")) {

      $label.removeClass("backgrid-ascending")
        .addClass("backgrid-descending");

      self.trigger("sort", function (left, right) {
        var leftVal = left.get(columnName);
        var rightVal = right.get(columnName);
        if (leftVal === rightVal) {
          return 0;
        }
        else if (leftVal > rightVal) { return -1; }
        return 1;
      });
    }
    else {

      $label.removeClass("backgrid-descending")
        .addClass("backgrid-ascending");

      self.trigger("sort", function (left, right) {
        var leftVal = left.get(columnName);
        var rightVal = right.get(columnName);
        if (leftVal === rightVal) {
          return 0;
        }
        else if (leftVal < rightVal) { return -1; }
        return 1;
      });
    }
  },

  render: function () {
    this.$el.empty();
    var $label = $("<a>")
      .addClass("backgrid-column-label backgrid-ascending").text(
        this.column.get("label"));
    this.$el.append($label);
    return this;
  }

});

var Header = Backgrid.Header = Backbone.View.extend({

  tagName: "thead",

  initialize: function (options) {
    var self = this;

    self.parent = options.parent;
    self.columns = options.columns;
    if (!(self.columns instanceof Backbone.Collection)) {
      self.columns = new Columns(self.columns);
    }
    self.cells = self.columns.map(function (column) {
      var cell = new HeaderCell({
        parent: self,
        column: column
      });

      cell.on("sort", self.parent.sort, self.parent);

      return cell;
    });

  },

  render: function () {
    var self = this;
    self.$el.empty();
    _.each(self.cells, function (cell) {
      self.$el.append(cell.render().$el);
    });
    return self;
  }

});
