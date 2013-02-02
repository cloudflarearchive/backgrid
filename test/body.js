/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/
describe("A Body", function () {

  it("throws TypeError if columns is not given", function () {
    expect(function () {
      new Backgrid.Body({
        collection: new Backbone.Collection()
      });
    }).toThrow(new TypeError("'columns' is required"));
  });

  it("throws TypeError if collection is not given", function () {
    expect(function () {
      new Backgrid.Body({
        columns: [{
          name: "name",
          cell: "string"
        }]
      });
    }).toThrow(new TypeError("'collection' is required"));
  });

  var Book = Backbone.Model.extend({});
  var Books = Backbone.Collection.extend({
    model: Book
  });

  var books;
  var body;
  beforeEach(function () {

    books = new Books([{
      title: "Alice's Adventures in Wonderland"
    }, {
      title: "A Tale of Two Cities"
    }, {
      title: "The Catcher in the Rye"
    }]);

    body = new Backgrid.Body({
      columns: [{
        name: "title",
        cell: "string"
      }],
      collection: books
    });

    body.render();
  });

  it("renders table rows using the given column definitions and collection", function () {
    expect(body.el.tagName).toBe("TBODY");
    var $trs = body.$el.children();
    expect($trs.length).toBe(3);
    expect(body.el.innerHTML).toBe('<tr><td class="string-cell">Alice\'s Adventures in Wonderland</td></tr>' +
                                   '<tr><td class="string-cell">A Tale of Two Cities</td></tr>' +
                                   '<tr><td class="string-cell">The Catcher in the Rye</td></tr>');
  });

  it("will render a new row if a new model is added to its collection", function () {
    body.collection.add({
      title: "The Great Gatsby"
    });
    var $trs = body.$el.children();
    expect($trs.length).toBe(4);
    expect($trs[3].outerHTML).toBe('<tr><td class="string-cell">The Great Gatsby</td></tr>');
  });

  it("will render a new row by calling insertRow directly with a new model", function () {
    books = new Books();

    body = new Backgrid.Body({
      columns: [{
        name: "title",
        cell: "string"
      }],
      collection: books
    });

    body.render();

    body.insertRow({
      title: "The Great Gatsby"
    });

    var $trs = body.$el.children();
    expect($trs.length).toBe(1);
    expect($trs[0].outerHTML).toBe('<tr><td class="string-cell">The Great Gatsby</td></tr>');
  });

  it("will remove a row from the DOM if a model is removed from its collection", function () {
    var twocities = body.collection.at(1);
    body.collection.remove(twocities);
    var $trs = body.$el.children();
    expect($trs.length).toBe(2);
    expect(body.el.innerHTML).toBe('<tr><td class="string-cell">Alice\'s Adventures in Wonderland</td></tr>' +
                                   '<tr><td class="string-cell">The Catcher in the Rye</td></tr>');
  });

  it("will remove a row from the DOM is removeRow is called directly with a model", function () {
    var twocities = body.collection.at(1);
    body.removeRow(twocities);
    var $trs = body.$el.children();
    expect($trs.length).toBe(2);
    expect(body.el.innerHTML).toBe('<tr><td class="string-cell">Alice\'s Adventures in Wonderland</td></tr>' +
                                   '<tr><td class="string-cell">The Catcher in the Rye</td></tr>');
  });

  it("refresh its rendering if its collection is reset", function () {
    body.collection.reset([{
      title: "Oliver Twist"
    }]);
    var $trs = body.$el.children();
    expect($trs.length).toBe(1);
    expect(body.el.innerHTML).toBe('<tr><td class="string-cell">Oliver Twist</td></tr>');
  });

});
