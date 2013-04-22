/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
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
    expect(grid.trigger).toHaveBeenCalledWith("backgrid:rendered", grid);
  });

  it("will render a table with the header, body, footer and row classes supplied in the constructor options", function () {

    var CustomHeader = Backgrid.Header.extend({});
    var CustomBody = Backgrid.Body.extend({});
    var CustomRow = Backgrid.Row.extend({});
    var CustomFooter = Backgrid.Footer.extend({});

    grid = new Backgrid.Grid({
      columns: [{
        name: "title",
        cell: "string"
      }],
      collection: books,
      header: CustomHeader,
      body: CustomBody,
      row: CustomRow,
      footer: CustomFooter,
      className: "class-name"
    });

    grid.render();

    expect(grid.header instanceof CustomHeader).toBe(true);
    expect(grid.body instanceof CustomBody).toBe(true);
    expect(grid.body.rows[0] instanceof CustomRow).toBe(true);
    expect(grid.footer instanceof CustomFooter).toBe(true);

    expect(grid.header.className).not.toBe("class-name");
    expect(grid.body.className).not.toBe("class-name");
    expect(grid.body.rows[0].className).not.toBe("class-name");
    expect(grid.footer.className).not.toBe("class-name");
  });

  it("will clean up all its decendant views when remove is called", function () {
    expect(grid.remove().constructor).toBe(Backgrid.Grid);
  });

  it("will refresh on columns reset", function () {
    grid.render();
    grid.columns.reset([{
      name: "id",
      cell: "integer"
    }]);
    expect(grid.el.innerHTML).toBe('<thead><tr><th><a>id<b class="sort-caret"></b></a></th></tr></thead>' +
                                   '<tfoot></tfoot>' +
                                   '<tbody><tr><td class="integer-cell">1</td></tr>' +
                                   '<tr><td class="integer-cell">2</td></tr>' +
                                   '<tr><td class="integer-cell">3</td></tr></tbody>');
  });

});
