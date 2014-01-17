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

  it("renders a table header cell with the label text and an optional anchor with sort-caret", function () {
    expect(cell.el.tagName).toBe("TH");
    expect(cell.$el.find("a").text()).toBe("id");
    expect(cell.$el.find(".sort-caret").length).toBe(1);

    cell.column.set("sortable", false);
    cell.render();
    expect(cell.el.tagName).toBe("TH");
    expect(cell.$el.text()).toBe("id");
    expect(cell.$el.find(".sort-caret").length).toBe(0);
  });

  it("adds an editable, sortable and a renderable class to the cell if these column attributes are true", function () {
    var column = {
      name: "title",
      cell: "string"
    };

    cell = new Backgrid.HeaderCell({
      column: column,
      collection: col
    });

    expect(cell.$el.hasClass("editable")).toBe(true);
    expect(cell.$el.hasClass("sortable")).toBe(true);
    expect(cell.$el.hasClass("renderable")).toBe(true);

    cell.column.set("editable", false);
    expect(cell.$el.hasClass("editable")).toBe(false);

    cell.column.set("sortable", false);
    expect(cell.$el.hasClass("sortable")).toBe(false);

    cell.column.set("renderable", false);
    expect(cell.$el.hasClass("renderable")).toBe(false);

    var TrueCol = Backgrid.Column.extend({
      mySortable: function () { return true; },
      myRenderable: function () { return true; },
      myEditable: function () { return true; }
    });

    var FalseCol = Backgrid.Column.extend({
      mySortable: function () { return false; },
      myRenderable: function () { return false; },
      myEditable: function () { return false; }
    });

    column = new TrueCol({
      name: "title",
      cell: "string",
      sortable: "mySortable",
      renderable: "myRenderable",
      editable: "myEditable"
    });

    cell = new Backgrid.HeaderCell({
      column: column,
      collection: col
    });

    expect(cell.$el.hasClass("editable")).toBe(true);
    expect(cell.$el.hasClass("sortable")).toBe(true);
    expect(cell.$el.hasClass("renderable")).toBe(true);

    column = new FalseCol({
      name: "title",
      cell: "string",
      sortable: "mySortable",
      renderable: "myRenderable",
      editable: "myEditable"
    });

    cell = new Backgrid.HeaderCell({
      column: column,
      collection: col
    });

    expect(cell.$el.hasClass("editable")).toBe(false);
    expect(cell.$el.hasClass("sortable")).toBe(false);
    expect(cell.$el.hasClass("renderable")).toBe(false);

    column = new Backgrid.Column({
      name: "title",
      cell: "string",
      sortable: function () { return true; },
      editable: function () { return true; },
      renderable: function () { return true; }
    });

    cell = new Backgrid.HeaderCell({
      column: column,
      collection: col
    });

    expect(cell.$el.hasClass("editable")).toBe(true);
    expect(cell.$el.hasClass("sortable")).toBe(true);
    expect(cell.$el.hasClass("renderable")).toBe(true);
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

  it("triggers `backgrid:sort` with the column and direction set to 'ascending' if the column's direction is not set", function () {
    var column, direction;
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir; });
    cell.$el.find("a").click();
    expect(column).toBe(cell.column);
    expect(direction).toBe("ascending");
  });

  it("triggers `backgrid:sort` with the column and direction set to 'descending' if the column's direction is set to 'ascending'", function () {
    var column, direction;
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir; });
    cell.column.set("direction", "ascending");
    cell.$el.find("a").click();
    expect(column).toBe(cell.column);
    expect(direction).toBe("descending");
  });

  it("triggers `backgrid:sort` with the column and direction set to `null` if the column's direction is set to 'descending'", function () {
    var column, direction;
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir; });
    cell.column.set("direction", "descending");
    cell.$el.find("a").click();
    expect(column).toBe(cell.column);
    expect(direction).toBeNull();
  });

  it("will set the column to the correct direction when `change:direction` is triggered from the column", function () {
    cell.column.set("direction", "ascending");
    expect(cell.$el.hasClass("ascending")).toBe(true);
    cell.column.set("direction", "descending");
    expect(cell.$el.hasClass("descending")).toBe(true);
    cell.column.set("direction", null);
    expect(cell.$el.hasClass("ascending")).toBe(false);
    expect(cell.$el.hasClass("descending")).toBe(false);
  });

  it("will remove its direction CSS class if `sort` is triggered from the collection or pageableCollection#fullCollection", function () {
    cell.column.set("direction", "ascending");
    cell.collection.comparator = "id";
    cell.collection.sort();
    expect(cell.$el.hasClass("ascending")).toBe(false);
    expect(cell.$el.hasClass("descending")).toBe(false);

    col = new Backbone.PageableCollection(col.toJSON(), {
      mode: "client"
    });
    col.setSorting("id", 1);
    cell = new Backgrid.HeaderCell({
      column: {
        name: "id",
        cell: "integer"
      },
      collection: col
    });

    cell.column.set("direction", "ascending");
    cell.collection.fullCollection.comparator = "id";
    cell.collection.fullCollection.sort();
    expect(cell.$el.hasClass("ascending")).toBe(false);
    expect(cell.$el.hasClass("descending")).toBe(false);
  });

  it("with `sortType` set to `toggle`, triggers `backgrid:sort` with the column and direction set to 'ascending' if the column's direction is not set", function () {
    var column, direction;
    cell.column.set("sortType", "toggle");
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir; });
    cell.$el.find("a").click();
    expect(column).toBe(cell.column);
    expect(direction).toBe("ascending");
  });

  it("with `sortType` set to `toggle`, triggers `backgrid:sort` with the column and direction set to 'descending' if the column's direction is set to 'ascending'", function () {
    var column, direction;
    cell.column.set("sortType", "toggle");
    cell.column.set("direction", "ascending");
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir; });
    cell.$el.find("a").click();
    expect(column).toBe(cell.column);
    expect(direction).toBe("descending");
  });

  it("with `sortType` set to `toggle`, triggers `backgrid:sort` with the column and direction set to 'ascending' if the column's direction is set to 'descending'", function () {
    var column, direction;
    cell.column.set("sortType", "toggle");
    cell.column.set("direction", "descending");
    cell.collection.on("backgrid:sort", function (col, dir) { column = col; direction = dir; });
    cell.$el.find("a").click();
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
    var th1 = $(row.el.childNodes[0]);
    expect(th1.hasClass("editable")).toBe(true);
    expect(th1.hasClass("sortable")).toBe(true);
    expect(th1.hasClass("renderable")).toBe(true);
    expect(th1.hasClass("name")).toBe(true);
    expect(th1.find("a").text()).toBe("name");
    expect(th1.find("a").eq(1).is($("b", {className: "sort-caret"})));

    var th2 = $(row.el.childNodes[1]);
    expect(th2.hasClass("editable")).toBe(true);
    expect(th2.hasClass("sortable")).toBe(true);
    expect(th2.hasClass("renderable")).toBe(true);
    expect(th2.hasClass("year")).toBe(true);
    expect(th2.find("a").text()).toBe("year");
    expect(th2.find("a > b:last-child").eq(0).hasClass("sort-caret")).toBe(true);
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
    var lastTh = $(row.el.lastChild);
    expect(lastTh.hasClass("editable")).toBe(true);
    expect(lastTh.hasClass("sortable")).toBe(true);
    expect(lastTh.hasClass("renderable")).toBe(true);
    expect(lastTh.hasClass("price")).toBe(true);
    expect(lastTh.find("a").text()).toBe("price");
    expect(lastTh.find("a > b:last-child").eq(0).hasClass("sort-caret")).toBe(true);

    row.columns.add({name: "publisher", cell: "string", renderable: false});
    expect(row.$el.children().length).toBe(4);
    expect(row.$el.children().last().find("a").text()).toBe("publisher");
    expect(row.$el.children().last().hasClass("renderable")).toBe(false);

    row.columns.remove(row.columns.first());
    expect(row.$el.children().length).toBe(3);
    var firstTh = $(row.el.firstChild);
    expect(firstTh.hasClass("editable")).toBe(true);
    expect(firstTh.hasClass("sortable")).toBe(true);
    expect(firstTh.hasClass("renderable")).toBe(true);
    expect(firstTh.hasClass("year")).toBe(true);
    expect(firstTh.find("a").text()).toBe("year");
    expect(firstTh.find("a > b:last-child").eq(0).hasClass("sort-caret")).toBe(true);
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

    var th1 = $(head.row.el.childNodes[0]);
    expect(th1.hasClass("editable")).toBe(true);
    expect(th1.hasClass("sortable")).toBe(true);
    expect(th1.hasClass("renderable")).toBe(true);
    expect(th1.hasClass("name")).toBe(true);
    expect(th1.find("a").text()).toBe("name");
    expect(th1.find("a").eq(1).is($("b", {className: "sort-caret"})));

    var th2 = $(head.row.el.childNodes[1]);
    expect(th2.hasClass("editable")).toBe(true);
    expect(th2.hasClass("sortable")).toBe(true);
    expect(th2.hasClass("renderable")).toBe(true);
    expect(th2.hasClass("year")).toBe(true);
    expect(th2.find("a").text()).toBe("year");
    expect(th2.find("a > b:last-child").eq(0).hasClass("sort-caret")).toBe(true);
  });

});
