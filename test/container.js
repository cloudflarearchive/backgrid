/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/
describe("A Container", function () {
  var Book = Backbone.Model.extend({});
  var Books = Backbone.Collection.extend({
    model: Book
  });

  var books;
  var grid;
  var container;

  beforeEach(function () {
    books = new Books([{
      id: 1,
      title: "Alice's Adventures in Wonderland"
    }, {
      id: 2,
      title: "A Tale of Two Cities"
    }, {
      id: 3,
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

    container = new Backgrid.Container({
      grid: grid
    });
  });

  it("throws if the grid isn't passed as an option", function () {
    expect(function(){
      new Backgrid.Container({});
    }).toThrow("grid is a mandatory options for Backgrid.Container");
  });

  it("renders the grid within it when rendered", function () {
    spyOn(grid, "trigger");
    spyOn(grid.header, "render").andCallThrough();
    spyOn(grid.footer, "render").andCallThrough();
    spyOn(grid.body, "render").andCallThrough();

    container.render();

    expect(grid.el.tagName).toBe("TABLE");
    expect(grid.header.render.calls.length).toBe(1);
    expect(grid.footer.render.calls.length).toBe(1);
    expect(grid.body.render.calls.length).toBe(1);
    expect(grid.trigger.calls.length).toBe(1);
    expect(grid.trigger).toHaveBeenCalledWith("backgrid:rendered", grid);
  });

});
