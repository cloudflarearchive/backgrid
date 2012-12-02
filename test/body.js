(function() {

  var Book = Backbone.Model.extend({});

  var Library = Backbone.Collection.extend({
    model: Book
  });

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

      this.books = new Library([{
        title: 'Alice in Wonderland',
        year: 1865
      }, {
        title: '1984',
        year: 1934
      }]);

      this.body = new Backgrid.Body({
        columns: this.columns,
        collection: this.books
      });
    },

    teardown: function() {
      delete this.columns;
      delete this.books;
      delete this.body;
    }
  });

  module('Backgrid.Body', new Environment());

  test('Initialization', function() {
    ok(this.body.rows.length == 2);
    strictEqual(this.body.rows.length, this.body.collection.length);
    strictEqual(this.body.rows.length, 2);
    strictEqual(this.body.rows[0].model, this.books.at(0));
    strictEqual(this.body.rows[1].model, this.books.at(1));
    strictEqual(this.body.rows[0].parent, this.body.rows[1].parent);
    strictEqual(this.body.rows[0].parent, this.body);
  });

  test('Rendering', function() {
    strictEqual(this.body.render(), this.body);
    ok(this.body.render().el.isEqualNode($('<tbody>' + '<tr>' + '<td>Alice in Wonderland</td>' + '<td>1865</td></tr>' + '<tr>' + '<td>1984</td>' + '<td>1934</td>' + '</tr>' + '</tbody>')[0]));
  });

  test('Adding and removing rows',

  function() {
    this.body.render();

    // adding multiple to the end of the collection
    this.books.add([{
      title: 'Catcher in the Rye',
      year: 1951
    }, {
      title: 'Oliver Twist',
      year: 1839
    }]);

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));
    ok(this.body.rows[2].el.isEqualNode($('<tr><td>Catcher in the Rye</td><td>1951</td></tr>')[0]));
    ok(this.body.rows[3].el.isEqualNode($('<tr><td>Oliver Twist</td><td>1839</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '<tr><td>Catcher in the Rye</td><td>1951</td></tr>' + '<tr><td>Oliver Twist</td><td>1839</td></tr>' + '</tbody>')[0]));

    // adding 1 to the front of the collection
    this.books.add({
      title: 'A Tale of Two Cities',
      year: 1859
    }, {
      at: 0
    });

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>A Tale of Two Cities</td><td>1859</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));
    ok(this.body.rows[2].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));
    ok(this.body.rows[3].el.isEqualNode($('<tr><td>Catcher in the Rye</td><td>1951</td></tr>')[0]));
    ok(this.body.rows[4].el.isEqualNode($('<tr><td>Oliver Twist</td><td>1839</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>A Tale of Two Cities</td><td>1859</td></tr>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '<tr><td>Catcher in the Rye</td><td>1951</td></tr>' + '<tr><td>Oliver Twist</td><td>1839</td></tr>' + '</tbody>')[0]));

    // adding 1 to the end of the body directly
    this.body.insertRow({
      title: 'King Lear',
      year: 1606
    });

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>A Tale of Two Cities</td><td>1859</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));
    ok(this.body.rows[2].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));
    ok(this.body.rows[3].el.isEqualNode($('<tr><td>Catcher in the Rye</td><td>1951</td></tr>')[0]));
    ok(this.body.rows[4].el.isEqualNode($('<tr><td>Oliver Twist</td><td>1839</td></tr>')[0]));
    ok(this.body.rows[5].el.isEqualNode($('<tr><td>King Lear</td><td>1606</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>A Tale of Two Cities</td><td>1859</td></tr>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '<tr><td>Catcher in the Rye</td><td>1951</td></tr>' + '<tr><td>Oliver Twist</td><td>1839</td></tr>' + '<tr><td>King Lear</td><td>1606</td></tr>' + '</tbody>')[0]));

    // adding multiple to the front of the body directly
    this.body.insertRow([{
      title: 'A Christmas Carol',
      year: 1843
    }, {
      title: 'Great Expectations',
      year: 1861
    }], {
      at: 2
    });

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>A Tale of Two Cities</td><td>1859</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));
    ok(this.body.rows[2].el.isEqualNode($('<tr><td>A Christmas Carol</td><td>1843</td></tr>')[0]));
    ok(this.body.rows[3].el.isEqualNode($('<tr><td>Great Expectations</td><td>1861</td></tr>')[0]));
    ok(this.body.rows[4].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));
    ok(this.body.rows[5].el.isEqualNode($('<tr><td>Catcher in the Rye</td><td>1951</td></tr>')[0]));
    ok(this.body.rows[6].el.isEqualNode($('<tr><td>Oliver Twist</td><td>1839</td></tr>')[0]));
    ok(this.body.rows[7].el.isEqualNode($('<tr><td>King Lear</td><td>1606</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>A Tale of Two Cities</td><td>1859</td></tr>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '<tr><td>A Christmas Carol</td><td>1843</td></tr>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '<tr><td>Catcher in the Rye</td><td>1951</td></tr>' + '<tr><td>Oliver Twist</td><td>1839</td></tr>' + '<tr><td>King Lear</td><td>1606</td></tr>' + '</tbody>')[0]));

    // removing 1 from the front of the collection
    this.books.remove(this.books.at(0));

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>A Christmas Carol</td><td>1843</td></tr>')[0]));
    ok(this.body.rows[2].el.isEqualNode($('<tr><td>Great Expectations</td><td>1861</td></tr>')[0]));
    ok(this.body.rows[3].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));
    ok(this.body.rows[4].el.isEqualNode($('<tr><td>Catcher in the Rye</td><td>1951</td></tr>')[0]));
    ok(this.body.rows[5].el.isEqualNode($('<tr><td>Oliver Twist</td><td>1839</td></tr>')[0]));
    ok(this.body.rows[6].el.isEqualNode($('<tr><td>King Lear</td><td>1606</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '<tr><td>A Christmas Carol</td><td>1843</td></tr>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '<tr><td>Catcher in the Rye</td><td>1951</td></tr>' + '<tr><td>Oliver Twist</td><td>1839</td></tr>' + '<tr><td>King Lear</td><td>1606</td></tr>' + '</tbody>')[0]));

    // removeing multiple from the end of the collection
    this.books.remove([
    this.books.last(),
    this.books.at(this.books.length - 2)]);

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>A Christmas Carol</td><td>1843</td></tr>')[0]));
    ok(this.body.rows[2].el.isEqualNode($('<tr><td>Great Expectations</td><td>1861</td></tr>')[0]));
    ok(this.body.rows[3].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));
    ok(this.body.rows[4].el.isEqualNode($('<tr><td>Catcher in the Rye</td><td>1951</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '<tr><td>A Christmas Carol</td><td>1843</td></tr>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '<tr><td>Catcher in the Rye</td><td>1951</td></tr>' + '</tbody>')[0]));

    // removing 1 from the end directly from the body
    this.body.removeRow(this.body.collection.last());

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>A Christmas Carol</td><td>1843</td></tr>')[0]));
    ok(this.body.rows[2].el.isEqualNode($('<tr><td>Great Expectations</td><td>1861</td></tr>')[0]));
    ok(this.body.rows[3].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '<tr><td>A Christmas Carol</td><td>1843</td></tr>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '</tbody>')[0]));

    // removing multiple from the front directly from the body
    this.body.removeRow([
    this.body.collection.at(0),
    this.body.collection.at(1)]);

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>Great Expectations</td><td>1861</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '</tbody>')[0]));

    // adding a row without rendering
    this.body.insertRow({
      title: 'Alice in Wonderland',
      year: 1865
    }, {
      render: false
    });

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>Great Expectations</td><td>1861</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));
    ok(this.body.rows[2].el.isEqualNode($('<tr></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '</tbody>')[0]));

    ok(this.body.refresh().el.isEqualNode($('<tbody>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '</tbody>')[0]));

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>Great Expectations</td><td>1861</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>1984</td><td>1934</td></tr>')[0]));
    ok(this.body.rows[2].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '</tbody>')[0]));

    // TODO: removing a row without rendering
    this.body.removeRow(this.body.collection.at(1), {
      render: false
    });

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>Great Expectations</td><td>1861</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>1984</td><td>1934</td></tr>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '</tbody>')[0]));

    this.body.refresh();

    ok(this.body.rows[0].el.isEqualNode($('<tr><td>Great Expectations</td><td>1861</td></tr>')[0]));
    ok(this.body.rows[1].el.isEqualNode($('<tr><td>Alice in Wonderland</td><td>1865</td></tr>')[0]));

    ok(this.body.el.isEqualNode($('<tbody>' + '<tr><td>Great Expectations</td><td>1861</td></tr>' + '<tr><td>Alice in Wonderland</td><td>1865</td></tr>' + '</tbody>')[0]));
  });

}());
