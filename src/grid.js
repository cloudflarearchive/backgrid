/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/**
   Grid represents a data grid that has a header, body and an optional footer.

   By default, a Grid treats each model in a collection as a row, and each
   attribute in a model as a column. To render a grid you must provide a list of
   column metadata and a collection to the Grid constructor. Just like any
   Backbone.View class, the grid is rendered as a DOM node fragment when you
   call render().

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

  /** @property */
  header: Header,

  /** @property */
  body: Body,

  /** @property */
  footer: null,

  /**
     Initializes a Grid instance.

     @param {Object} options
     @param {Backbone.Collection.<Backgrid.Column>|Array.<Backgrid.Column>|Array.<Object>} options.columns Column metadata.
     @param {Backbone.Collection} options.collection The collection of tabular model data to display.
     @param {Backgrid.Header} [options.header=Backgrid.Header] An optional Header class to override the default.
     @param {Backgrid.Body} [options.body=Backgrid.Body] An optional Body class to override the default.
     @param {Backgrid.Row} [options.row=Backgrid.Row] An optional Row class to override the default.
     @param {Backgrid.Footer} [options.footer=Backgrid.Footer] An optional Footer class.
   */
  initialize: function (options) {
    requireOptions(options, ["columns", "collection"]);

    // Convert the list of column objects here first so the subviews don't have
    // to.
    if (!(options.columns instanceof Backbone.Collection)) {
      options.columns = new Columns(options.columns);
    }
    this.columns = options.columns;

    this.header = options.header || this.header;
    this.header = new this.header(options);

    this.body = options.body || this.body;
    this.body = new this.body(options);

    this.footer = options.footer || this.footer;
    if (this.footer) {
      this.footer = new this.footer(options);
    }

    this.listenTo(this.columns, "reset", function () {
      this.header = new (this.header.remove().constructor)(options);
      this.body = new (this.body.remove().constructor)(options);
      if (this.footer) this.footer = new (this.footer.remove().constructor)(options);
      this.render();
    });
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
     Delegates to Backgrid.Columns#add for adding a column. Subviews can listen
     to the `add` event from their internal `columns` if rerendering needs to
     happen.

     @param {Object} [options] Options for `Backgrid.Columns#add`.
     @param {boolean} [options.render=true] Whether to render the column
     immediately after insertion.

     @chainable
   */
  insertColumn: function (column, options) {
    options = options || {render: true};
    this.columns.add(column, options);
    return this;
  },

  /**
     Delegates to Backgrid.Columns#remove for removing a column. Subviews can
     listen to the `remove` event from the internal `columns` if rerendering
     needs to happen.

     @param {Object} [options] Options for `Backgrid.Columns#remove`.

     @chainable
   */
  removeColumn: function (column, options) {
    this.columns.remove(column, options);
    return this;
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
  },

  /**
     Clean up this grid and its subviews.

     @chainable
   */
  remove: function () {
    this.header.remove.apply(this.header, arguments);
    this.body.remove.apply(this.body, arguments);
    this.footer && this.footer.remove.apply(this.footer, arguments);
    return Backbone.View.prototype.remove.apply(this, arguments);
  }

});
