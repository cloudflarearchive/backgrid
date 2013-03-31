/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
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

});

describe("A Columns", function () {
  
  it("is a Backbone.Collection of Column objects", function () {
    expect(new Backgrid.Columns().model).toBe(Backgrid.Column);
  });

});
