/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/
describe("A SelectRowCell", function () {

  var collection;
  var model;
  var cell;

  beforeEach(function () {
    model = new Backbone.Model();
    collection = new Backbone.Collection();
    collection.add(model);

    cell = new Backgrid.Extension.SelectRowCell({
      model: model,
      column: {
        name: "",
        cell: "select-row"
      }
    });

    cell.render();
  });

  it("renders a checkbox", function () {
    expect(cell.$el.find(":checkbox").length).toBe(1);
  });

  it("triggers a Backbone `backgrid:selected` event when the checkbox is checked", function () {
    var selectedTriggered = false;
    model.on("backgrid:selected", function () {
      selectedTriggered = true;
    });
    cell.$el.find(":checkbox").prop("checked", true).change();
    expect(selectedTriggered).toBe(true);
  });

  it("checks or unchecks its checkbox when the model triggers a Backbone `backgrid:select` event", function () {
    model.trigger("backgrid:select", model, true);
    expect(cell.$el.find(":checkbox").prop("checked")).toBe(true);
    model.trigger("backgrid:select", model, false);
    expect(cell.$el.find(":checkbox").prop("checked")).toBe(false);
  });

});

describe("A SelectAllHeaderCell", function () {

  var collection;
  var cell;

  beforeEach(function () {
    collection = new Backbone.Collection([{id: 1}, {id: 2}]);
    cell = new Backgrid.Extension.SelectAllHeaderCell({
      collection: collection,
      column: {
        headerCell: "select-all",
        cell: "select-row",
        name: ""
      }
    });

    cell.render();
  });

  it("triggers a `backgrid:select` event on each model when its checkbox is checked", function () {
    var selectTriggerArgs = [];
    collection.on("backgrid:select", function () {
      selectTriggerArgs.push(Array.prototype.slice.apply(arguments));
    });

    cell.$el.find(":checkbox").prop("checked", true).change();
    expect(selectTriggerArgs.length).toBe(2);
    expect(selectTriggerArgs[0][0]).toBe(collection.at(0));
    expect(selectTriggerArgs[0][1]).toBe(true);
    expect(selectTriggerArgs[1][0]).toBe(collection.at(1));
    expect(selectTriggerArgs[1][1]).toBe(true);
  });

  it("unchecks itself when a model triggers a `backgrid:selected` event with a false value", function () {
    cell.$el.find(":checkbox").prop("checked", true).change();
    collection.at(0).trigger("backgrid:selected", collection.at(0), false);
    expect(cell.$el.find(":checkbox").prop("checked"), false);
  });

  it("will trigger a `backgrid:select` event on each previously selected model after a `backgrid:refresh` event", function () {
    var ids1 = '';
    collection.on("backgrid:select", function (model) {
      ids1 = ids1 + model.id;
      model.trigger("backgrid:selected", model, true);
    });
    cell.$el.find(":checkbox").prop("checked", true).change();
    collection.off("backgrid:select");

    var ids2 = '';
    collection.on("backgrid:select", function (model) {
      ids2 = ids2 + model.id;
    });
    collection.trigger("backgrid:refresh");
    collection.off("backgrid:select");

    expect(ids1).not.toBe('');
    expect(ids2).not.toBe('');
    expect(ids1).toBe(ids2);
  });

});

describe("Grid#getSelectedModels", function () {

  it("will be attached to Backgrid.Grid's prototype", function () {
    expect(typeof Backgrid.Grid.prototype.getSelectedModels).toBe("function");
  });

  it("will return a list of selected models", function () {
    var collection = new Backbone.Collection([{id: 1}, {id: 2}]);

    var grid = new Backgrid.Grid({
      collection: collection,
      columns: [{
        name: "",
        cell: "select-row",
        headerCell: "select-all"
      }, {
        name: "id",
        cell: "integer"
      }]
    });

    grid.render();

    collection.each(function (model) {
      model.trigger("backgrid:selected", model, true);
    });

    var selectedModels = grid.getSelectedModels();
    expect(selectedModels.length).toBe(2);
    expect(selectedModels[0].id).toBe(1);
    expect(selectedModels[1].id).toBe(2);
  });

});
