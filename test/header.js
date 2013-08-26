/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/
describe("A HeaderCell", function () {

  var col;
  var cell;
  beforeEach(function () {
    col = new Backbone.Collection([{id: 2}, {id: 1}, {id: 3}]);

    cell = new Backgrid.HeaderCell({
      column: {
        name: "id",
        cell: "integer"
      },
      collection: col
    });

    cell.render();
  });

  it("renders a table header cell with an anchor (sortable) or span (non-sortable) wrapping the label text and an optional sort caret", function () {
    expect(cell.el.tagName).toBe("TH");
    expect(cell.$el.find("a").text()).toBe("id");
    expect(cell.$el.find(".sort-caret").length).toBe(1);

    cell.column.set("sortable", false);
    cell.render();
    expect(cell.el.tagName).toBe("TH");
    expect(cell.$el.find("span").text()).toBe("id");
    expect(cell.$el.find(".sort-caret").length).toBe(0);
  });

  it("will rerender with the column name and/or label changes", function () {
    expect(cell.$el.find("a").text(), "id");
    expect(cell.$el.hasClass("id"), true);

    cell.column.set("name", "name");
    expect(cell.$el.find("name"), true);
    expect(cell.$el.hasClass("name"), true);
    
    cell.column.set("label", "Name");
    expect(cell.$el.find("a").text(), "Name");
    expect(cell.$el.hasClass("Name"), true);
  });

  it("will put a class indicating the sorting direction if `direction` is set in the column", function () {
    cell = new Backgrid.HeaderCell({
      column: {
        name: "id",
        cell: "integer",
        direction: "descending"
      },
      collection: col
    });

    cell.render();

    expect(cell.el.tagName).toBe("TH");
    expect(cell.$el.find("a").text()).toBe("id");
    expect(cell.$el.find(".sort-caret").length).toBe(1);
    expect(cell.$el.hasClass("descending")).toBe(true);
  });

  it("triggers `backgrid:sort` with the column and direction set to \"ascending\" upon clicking the sort caret once", function () {
    var column, direction;
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir});
    cell.$el.find("a").click();
    expect(column).toBe(cell.column);
    expect(direction).toBe("ascending");
  });

  it("triggers `backgrid:sort` with the column and direction set to \"descending\" upon clicking the sort caret twice", function () {
    var column, direction;
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir});
    cell.$el.find("a").click().click();
    expect(column).toBe(cell.column);
    expect(direction).toBe("descending");
  });

  it("triggers `backgrid:sort` with the column and direction set to `null` upon clicking the sort caret thrice", function () {
    var column, direction;
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir});
    cell.$el.find("a").click().click().click()
    expect(column).toBe(cell.column);
    expect(direction).toBeNull();
  });

  it("with `sortType` set to `toggle`, triggers `backgrid:sort` with the column and direction set to \"ascending\" upon clicking the sort caret once", function () {
    var column, direction;
    cell.column.set("sortType", "toggle");
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir});
    cell.$el.find("a").click();
    expect(column).toBe(cell.column);
    expect(direction).toBe("ascending");
  });

  it("with `sortType` set to `toggle`, triggers `backgrid:sort` with the column and direction set to \"descending\" upon clicking the sort caret once", function () {
    var column, direction;
    cell.column.set("sortType", "toggle");
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir});
    cell.$el.find("a").click().click();
    expect(column).toBe(cell.column);
    expect(direction).toBe("descending");
  });

  it("with `sortType` set to `toggle`, triggers `backgrid:sort` with the column and direction set to \"ascending\" upon clicking the sort caret thrice", function () {
    var column, direction;
    cell.column.set("sortType", "toggle");
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir});
    cell.$el.find("a").click().click().click();
    expect(column).toBe(cell.column);
    expect(direction).toBe("ascending");
  });

});

describe("A HeaderRow", function () {

  var Book = Backbone.Model.extend({});

  var Books = Backbone.Collection.extend({
    model: Book
  });

  var books;
  var row;

  beforeEach(function () {

    books = new Books([{
      title: "Alice's Adventures in Wonderland",
      year: 1865
    }, {
      title: "A Tale of Two Cities",
      year: 1859
    }, {
      title: "The Catcher in the Rye",
      year: 1951
    }]);

    row = new Backgrid.HeaderRow({
      columns: [{
        name: "name",
        cell: "string"
      }, {
        name: "year",
        cell: "integer"
      }],
      collection: books
    });

    row.render();
  });

  it("renders a row of header cells", function () {
    expect(row.$el[0].tagName).toBe("TR");
    expect(row.$el[0].innerHTML).toBe('<th class="editable sortable renderable name"><a>name<b class="sort-caret"></b></a></th>' +
                                      '<th class="editable sortable renderable year"><a>year<b class="sort-caret"></b></a></th>');
  });

  it("resets the carets of the non-sorting columns", function () {
    row.$el.find("a").eq(0).click(); // ascending
    row.$el.find("a").eq(1).click(); // ascending, resets the previous
    expect(row.$el.find("a").eq(0).hasClass("ascending")).toBe(false);
    expect(row.$el.find("a").eq(1).hasClass("ascending")).toBe(false);
  });

  it("inserts or removes a cell if a column is added or removed", function () {
    row.columns.add({name: "price", cell: "number"});
    expect(row.$el.children().length).toBe(3);
    expect(row.$el.children().last()[0].outerHTML).toBe('<th class="editable sortable renderable price"><a>price<b class="sort-caret"></b></a></th>');

    row.columns.add({name: "publisher", cell: "string", renderable: false});
    expect(row.$el.children().length).toBe(4);
    expect(row.$el.children().last().find("a").text()).toBe("publisher");
    expect(row.$el.children().last().hasClass("renderable")).toBe(false);

    row.columns.remove(row.columns.first());
    expect(row.$el.children().length).toBe(3);
    expect(row.$el.children().first()[0].outerHTML).toBe('<th class="editable sortable renderable year"><a>year<b class="sort-caret"></b></a></th>');
  });

});

describe("A Header", function () {

  var Book = Backbone.Model.extend({});

  var Books = Backbone.Collection.extend({
    model: Book
  });

  var books;
  var head;

  beforeEach(function () {

    books = new Books([{
      title: "Alice's Adventures in Wonderland",
      year: 1865
    }, {
      title: "A Tale of Two Cities",
      year: 1859
    }, {
      title: "The Catcher in the Rye",
      year: 1951
    }]);

    head = new Backgrid.Header({
      columns: [{
        name: "name",
        cell: "string"
      }, {
        name: "year",
        cell: "integer"
      }],
      collection: books
    });

    head.render();
  });

  it("renders a header with a row of header cells", function () {
    expect(head.$el[0].tagName).toBe("THEAD");
    expect(head.$el[0].innerHTML).toBe('<tr><th class="editable sortable renderable name"><a>name<b class="sort-caret"></b></a></th>' +
                                      '<th class="editable sortable renderable year"><a>year<b class="sort-caret"></b></a></th></tr>');
  });

});
