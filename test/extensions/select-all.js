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

  describe("when used with Backbone.Collection", function () {

    it("renders a checkbox", function () {
      expect(cell.$el.find(":checkbox").length).toBe(1);
    });

    it("triggers a Backbone `selected` event when the checkbox is checked", function () {
      var selectedTriggered = false;
      model.on("selected", function () {
        selectedTriggered = true;
      });
      cell.$el.find(":checkbox").prop("checked", true).change();
      expect(selectedTriggered).toBe(true);
    });

    it("checks or unchecks its checkbox when the model triggers a Backbone `select` event", function () {
      model.trigger("select", model, true);
      expect(cell.$el.find(":checkbox").prop("checked")).toBe(true);
      model.trigger("select", model, false);
      expect(cell.$el.find(":checkbox").prop("checked")).toBe(false);
    });

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

  it("triggers a `select` event on each model when its checkbox is checked", function () {
    var selectTriggerArgs = [];
    collection.on("select", function () {
      selectTriggerArgs.push(Array.prototype.slice.apply(arguments));
    });

    cell.$el.find(":checkbox").prop("checked", true).change();
    expect(selectTriggerArgs.length).toBe(2);
    expect(selectTriggerArgs[0][0]).toBe(collection.at(0));
    expect(selectTriggerArgs[0][1]).toBe(true);
    expect(selectTriggerArgs[1][0]).toBe(collection.at(1));
    expect(selectTriggerArgs[1][1]).toBe(true);
  });

  it("unchecks itself when a model triggers a `selected` event with a false value", function () {
    cell.$el.find(":checkbox").prop("checked", true).change();
    collection.at(0).trigger("selected", collection.at(0), false);
    expect(cell.$el.find(":checkbox").prop("checked"), false);
  });

  it("will trigger a `select` event on each previously selected model after a `backgrid:refresh` event", function () {
    var ids1 = '';
    collection.on("select", function (model) {
      ids1 = ids1 + model.id;
      model.trigger("selected", model, true);
    });
    cell.$el.find(":checkbox").prop("checked", true).change();
    collection.off("select");

    var ids2 = '';
    collection.on("select", function (model) {
      ids2 = ids2 + model.id;
    });
    Backbone.trigger("backgrid:refresh");

    expect(ids1).not.toBe('');
    expect(ids2).not.toBe('');
    expect(ids1).toBe(ids2);
  });

});
