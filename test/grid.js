/*
  backgrid
  http://github.com/cloudflare/backgrid

  Copyright (c) 2013-present Cloudflare, Inc. and contributors
  Licensed under the MIT license.
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

  it("renders a table with a body, optional header, and an optional footer section", function () {
    spyOn(grid, "trigger");
    spyOn(grid.header, "render").and.callThrough();
    spyOn(grid.footer, "render").and.callThrough();
    spyOn(grid.body, "render").and.callThrough();

    grid.render();

    expect(grid.el.tagName).toBe("TABLE");
    expect(grid.header.render.calls.count()).toBe(1);
    expect(grid.footer.render.calls.count()).toBe(1);
    expect(grid.body.render.calls.count()).toBe(1);
    expect(grid.trigger.calls.count()).toBe(1);
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
  
  it("will render a table with a caption element", function () {
    var caption = "Table of data"
    grid = new Backgrid.Grid({
      columns: [{
        name: "title",
        cell: "string"
      }],
      collection: books,
      caption: caption,
    });
    
    grid.render();
    
    expect($(grid.el).find("caption"));
    expect($(grid.el).find("caption").text()).toBe(caption);
  });

  it("will clean up all its decendant views when remove is called", function () {
    expect(grid.remove().constructor).toBe(Backgrid.Grid);
  });

  it("will delegate insertRow, removeRow and sort to the body", function () {
    spyOn(grid.body, "insertRow").and.callThrough();
    spyOn(grid.body, "removeRow").and.callThrough();
    spyOn(grid.body, "sort").and.callThrough();
    grid.insertRow({});
    expect(grid.body.insertRow).toHaveBeenCalledWith({});
    var last = grid.collection.last();
    grid.removeRow(last);
    expect(grid.body.removeRow).toHaveBeenCalledWith(last);
    grid.sort("title", "descending");
    expect(grid.body.sort).toHaveBeenCalledWith("title", "descending");
  });

  it("will delegate to columns.add and columns.remove from insertColumn and removeColumn", function () {
    spyOn(grid.columns, "add").and.callThrough();
    spyOn(grid.columns, "remove").and.callThrough();
    grid.insertColumn({name: "id", cell: "integer"});
    expect(grid.columns.add).toHaveBeenCalledWith({name: "id", cell: "integer"});
    var col = grid.columns.last();
    grid.removeColumn(col);
    expect(grid.columns.remove).toHaveBeenCalledWith(col);
  });

  it("will refresh on columns reset", function () {
    grid.render();
    grid.columns.reset([{
      name: "id",
      cell: "integer"
    }]);

    var thead = grid.el.childNodes[0];
    expect(thead.tagName == "THEAD").toBe(true);
    expect($(thead).find("tr").length).toBe(1);
    expect($(thead).find("tr > th.editable.sortable.renderable.id > button > span.sort-caret").length).toBe(1);
    expect($(thead).find("tr > th.editable.sortable.renderable.id > button").text()).toBe("id");

    var tfoot = grid.el.childNodes[1];
    expect(tfoot.tagName == "TFOOT").toBe(true);
    expect(tfoot.childNodes.length).toBe(0);

    var tbody = grid.el.lastChild;
    expect(tbody.tagName == "TBODY").toBe(true);
    expect($(tbody).find("tr").length).toBe(3);
    expect($(tbody).find("tr:nth-child(1) > td.integer-cell.editable.sortable.renderable").length).toBe(1);
    expect($(tbody).find("tr:nth-child(1) > td.integer-cell.editable.sortable.renderable").text()).toBe("1");
    expect($(tbody).find("tr:nth-child(2) > td.integer-cell.editable.sortable.renderable").length).toBe(1);
    expect($(tbody).find("tr:nth-child(2) > td.integer-cell.editable.sortable.renderable").text()).toBe("2");
    expect($(tbody).find("tr:nth-child(3) > td.integer-cell.editable.sortable.renderable").length).toBe(1);
    expect($(tbody).find("tr:nth-child(3) > td.integer-cell.editable.sortable.renderable").text()).toBe("3");
  });

  it("will inherit the constructor's columns", function () {
    var columns = [{
      name: "title",
      cell: "string"
    }];

    var CustomGrid = Backgrid.Grid.extend({
      columns: columns
      , className: 'backgrid customBackgrid'
    });

    var customGrid = new CustomGrid({collection: books});

    expect(customGrid.columns.models.length).toBe(1);
    expect(customGrid.columns.at(0).get("name")).toBe("title");
  });
});
