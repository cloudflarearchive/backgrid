/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/
describe("A Row", function () {

  it("renders a row of cells using a model's values and a list of column definitions", function () {
    var row = new Backgrid.Row({
      model: new Backbone.Model({
        name: "name",
        age: 18
      }),
      columns: [{
        name: "name",
        cell: "string"
      }, {
        name: "age",
        cell: "integer"
      }]
    });

    row.render();

    expect(row.el.tagName).toBe("TR");

    var $tds = row.$el.children();
    expect($tds.eq(0).text()).toBe("name");
    expect($tds.eq(1).text()).toBe("18");
  });

  it("hides or shows a cell if a column's renderable attribute changes", function () {

    var row = new Backgrid.Row({
      model: new Backbone.Model({
        name: "name"
      }),
      columns: [{
        name: "name",
        cell: "string"
      }]
    });

    row.render();

    var $tds = row.$el.children();
    expect($tds.eq(0).text()).toBe("name");
    expect($tds.eq(0).hasClass("renderable")).toBe(true);

    row.columns.at(0).set("renderable", false);
    $tds = row.$el.children();
    expect($tds.eq(0).text()).toBe("name");
    expect($tds.eq(0).hasClass("renderable")).toBe(false);

    row.columns.at(0).set("renderable", true);
    $tds = row.$el.children();
    expect($tds.eq(0).text()).toBe("name");
    expect($tds.eq(0).hasClass("renderable")).toBe(true);
  });

  it("inserts or removes a cell if a column is added or removed", function () {
    var row = new Backgrid.Row({
      model: new Backbone.Model({
        name: "name",
        age: 18,
        birthday: "1987-06-05"
      }),
      columns: [{
        name: "name",
        cell: "string"
      }]
    });

    row.render();

    row.columns.add({name: "age", cell: "integer"});
    var $tds = row.$el.children();
    expect($tds.length).toBe(2);
    expect($tds.eq(1).text()).toBe("18");

    row.columns.add({name: "birthday", cell: "date", renderable: false});
    $tds = row.$el.children();
    expect($tds.length).toBe(3);
    expect($tds.last().text()).toBe("1987-06-05");

    row.columns.remove(row.columns.first());
    $tds = row.$el.children();
    expect($tds.length).toBe(2);
    expect($tds.first().text()).toBe("18");
    expect($tds.last().text()).toBe("1987-06-05");
  });

});

describe("A Empty Row", function () {
  var row;

  beforeEach(function(){
    row = new Backgrid.EmptyRow({
      emptyText: " ",
      columns: [{
        name: "title",
        cell: "string"
      }, {
        name: "author",
        cell: "string"
      }]
    });

    row.render();
  });

  it("renders a table row", function() {
    expect(row.el.tagName).toEqual("TR");
  });

  it("sets a css class", function() {
    expect($(row.el).hasClass("empty")).toBe(true);
  });

  it("renders a single column", function() {
    expect($(row.el).find("td").size()).toEqual(1);
  });

  it("spans the columns", function() {
    expect($(row.el).find("td").attr("colspan")).toEqual("2");
  });

  it("sets the content to a space by default", function() {
    expect($(row.el).find("td").text()).toEqual(" ");
  });

  it("accepts a string option for the text in the row", function() {
    row = new Backgrid.EmptyRow({
      columns: [{
        name: "title"
      }, {
        name: "author"
      }],
      emptyText: "No data"
    });

    row.render();

    expect($(row.el).find("td").text()).toEqual("No data");
  });

  it("accepts a function option for the text in the row", function() {
    row = new Backgrid.EmptyRow({
      columns: [{
        name: "title"
      }, {
        name: "author"
      }],
      emptyText: function() { return "No data"; }
    });

    row.render();

    expect($(row.el).find("td").text()).toEqual("No data");
  });

  it("clears the content between two renderings", function() {
    row.render();

    expect($(row.el).find("td").size()).toEqual(1);
  });
});
