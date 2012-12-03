/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/**
   Grid represents a data grid that has a header, body and an optional footer.

   By default, a Grid treats each model in a collection as a row, and each
   attribute in a model as a column. To render a grid you must provide a list of
   column metadata and a collection to the Grid constructor. Just like any
   Backbone.View class, the grid is rendered as a DOM node fragment when you
   call render().

       @example
       var grid = Backgrid.Grid({
         columns: [{ name: "id", label: "ID", type: "string" },
          // ...
         ],
         collections: books
       });

       $("#table-container").append(grid.render().el);

   Optionally, if you want to customize the rendering of the grid's header and
   footer, you may choose to extend Backgrid.Header and Backgrid.Footer, and
   then supply that class or an instance of that class to the Grid constructor.
   See the documentation for Header and Footer for further details.

       @example
       var grid = Backgrid.Grid({
         columns: [{ name: "id", label: "ID", type: "string" }],
         collections: books,
         header: Backgrid.Header.extend({
              //...
         }),
         footer: Backgrid.Paginator
       });

   Finally, if you want to override how the rows are rendered in the table body,
   you can supply a Body subclass as the `body` attribute that uses a different
   Row class.

   @class Backgrid.Grid
   @extends Backbone.View

   See:

   - Backgrid.Column
   - Backgrid.Header
   - Backgrid.Body
   - Backgrid.Row
   - Backgrid.Footer
*/
var Grid = Backgrid.Grid = Backbone.View.extend({

  /** @property */
  tagName: "table",

  /** @property */
  className: "backgrid",

  /**
     Initializes the a Grid instance.

     @param {Object} options
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns Column metadata.
     @param {Backbone.Collection} options.collection The collection of tabular model data to display.
     @param {Backgrid.Header} [options.header=Backgrid.Header] An optional Header class to override the default.
     @param {Backgrid.Body} [options.body=Backgrid.Body] An optional Body class to override the default.
     @param {Backgrid.Footer} [options.footer=Backgrid.Footer] An optional Footer class.
   */
  initialize: function (options) {
    this.columns = options.columns;

    // Convert the list of column objects here first so the subviews don't have
    // to.
    if (!(this.columns instanceof Backbone.Collection)) {
      this.columns = new Backgrid.Columns(this.columns);
    }

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
    this.columns.off(null, null, this);
    this.header.off(null, null, this);
    this.header.dispose();
    this.body.off(null, null, this);
    this.body.dispose();
    if (this.footer) {
      this.footer.off(null, null, this);
      this.footer.dispose();
    }
    return Backbone.View.prototype.dispose.apply(this, arguments);
  },

  /**
     Sorts the rows. Delegates to Backgrid.Body#sort.

     @param {function(*, *)} comparator A 2-argument function suitable for
     [Backbone.Collection#sort](http://backbonejs.org/#Collection-sort).
   */
  sort: function (comparator) {
    return this.body.sort(comparator);
  },

  /**
     Delegates to Backgrid.Body#insertRow.
   */
  insertRow: function (model, collection, options) {
    return this.body.insertRow(model, collection, options);
  },

  /**
     Delegates to Backgrid.Body#removeRow.
   */
  removeRow: function (model, collection, options) {
    return this.body.removeRow(model, collection, options);
  },

  /**
     Renders the grid's header, then footer, then finally the body.
   */
  render: function () {
    this.$el.empty();

    this.$el.append(this.header.render().$el);

    if (this.footer) {
      this.$el.append(this.footer.render().$el);
    }

    this.$el.append(this.body.render().$el);

    /**
       Backbone event. Fired when the grid has been successfully rendered.

       @event rendered
     */
    this.trigger("rendered");

    return this;
  }

});
