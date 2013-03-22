describe("A ServerSideFilter", function () {

  var ajax, collection;

  beforeEach(function () {
    collection = new (Backbone.Collection.extend({
      url: "http://www.example.com"
    }))([{id: 1}, {id: 2}]);

    ajax = $.ajax;
  });

  afterEach(function () {
    $.ajax = ajax;
  });

  it("can render a search box with optional name, placeholder and value", function () {
    var filter = new Backgrid.Extension.ServerSideFilter({
      collection: collection,
      name: "name",
      placeholder: "placeholder",
      value: "value"
    });
    filter.render();
    expect(filter.$el.find(":text").attr("name")).toBe("name");
    expect(filter.$el.find(":text").attr("placeholder")).toBe("placeholder");
    expect(filter.$el.find(":text").attr("value")).toBe("value");

    var filter = new Backgrid.Extension.ServerSideFilter({
      collection: collection,
      name: "name"
    });
    filter.render();
    expect(filter.$el.find(":text").attr("placeholder")).toBeUndefined();
    expect(filter.$el.find(":text").attr("name")).toBe("name");

    var filter = new Backgrid.Extension.ServerSideFilter({
      collection: collection,
      value: "value"
    });
    filter.render();
    expect(filter.$el.find(":text").attr("placeholder")).toBeUndefined();
    expect(filter.$el.find(":text").attr("value")).toBe("value");

    var filter = new Backgrid.Extension.ServerSideFilter({
      collection: collection,
      placeholder: "placeholder"
    });
    filter.render();
    expect(filter.$el.find(":text").attr("placeholder")).toBe("placeholder");
    expect(filter.$el.find(":text").attr("value")).toBeUndefined();

    var filter = new Backgrid.Extension.ServerSideFilter({
      collection: collection
    });
    filter.render();
    expect(filter.$el.find(":text").attr("placeholder")).toBeUndefined();
    expect(filter.$el.find(":text").attr("value")).toBeUndefined();
  });

  it("can fetch with a query on submit", function () {
    var url, data;
    $.ajax = function (settings) {
      url = settings.url;
      data = settings.data;
      settings.success({id: 1});
    };
    var filter = new Backgrid.Extension.ServerSideFilter({
      collection: collection
    });
    filter.render();
    filter.$el.find(":text").val("query").submit();
    expect(url).toBe("http://www.example.com");
    expect(data).toEqual({q: "query"});
    expect(collection.length).toBe(1);
    expect(collection.at(0).toJSON()).toEqual({id: 1});
  });

  it("can clear the search box and refetch upon clicking the cross", function () {
    spyOn(collection, "fetch");
    var filter = new Backgrid.Extension.ServerSideFilter({
      collection: collection
    });
    filter.render();
    filter.$el.find(":text").val("query");
    filter.$el.find(".close").click();
    expect(filter.$el.find(":text").val()).toBe("");
    collection.fetch.reset();
  });

});

describe("A ClientSideFilter", function () {

  var collection;

  beforeEach(function () {
    collection = new (Backbone.Collection.extend({
      url: "http://www.example.com"
    }))([{id: 1, name: "alice", bio: "a fat cat sat on a mat and ate a fat rat"},
         {id: 2, name: "bob", bio: "he is fat but does not crap"}]);
  });

  it("can render a search box with option placeholder and value", function () {
    var filter = new Backgrid.Extension.ClientSideFilter({
      collection: collection,
      placeholder: "placeholder",
      value: "value",
      fields: {name: 1, bio: 10}
    });
    filter.render();
    expect(filter.$el.find(":text").attr("placeholder")).toBe("placeholder");
    expect(filter.$el.find(":text").attr("value")).toBe("value");

    var filter = new Backgrid.Extension.ClientSideFilter({
      collection: collection,
      value: "value",
      fields: {name: 1, bio: 10}
    });
    filter.render();
    expect(filter.$el.find(":text").attr("placeholder")).toBeUndefined();
    expect(filter.$el.find(":text").attr("value")).toBe("value");

    var filter = new Backgrid.Extension.ClientSideFilter({
      collection: collection,
      placeholder: "placeholder",
      fields: {name: 1, bio: 10}
    });
    filter.render();
    expect(filter.$el.find(":text").attr("placeholder")).toBe("placeholder");
    expect(filter.$el.find(":text").attr("value")).toBeUndefined();

    var filter = new Backgrid.Extension.ClientSideFilter({
      collection: collection,
      fields: {name: 1, bio: 10}
    });
    filter.render();
    expect(filter.$el.find(":text").attr("placeholder")).toBeUndefined();
    expect(filter.$el.find(":text").attr("value")).toBeUndefined();
  });

  it("can perform a full-text search on change, keyup and submit, and cancel on clicking the close button", function () {
    var filter = new Backgrid.Extension.ClientSideFilter({
      collection: collection,
      fields: {name: 1, bio: 10}
    });
    filter.render();
    expect(collection.length).toBe(2);
    expect(collection.at(0).id).toBe(1);
    expect(collection.at(1).id).toBe(2);

    filter.$el.find(":text").val("crap").change();
    expect(collection.length).toBe(1);
    expect(collection.at(0).id).toBe(2);

    filter.$el.find(".close").click();
    expect(collection.length).toBe(2);
    expect(collection.at(0).id).toBe(1);
    expect(collection.at(1).id).toBe(2);

    var a = $.Event("keyup", { keyCode: 65 });
    var t = $.Event("keyup", { keyCode: 84 });
    filter.$el.trigger(a);
    filter.$el.trigger(t);

    expect(collection.length).toBe(2);
    expect(collection.at(0).id).toBe(1);
    expect(collection.at(1).id).toBe(2);

    filter.$el.find(":text").val("alice");
    filter.$el.submit();
    expect(collection.length).toBe(1);
    expect(collection.at(0).id).toBe(1);
  });

  it("will reindex on reset", function () {
    var filter = new Backgrid.Extension.ClientSideFilter({
      collection: collection,
      fields: {name: 1, bio: 10}
    });
    filter.render();
    collection.reset([{id: 3, name: "charlie", bio: "The cat scared the bat and sat on the mat."},
                      {id: 4, name: "doug", bio: "The snail hid in his shell. It heard a bell. He went to see it was the church bell."}]);

    filter.$el.find(":text").val("crap").change();
    expect(collection.length).toBe(0);

    filter.$el.find(":text").val("alice").change();
    expect(collection.length).toBe(0);

    filter.$el.find(":text").val("charlie").change();
    expect(collection.length).toBe(1);
    expect(collection.at(0).id).toBe(3);

    filter.$el.find(":text").val("doug").change();
    expect(collection.length).toBe(1);
    expect(collection.at(0).id).toBe(4);
  });

  it("will updae the index on remove", function () {
    var filter = new Backgrid.Extension.ClientSideFilter({
      collection: collection,
      fields: {name: 1, bio: 10}
    });
    filter.render();

    collection.remove(collection.last());
    filter.$el.find(":text").val("bob").change();
    expect(collection.length).toBe(0);

    filter.$el.find(":text").val("alice").change();
    expect(collection.length).toBe(1);
    expect(collection.at(0).id).toBe(1);
  });

  it("will update the index on change", function () {
    var filter = new Backgrid.Extension.ClientSideFilter({
      collection: collection,
      fields: {name: 1, bio: 10}
    });
    filter.render();

    collection.at(0).set("name", "charlie");
    filter.$el.find(":text").val("alice").change();
    expect(collection.length).toBe(0);

    filter.$el.find(":text").val("charlie").change();
    expect(collection.length).toBe(1);
    expect(collection.at(0).id).toBe(1);
  });

  it("can clear the search box and reindex upon clicking the cross", function () {
    var filter = new Backgrid.Extension.ClientSideFilter({
      collection: collection,
      fields: {name: 1, bio: 10}
    });
    filter.render();

    filter.$el.find(":text").val("crap").change();
    filter.$el.find(".close").click();
    expect(filter.$el.find(":text").val()).toBe("");
    expect(collection.length).toBe(2);
    expect(collection.at(0).id).toBe(1);
    expect(collection.at(1).id).toBe(2);
  });

});
