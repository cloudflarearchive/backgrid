var ExampleView = Backbone.View.extend({

  initialize: function (options) {

    var Book = Backbone.Model.extend();

    var Books = Backbone.Collection.extend({
      model: Book
    });

    this.books = new Books([{
      title: "Alice in Wonderland",
      year: 1865,
      price: 19.95
    }, {
      title: "1984",
      year: 1934,
      price: 25.00
    }, {
      title: "Catcher in the Rye",
      year: 1951,
      price: 17.95
    }, {
      title: "Oliver Twist",
      year: 1839,
      price: 3000
    }]);

    this.columns = [{
      name: "title",
      label: "Title",
      cell: "string"
    }, {
      name: "year",
      label: "Year",
      cell: new Backgrid.IntegerCell({ orderSeparator: '' })
    }, {
      name: "price",
      label: "Price",
      cell: "number"
    }];

  },

  example2: function () {
    var bookGrid = new Backgrid.Grid({
      className: "table table-striped table-bordered table-condensed",
      columns: this.columns,
      collection: this.books
    });
    return bookGrid;
  },

  render: function (id) {
    return this[id]().render();
  }
});
