/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

var Body = Backgrid.Body = Backbone.View.extend({

  tagName: "tbody",

  initialize: function (options) {
    var self = this;

    self.parent = options.parent;
    self.columns = options.columns;
    if (!(self.columns instanceof Backbone.Collection)) {
      self.columns = new Columns(self.columns);
    }

    self.rows = self.collection.map(function (model) {
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

  insertRow: function (model, collection, options) {

    // if insertRow() is called directly
    if (!options) {
      this.collection.add(model, (options = collection));
      return;
    }

    var row = new Row({
      parent: this,
      columns: this.columns,
      model: model
    });

    this.rows.splice(options.index, 0, row);

    if (typeof options.render === "undefined" || options.render) {
      if (options.index >= this.$el.children().length) {
        this.$el.children().last().after(row.render().$el);
      }
      else {
        this.$el.children().eq(options.index).before(row.render().$el);
      }
    }

  },

  removeRow: function (model, collection, options) {

    if (!options) {
      this.collection.remove(model, (options = collection));
      return;
    }

    if (typeof options.render === "undefined" || options.render) {
      this.rows[options.index].remove();
    }

    this.rows.splice(options.index, 1);
  },

  refresh: function () {
    var self = this;

    self.rows = self.collection.map(function (model) {
      var row = new Row({
        parent: self,
        columns: self.columns,
        model: model
      });

      return row;
    });

    return self.render();
  },

  render: function () {
    var self = this;

    self.$el.empty();

    _.each(self.rows, function (row) {
      self.$el.append(row.render().$el);
    });

    return this;
  }

});
