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
