/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/
describe("A Column", function () {

  it("throws TypeError when initialized without a cell", function () {
    expect(function () {
      new Backgrid.Column({
        name: "name"
      });
    }).toThrow(new TypeError("'cell' is required"));
  });

  it("throws TypeError when initialized without a name", function () {
    expect(function () {
      new Backgrid.Column({
        cell: 1
      });
    }).toThrow(new TypeError("'name' is required"));
  });

  it("must be initialized with at least name and cell", function () {
    expect(function () {
      new Backgrid.Column({
        name: "name",
        cell: 1
      });
    }).not.toThrow();
  });

  it("has a label the same as name if no label given", function () {
    var col = new Backgrid.Column({
      name: "name",
      cell: 1
    });

    expect(col.get("label")).toBe("name");
  });

  it("sortValue can be a string or a function", function () {
    var Col = Backgrid.Column.extend({
      sortValue: function () {}
    });

    var col = new Col({
      name: "name",
      cell: "string",
      sortValue: "sortValue"
    });

    expect(col.get("sortValue")).toBe(Col.prototype.sortValue);

    var sortValue = function () {};
    col = new Col({
      name: "name",
      cell: "string",
      sortValue: sortValue
    });

    expect(col.get("sortValue")).toBe(sortValue);
  });

  it("sortable can be a string or a boolean", function () {
    var Col = Backgrid.Column.extend({
      sortable: function () {}
    });

    var col = new Col({
      name: "name",
      cell: "string",
      sortable: "sortable"
    });

    expect(col.get("sortable")).toBe(Col.prototype.sortable);

    col = new Col({
      name: "name",
      cell: "string",
      sortable: false
    });

    expect(col.get("sortable")).toBe(false);
  });

  it("editable can be a string or a boolean", function () {
    var Col = Backgrid.Column.extend({
      editable: function () {}
    });

    var col = new Col({
      name: "name",
      cell: "string",
      editable: "editable"
    });

    expect(col.get("editable")).toBe(Col.prototype.editable);

    col = new Col({
      name: "name",
      cell: "string",
      editable: false
    });

    expect(col.get("editable")).toBe(false);
  });

  it("renderable can be a string or a boolean", function () {
    var Col = Backgrid.Column.extend({
      renderable: function () {}
    });

    var col = new Col({
      name: "name",
      cell: "string",
      renderable: "renderable"
    });

    expect(col.get("renderable")).toBe(Col.prototype.renderable);

    col = new Col({
      name: "name",
      cell: "string",
      renderable: false
    });

    expect(col.get("renderable")).toBe(false);
  });

});

describe("A Columns", function () {

  it("is a Backbone.Collection of Column objects", function () {
    expect(new Backgrid.Columns().model).toBe(Backgrid.Column);
  });

});
