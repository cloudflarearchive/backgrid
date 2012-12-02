(function(QUnit, $) {
  'use strict';

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
    },

    teardown: function() {
      delete this.columns;
      delete this.books;
      delete this.body;
    }
  });

  QUnit.module('Backgrid.Grid', new Environment());

  QUnit.test('Initialization',

  function() {

    var grid = new Backgrid.Grid({
      columns: this.columns,
      collection: this.books
    });

    $('#qunit-fixture').append(grid.render().$el);

    console.log(grid.el);

    ok($('#qunit-fixture').children().first()[0].isEqualNode($("<table>" + "<thead>" + +"<tr><th><a class='backgrid-ascending'>Title</a></th><th><a class='backgrid-ascending'>Year</a></th></tr>" + "</thead>" + "<tbody>" + "<tr><td>Alice in Wonderland</td><td>1865</td></tr>" + "<tr><td>1984</td><td>1934</td></tr>" + "</tbody>" + "</table>")[0]));

  });

}(QUnit, jQuery));
