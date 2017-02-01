/*
  backgrid
  http://github.com/cloudflare/backgrid

  Copyright (c) 2013-present Cloudflare, Inc. and contributors
  Licensed under the MIT license.
*/
describe("A Body", function () {

  var col;
  var body;
  beforeEach(function () {

    col = new Backbone.Collection([{id: 2}, {id: 1}, {id: 3}]);

    body = new Backgrid.Body({
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: col
    });

    body.render();
  });

  it("renders table rows using the given column definitions and collection", function () {
    expect(body.el.tagName).toBe("TBODY");
    var $trs = body.$el.children();
    expect($trs.length).toBe(3);
    expect($(body.el).html().toLowerCase().replace(/\s*</g, '<'))
        .toBe('<tr><td class="integer-cell editable sortable renderable id">2</td></tr>' +
              '<tr><td class="integer-cell editable sortable renderable id">1</td></tr>' +
              '<tr><td class="integer-cell editable sortable renderable id">3</td></tr>');
  });

  it("will render a new row if a new model is added to its collection", function () {
    body.collection.add({
      id: 4
    });
    var $trs = body.$el.children();
    expect($trs.length).toBe(4);
    expect($("<div>").append($trs.eq(3).clone()).html().toLowerCase().replace(/\s*</g, '<'))
        .toBe('<tr><td class="integer-cell editable sortable renderable id">4</td></tr>');

    body.collection.add({
      id: 5
    }, {at: 1});
    $trs = body.$el.children();
    expect($trs.length).toBe(5);
    expect($("<div>").append($trs.eq(1).clone()).html().toLowerCase().replace(/\s*</g, '<'))
        .toBe('<tr><td class="integer-cell editable sortable renderable id">5</td></tr>');
  });

  it("will render a new row by calling insertRow directly with a new model", function () {

    body = new Backgrid.Body({
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: new Backbone.Collection()
    });

    body.render();

    body.insertRow({
      id: 4
    });

    var $trs = body.$el.children();
    expect($trs.length).toBe(1);
    expect($("<div>").append($trs.eq(0).clone()).html().toLowerCase().replace(/\s*</g, '<'))
        .toBe('<tr><td class="integer-cell editable sortable renderable id">4</td></tr>');

    body.insertRow({
      id: 5
    }, {at: 0});
    $trs = body.$el.children();
    expect($trs.length).toBe(2);
    expect($("<div>").append($trs.eq(0).clone()).html().toLowerCase().replace(/\s*</g, '<'))
        .toBe('<tr><td class="integer-cell editable sortable renderable id">5</td></tr>');
  });

  it("will remove a row from the DOM if a model is removed from its collection", function () {
    var m1 = body.collection.at(1);
    body.collection.remove(m1);
    var $trs = body.$el.children();
    expect($trs.length).toBe(2);
    expect($(body.el).html().toLowerCase().replace(/\s+</g, '<'))
        .toBe('<tr><td class="integer-cell editable sortable renderable id">2</td></tr>' +
              '<tr><td class="integer-cell editable sortable renderable id">3</td></tr>');
  });

  it("will remove a row from the DOM is removeRow is called directly with a model", function () {
    var m1 = body.collection.at(1);
    body.removeRow(m1);
    var $trs = body.$el.children();
    expect($trs.length).toBe(2);
    expect($(body.el).html().toLowerCase().replace(/\s+</g, '<'))
        .toBe('<tr><td class="integer-cell editable sortable renderable id">2</td></tr>' +
              '<tr><td class="integer-cell editable sortable renderable id">3</td></tr>');
  });

  it("will refresh if its collection is reset", function () {
    var eventFired = false;
    var handler = function () {
      eventFired = true;
    };
    body.collection.on("backgrid:refresh", handler);
    body.collection.reset([{
      id: 6
    }]);
    body.collection.off("backgrid:refresh", handler);
    expect(eventFired).toBe(true);
    var $trs = body.$el.children();
    expect($trs.length).toBe(1);
    expect($(body.el).html().toLowerCase().replace(/\s+</g, '<'))
        .toBe('<tr><td class="integer-cell editable sortable renderable id">6</td></tr>');
  });

  it("will render rows using the Row class supplied in the constructor options", function () {

    var CustomRow = Backgrid.Row.extend({});

    spyOn(CustomRow.prototype, "render").and.callThrough();

    body = new Backgrid.Body({
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: col,
      row: CustomRow
    });

    body.render();

    expect(CustomRow.prototype.render).toHaveBeenCalled();
  });

  describe("maintain page size at page boundary", function () {

    var col;

    beforeEach(function () {
      col = new Backbone.PageableCollection([
        {id: 1},
        {id: 2},
        {id: 3}
      ], {
        state: {
          pageSize: 2
        },
        mode: "client"
      });

      body = new Backgrid.Body({
        columns: [{
          name: "id",
          cell: "integer"
        }],
        collection: col
      });

      body.render();
    });

    it("when adding to a full page", function () {
      col.add(new Backbone.Model({id: 4}));
      expect(body.$el.find("tr").length).toBe(2);
    });

    it("when removing from a full page", function () {
      col.remove(col.get(1));
      expect(body.$el.find("tr").length).toBe(2);
    });

  });

  it("will not display the empty row if collection is not empty", function () {
    body = new Backgrid.Body({
      emptyText: " ",
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: col
    });
    body.render();

    expect(body.$el.find("tr.empty").length).toBe(0);
  });

  it("will not display the empty row if `options.emptyText` is not supplied", function () {
    expect(body.$el.find("tr.empty").length).toBe(0);

    col.reset();
    body = new Backgrid.Body({
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: col
    });
    body.render();

    expect(body.$el.find("tr.empty").length).toBe(0);
  });

  it("will display the empty row if the collection is empty and `options.emptyText` is supplied", function () {
    col.reset();
    body = new Backgrid.Body({
      emptyText: " ",
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: col
    });
    body.render();

    expect(body.$el.find("tr.empty").length).toBe(1);
    expect(body.$el.find("tr.empty > td").attr("colspan")).toBe("1");
  });

  it("will update the colspan of the empty row as columns are changed", function () {
    col.reset();
    body = new Backgrid.Body({
      emptyText: " ",
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: col
    });
    body.render();

    expect(body.$el.find("tr.empty > td").attr("colspan")).toBe("1");
    body.columns.push({name: "age", cell: "integer"});
    expect(body.$el.find("tr.empty > td").attr("colspan")).toBe("2");
  });

  it("will clear the empty row if a new model is added to an empty collection", function () {
    col.reset();
    body = new Backgrid.Body({
      emptyText: " ",
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: col
    });
    body.render();
    expect(body.$el.find("tr.empty").length).toBe(1);

    col.add({id: 4});
    expect(body.$el.find("tr.empty").length).toBe(0);

    col.reset();
    expect(body.$el.find("tr.empty").length).toBe(1);

    body.insertRow({id: 5});
    expect(body.$el.find("tr.empty").length).toBe(0);
  });

  it("will show the empty row if all rows are removed from the collection", function () {
    col.reset({id: 4});
    body = new Backgrid.Body({
      emptyText: " ",
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: col
    });
    body.render();
    expect(body.$el.find("tr.empty").length).toBe(0);

    col.remove(col.at(0));
    expect(body.$el.find("tr.empty").length).toBe(1);

    body.insertRow({id: 5});
    expect(body.$el.find("tr.empty").length).toBe(0);

    body.removeRow(col.at(0));
    expect(body.$el.find("tr.empty").length).toBe(1);
  });

  it("won't call render from updateEmptyRow if there is no emptyView", function () {
    var pushColumn = function () {
      body.columns.push({name: "age", cell: "integer"});
    };
    expect(pushColumn).not.toThrow();
  });

  it("#sort will throw a RangeError is direction is not ascending, descending or null", function () {
    body = new Backgrid.Body({
      collection: col,
      columns: [{
        name: "id",
        cell: "integer"
      }],
    }).render();

    expect(function () {
      body.sort("id", "wat");
    }).toThrow();
  });

  it("can sort the underlying collection using the default comparator", function () {
    body = new Backgrid.Body({
      collection: col,
      columns: [{
        name: "id",
        cell: "integer"
      }],
    }).render();

    body.collection.trigger("backgrid:sort", body.columns.at(0), "ascending");
    expect(body.collection.toJSON()).toEqual([{id: 1}, {id: 2}, {id: 3}]);
    expect(body.columns.at(0).get("direction"), "ascending");

    body.collection.trigger("backgrid:sort", body.columns.at(0), "descending");
    expect(body.collection.toJSON()).toEqual([{id: 3}, {id: 2}, {id: 1}]);
    expect(body.columns.at(0).get("direction"), "descending");

    col.at(0).cid = "c100";
    col.at(1).cid = "c1";
    col.at(2).cid = "c10";
    body.collection.trigger("backgrid:sort", body.columns.at(0), null);
    expect(body.collection.toJSON()).toEqual([{id: 2}, {id: 1}, {id: 3}]);
    expect(body.columns.at(0).get("direction"), null);
  });

  it("can sort the underlying collection using a custom value extractor on `backgrid:sort`", function () {

    var sortValue = function (model, attr) {
      return 3 - model.get(attr);
    };

    body = new Backgrid.Body({
      collection: col,
      columns: [{
        name: "id",
        cell: "integer",
        sortValue: sortValue
      }],
    }).render();

    body.collection.trigger("backgrid:sort", body.columns.at(0), "ascending");
    expect(body.collection.toJSON()).toEqual([{id: 3}, {id: 2}, {id: 1}]);
    expect(body.columns.at(0).get("direction"), "ascending");
  });

  it("can sort on a server-mode Backbone.PageableCollection", function () {

    var oldAjax = $.ajax;
    $.ajax = function (settings) {
      settings.success([{"total_entries": 3}, [{id: 2}, {id: 1}]]);
    };

    var col = new (Backbone.PageableCollection.extend({
      url: "test-headercell"
    }))([{id: 1}, {id: 2}], {
      state: {
        pageSize: 3
      }
    });

    body = new Backgrid.Body({
      columns: [{
        name: "id",
        cell: "integer"
      }],
      collection: col
    });

    body.render();

    expect(body.collection.at(0).get("id")).toBe(1);
    expect(body.collection.at(1).get("id")).toBe(2);

    var onBackgridSortedCallArgs = [];
    col.on("backgrid:sorted", function () {
      onBackgridSortedCallArgs.push([].slice.apply(arguments));
    });

    body.collection.trigger("backgrid:sort", body.columns.at(0), "descending");

    expect(body.collection.at(0).get("id")).toBe(2);
    expect(body.collection.at(1).get("id")).toBe(1);
    expect(body.columns.at(0).get("direction"), "descending");
    expect(onBackgridSortedCallArgs.length).toBe(1);
    expect(onBackgridSortedCallArgs[0][0]).toBe(body.columns.at(0));
    expect(onBackgridSortedCallArgs[0][1]).toBe("descending");

    $.ajax = oldAjax;
  });

  it("can sort on a client-mode Backbone.PageableCollection", function () {

    var col = new Backbone.PageableCollection([{id: 2}, {id: 1}, {id: 3}], {
      state: {
        pageSize: 1
      },
      mode: "client"
    });

    body = new Backgrid.Body({
      columns: [{
        name: "id",
        cell: "integer",
        sortValue: function (model, attr) {
          return 3 - model.get(attr);
        }
      }],
      collection: col
    });

    body.render();

    var onBackgridSortedCallArgs = [];
    col.on("backgrid:sorted", function () {
      onBackgridSortedCallArgs.push([].slice.apply(arguments));
    });

    col.trigger("backgrid:sort", body.columns.at(0), "ascending");
    expect(body.collection.toJSON()).toEqual([{id: 3}]);
    expect(body.columns.at(0).get("direction"), "ascending");
    expect(onBackgridSortedCallArgs.length).toBe(1);
    expect(onBackgridSortedCallArgs[0][0]).toBe(body.columns.at(0));
    expect(onBackgridSortedCallArgs[0][1]).toBe("ascending");
    expect(onBackgridSortedCallArgs[0][2]).toBe(col);

    body.collection.getPage(2);
    expect(body.collection.toJSON()).toEqual([{id: 2}]);

    body.collection.getPage(3);
    expect(body.collection.toJSON()).toEqual([{id: 1}]);

    body.collection.getFirstPage();

    col.trigger("backgrid:sort", body.columns.at(0), "descending");
    expect(body.columns.at(0).get("direction"), "descending");
    expect(body.collection.toJSON()).toEqual([{id: 1}]);
    expect(onBackgridSortedCallArgs.length).toBe(2);
    expect(onBackgridSortedCallArgs[1][0]).toBe(body.columns.at(0));
    expect(onBackgridSortedCallArgs[1][1]).toBe("descending");
    expect(onBackgridSortedCallArgs[1][2]).toBe(col);

    col.trigger("backgrid:sort", body.columns.at(0), null);
    expect(body.columns.at(0).get("direction"), null);
    expect(body.collection.toJSON()).toEqual([{id: 2}]);
    expect(onBackgridSortedCallArgs.length).toBe(3);
    expect(onBackgridSortedCallArgs[2][0]).toBe(body.columns.at(0));
    expect(onBackgridSortedCallArgs[2][1]).toBe(null);
    expect(onBackgridSortedCallArgs[2][2]).toBe(col);
  });

  it("will put the next editable and renderable cell in edit mode when a save or one of the navigation commands is triggered via backgrid:edited from the collection", function () {
    var people = new Backbone.Collection([
      {name: "alice", age: 28, married: false},
      {name: "bob", age: 30, married: true}
    ]);
    var columns = new Backgrid.Columns([{
      name: "name",
      cell: "string"
    }, {
      name: "age",
      cell: "integer",
      editable: false
    }, {
      name: "sex",
      cell: "boolean",
      renderable: false
    }]);
    var body = new Backgrid.Body({
      collection: people,
      columns: columns
    });
    body.render();

    body.rows[0].cells[0].enterEditMode();

    // Just making sure a cell has exited edit mode before the next cell goes
    // into edit mode. Fixes #187.
    var oldExitEditMode = body.rows[0].cells[0].exitEditMode;
    var callOrders = [];
    body.rows[0].cells[0].exitEditMode = function () {
      callOrders.push("exit");
      return oldExitEditMode.apply(this, arguments);
    };

    var oldEnterEditMode = body.rows[1].cells[0].enterEditMode;
    body.rows[1].cells[0].enterEditMode = function () {
      callOrders.push("enter");
      return oldEnterEditMode.apply(this, arguments);
    };

    // right
    people.trigger("backgrid:edited", people.at(0), columns.at(0), new Backgrid.Command({keyCode: 9}));
    expect(body.rows[0].cells[0].$el.hasClass("editor")).toBe(false);
    expect(body.rows[1].cells[0].$el.hasClass("editor")).toBe(true);

    expect(callOrders[0]).toBe("exit");
    expect(callOrders[1]).toBe("enter");
    body.rows[0].cells[0].exitEditMode = oldExitEditMode;
    body.rows[1].cells[0].enterEditMode = oldEnterEditMode;

    // left
    people.trigger("backgrid:edited", people.at(1), columns.at(0), new Backgrid.Command({keyCode: 9, shiftKey: true}));
    expect(body.rows[0].cells[0].$el.hasClass("editor")).toBe(true);
    expect(body.rows[1].cells[0].$el.hasClass("editor")).toBe(false);

    // down
    people.trigger("backgrid:edited", people.at(0), columns.at(0), new Backgrid.Command({keyCode: 40}));
    expect(body.rows[0].cells[0].$el.hasClass("editor")).toBe(false);
    expect(body.rows[1].cells[0].$el.hasClass("editor")).toBe(true);

    // up
    people.trigger("backgrid:edited", people.at(1), columns.at(0), new Backgrid.Command({keyCode: 38}));
    expect(body.rows[0].cells[0].$el.hasClass("editor")).toBe(true);
    expect(body.rows[1].cells[0].$el.hasClass("editor")).toBe(false);

    // enter
    people.trigger("backgrid:edited", people.at(0), columns.at(0), new Backgrid.Command({keyCode: 13}));
    expect(body.rows[0].cells[0].$el.hasClass("editor")).toBe(false);
    expect(body.rows[1].cells[0].$el.hasClass("editor")).toBe(false);

    // esc
    body.rows[1].cells[0].enterEditMode();
    people.trigger("backgrid:edited", people.at(1), columns.at(0), new Backgrid.Command({keyCode: 27}));
    expect(body.rows[0].cells[0].$el.hasClass("editor")).toBe(false);
    expect(body.rows[1].cells[0].$el.hasClass("editor")).toBe(false);
  });

  it("will not throw an exception when backgrid:edited is fired on a shared model", function () {
    var people = new Backbone.Collection([
      {name: "alice", age: 28, married: false},
      {name: "bob", age: 30, married: true}
    ]);
    var columns = new Backgrid.Columns([{
      name: "name",
      cell: "string"
    }, {
      name: "age",
      cell: "integer",
      editable: false
    }, {
      name: "sex",
      cell: "boolean",
      renderable: false
    }]);
    var body = new Backgrid.Body({
      collection: people,
      columns: columns
    });
    body.render();

    var columns2 = new Backgrid.Columns([{
      name: "name",
      cell: "string"
    }]);
    var body2 = new Backgrid.Body({
      collection: people,
      columns: columns2
    });
    body2.render();

    body.rows[0].cells[0].enterEditMode();
    var testTrigger = function() {
      people.trigger("backgrid:edited", people.at(0), columns.at(0), new Backgrid.Command({keyCode: 9}));
    };
    expect(testTrigger).not.toThrow();
  });
  
});
