(function() {

  function Environment() {}

  _.extend(Environment.prototype, {

    setup: function() {
      this.columns = [{
        type: 'string',
        name: 'title',
        label: 'Title'
      }, {
        type: 'number',
        name: 'year',
        label: 'Year'
      }];

      this.book = new Backbone.Model({
        title: 'Alice in Wonderland',
        year: 1865
      });

      this.row = new Backgrid.Row({
        columns: this.columns,
        model: this.book
      });
    },

    teardown: function() {
      delete this.columns;
    }
  });

  module('Backgrid.Row', new Environment());

  test('Initialization', function() {

    ok(this.row);
    strictEqual(this.row.cells[0].column.get('name'), 'title');
    strictEqual(this.row.cells[0].column.get('type'), 'string');
    strictEqual(this.row.cells[0].column.get('label'), 'Title');
    strictEqual(this.row.cells[1].column.get('name'), 'year');
    strictEqual(this.row.cells[1].column.get('type'), 'number');
    strictEqual(this.row.cells[1].column.get('label'), 'Year');
    deepEqual(this.row.cells[0].parent, this.row);
    deepEqual(this.row.cells[1].parent, this.row);
  });

  test('Rendering', function() {
    strictEqual(this.row.render(), this.row);
    ok(this.row.el instanceof HTMLTableRowElement);
    ok(this.row.el.isEqualNode($("<tr>" + "<td>Alice in Wonderland</td>" + "<td>1865</td>" + "</tr>")[0]));
  });

  test('Event handling', function() {
    this.row.render();

    this.book.set({
      title: "1984",
      year: 1934
    });

    ok(this.row.el.isEqualNode($("<tr>" + "<td>1984</td>" + "<td>1934</td>" + "</tr>")[0]));
  });

}());
