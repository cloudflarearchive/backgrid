/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/
describe("A Grid", function () {

  var Book = Backbone.Model.extend({});
  var Books = Backbone.Collection.extend({
    model: Book
  });

  var books;
  var grid;
  beforeEach(function () {
    books = new Books([{
      title: "Alice's Adventures in Wonderland"
    }, {
      title: "A Tale of Two Cities"
    }, {
      title: "The Catcher in the Rye"
    }]);

    grid = new Backgrid.Grid({
      columns: [{
        name: "title",
        cell: "string"
      }],
      collection: books,
      footer: Backgrid.Footer
    });
  });

  it("throws TypeError if a list of column definition is not given", function () {
    expect(function () {
      new Backgrid.Grid({
        collection: books
      });
    }).toThrow(new TypeError("'columns' is required"));
  });

  it("throws TypeError if a collection is not given", function () {
    expect(function () {
      new Backgrid.Grid({
        columns: [{
          name: "title",
          cell: "string"
        }]
      });
    }).toThrow(new TypeError("'collection' is required"));
  });

  it("renders a table with a header, body and an optional footer section", function () {

    spyOn(grid, "trigger");
    spyOn(grid.header, "render").andCallThrough();
    spyOn(grid.footer, "render").andCallThrough();
    spyOn(grid.body, "render").andCallThrough();

    grid.render();

    expect(grid.el.tagName).toBe("TABLE");
    expect(grid.header.render.calls.length).toBe(1);
    expect(grid.footer.render.calls.length).toBe(1);
    expect(grid.body.render.calls.length).toBe(1);
    expect(grid.trigger.calls.length).toBe(1);
    expect(grid.trigger).toHaveBeenCalledWith("rendered");
  });
});
