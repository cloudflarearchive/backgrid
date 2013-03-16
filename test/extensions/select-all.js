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

  it("unchecks itself when the collection empties, and checkes itself when all the models on current page are selected", function () {
    cell.$el.find(":checkbox").prop("checked", true);
    collection.remove(collection.first());
    expect(cell.$el.find(":checkbox").prop("checked")).toBe(true);
    collection.remove(collection.first());
    expect(cell.$el.find(":checkbox").prop("checked")).toBe(false);
    collection.add({id: 3}, {id: 4});
    collection.each(function (model) {
      model.trigger("selected", model, true);
    });
    expect(cell.$el.find(":checkbox").prop("checked")).toBe(true);
    collection.reset();
    expect(cell.$el.find(":checkbox").prop("checked")).toBe(false);
  });

  it("triggers `select` on each model on `backgrid:refresh` if checkbox checked", function () {
    var selectTriggerArgs = [];
    collection.on("select", function () {
      selectTriggerArgs.push(Array.prototype.slice.apply(arguments));
    });

    Backbone.trigger("backgrid:refresh");
    expect(selectTriggerArgs.length).toBe(0);

    cell.$el.find(":checkbox").prop("checked", true);
    Backbone.trigger("backgrid:refresh");

    expect(selectTriggerArgs.length).toBe(2);
    expect(selectTriggerArgs[0][0]).toBe(collection.at(0));
    expect(selectTriggerArgs[0][1]).toBe(true);
    expect(selectTriggerArgs[1][0]).toBe(collection.at(1));
    expect(selectTriggerArgs[1][1]).toBe(true);
  });
});
