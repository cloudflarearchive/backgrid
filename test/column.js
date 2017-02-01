/*
  backgrid
  http://github.com/cloudflare/backgrid

  Copyright (c) 2013-present Cloudflare, Inc. and contributors
  Licensed under the MIT license.
*/
describe("A Column", function () {

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
      mySortValue: function () {}
    });

    var col = new Col({
      name: "name",
      cell: "string",
      sortValue: "mySortValue"
    });

    expect(col.sortValue()).toBe(Col.prototype.mySortValue);

    var mySortValue = function () {};
    col = new Col({
      name: "name",
      cell: "string",
      sortValue: mySortValue
    });

    expect(col.sortValue()).toBe(mySortValue);
  });

  it("sortable can be a string or a boolean or a function", function () {
    var Col = Backgrid.Column.extend({
      mySortable: function () {}
    });

    var col = new Col({
      name: "name",
      cell: "string",
      sortable: "mySortable"
    });

    expect(col.sortable()).toBe(Col.prototype.mySortable);

    col = new Col({
      name: "name",
      cell: "string",
      sortable: false
    });

    expect(col.sortable()).toBe(false);

    col = new Col({
      name: "name",
      cell: "string",
      sortable: function () { return false; }
    });

    expect(col.sortable()).toBe(col.get("sortable"));
  });

  it("editable can be a string or a boolean or a function", function () {
    var Col = Backgrid.Column.extend({
      myEditable: function () {}
    });

    var col = new Col({
      name: "name",
      cell: "string",
      editable: "myEditable"
    });

    expect(col.editable()).toBe(Col.prototype.myEditable);

    col = new Col({
      name: "name",
      cell: "string",
      editable: false
    });

    expect(col.editable()).toBe(false);

    col = new Col({
      name: "name",
      cell: "string",
      editable: function () { return false; }
    });

    expect(col.editable()).toBe(col.get("editable"));
  });

  it("renderable can be a string or a boolean or a function", function () {
    var Col = Backgrid.Column.extend({
      myRenderable: function () {}
    });

    var col = new Col({
      name: "name",
      cell: "string",
      renderable: "myRenderable"
    });

    expect(col.renderable()).toBe(Col.prototype.myRenderable);

    col = new Col({
      name: "name",
      cell: "string",
      renderable: false
    });

    expect(col.renderable()).toBe(false);

    col = new Col({
      name: "name",
      cell: "string",
      renderable: function () { return false; }
    });

    expect(col.renderable()).toBe(col.get("renderable"));
  });

});

describe("A Columns", function () {

  it("is a Backbone.Collection of Column objects", function () {
    expect(new Backgrid.Columns().model).toBe(Backgrid.Column);
  });

});
