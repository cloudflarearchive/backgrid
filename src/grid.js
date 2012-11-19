/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

var Grid = Backgrid.Grid = Backbone.View.extend({

  tagName: "table",

  className: "backgrid",

  initialize: function (options) {
    this.columns = options.columns;

    this.header = options.header || Header;
    this.header = new this.header({
      parent: this,
      columns: this.columns,
      collection: this.collection
    });

    this.body = options.body || Body;
    this.body = new this.body({
      parent: this,
      columns: this.columns,
      collection: this.collection
    });

    this.footer = options.footer || undefined;
    if (this.footer) {
      this.footer = new this.footer({
        parent: this,
        columns: this.columns,
        collection: this.collection
      });
    }
  },

  dispose: function () {
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

  sort: function (comparator) {
    this.body.sort(comparator);
  },

  render: function () {
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
