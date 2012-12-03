/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/**
   Body is the table body which contains the rows inside a table. Body is
   responsible for refreshing the rows after sorting, insertion and removal.

   @class Backgrid.Body
   @extends Backbone.View
*/
var Body = Backgrid.Body = Backbone.View.extend({

  /** @property */
  tagName: "tbody",

  /**
     Initializer.

     @param {Object} options
     @param {*} options.parent
     @param {Backbone.Collection} options.collection
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns
     Column metadata
     @param {Backgrid.Row} [options.row=Backgrid.Row] The Row class to use.

     @throws {TypeError} If options.columns or options.collection is undefined.

     See Backgrid.Row.
  */
  initialize: function (options) {
    requireOptions(options, ["columns", "collection"]);

    var self = this;

    self.parent = options.parent;
    self.columns = options.columns;
    if (!(self.columns instanceof Backbone.Collection)) {
      self.columns = new Columns(self.columns);
    }

    self.row = options.row || Row;
    self.rows = self.collection.map(function (model) {
      var row = new self.row({
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

  dispose: function () {
    this.columns.off(null, null, this);
    if (this.parent && this.parent.off) this.parent.off(null, null, this);
    var row = null;
    for (var i = 0; i < this.rows.length; i++) {
      row = this.rows[i];
      row.off(null, null, this);
      row.dispose();
    }
    return Backbone.View.prototype.dispose.apply(this, arguments);
  },
  
  /**
     This method can be called either directly or as a callback to a
     [Backbone.Collecton#add](http://backbonejs.org/#Collection-add) event.

     When called directly, it accepts a model or an array of models and an
     option hash just like
     [Backbone.Collection#add](http://backbonejs.org/#Collection-add) and
     delegates to it. Once the model is added, a new row is inserted into the
     body and automatically rendered.

     When called as a callback of an `add` event, splices a new row into the
     body and renders it.

     @param {Backbone.Model} model The model to render as a row.
     @param {Backbone.Collection} collection When called directly, this
     parameter is actually the options to
     [Backbone.Collection#add](http://backbonejs.org/#Collection-add).
     @param {Object} options When called directly, this must be null.

     See:

     - [Backbone.Collection#add](http://backbonejs.org/#Collection-add)
  */
  insertRow: function (model, collection, options) {

    // insertRow() is called directly
    if (!options) {
      this.collection.add(model, (options = collection));
      return;
    }

    var row = new this.row({
      parent: this,
      columns: this.columns,
      model: model
    });

    this.rows.splice(options.index, 0, row);

    if (_.isUndefined(options.render) || options.render) {
      if (options.index >= this.$el.children().length) {
        this.$el.children().last().after(row.render().$el);
      }
      else {
        this.$el.children().eq(options.index).before(row.render().$el);
      }
    }

  },

  /**
     The method can be called either directly or as a callback to a
     [Backbone.Collection#remove](http://backbonejs.org/#Collection-remove)
     event.

     When called directly, it accepts a model or an array of models and an
     option hash just like
     [Backbone.Collection#remove](http://backbonejs.org/#Collection-remove) and
     delegates to it. Once the model is removed, a corresponding row is removed
     from the body.

     When called as a callback of a `remove` event, splices into the rows and
     removes the row responsible for rendering the model.

     @param {Backbone.Model} model The model to remove from the body.
     @param {Backbone.Collection} collection When called directly, this
     parameter is actually the options to
     [Backbone.Collection#remove](http://backbonejs.org/#Collection-remove).
     @param {Object} options When called directly, this must be null.

     See:

     - [Backbone.Collection#remove](http://backbonejs.org/#Collection-remove)
  */
  removeRow: function (model, collection, options) {

    // removeRow() is called directly
    if (!options) {
      this.collection.remove(model, (options = collection));
      return;
    }

    if (_.isUndefined(options.render) || options.render) {
      this.rows[options.index].remove();
    }

    this.rows.splice(options.index, 1);
  },

  /**
     Reinitialize all the rows inside the body and re-render them.
  */
  refresh: function () {
    var self = this;

    _.each(self.rows, function (row) {
      row.dispose();
    });

    self.rows = self.collection.map(function (model) {
      var row = new self.row({
        parent: self,
        columns: self.columns,
        model: model
      });

      return row;
    });

    return self.render();
  },

  /**
     Renders all the rows inside this body.
  */
  render: function () {
    var self = this;
    self.$el.empty();

    _.each(self.rows, function (row) {
      self.$el.append(row.render().$el);
    });

    return this;
  }

});
