describe("A Paginator", function () {

  var books;
  var Books = Backbone.PageableCollection.extend({
    state: {
      pageSize: 1
    },
    mode: "client"
  });
  beforeEach(function () {
    books = new Books([{
      title: "Alice's Adventures in Wonderland"
    }, {
      title: "A Tale of Two Cities"
    }, {
      title: "The Catcher in the Rye"
    }]);
  });
  
  it("renders a single tfoot, tr and a td with colspan = columns.length", function () {
    var paginator = new Backgrid.Extension.Paginator({
      collection: books,
      columns: [{name: "title", cell: "string"}]
    });
    paginator.render();
    expect(paginator.el.tagName).toBe("TFOOT");
    expect(paginator.$el.find("tr > td[colspan=1]").length).toBe(1);

    paginator.columns.add({name: "year", cell: "integer"});
    expect(paginator.$el.find("tr > td[colspan=2]").length).toBe(1);

    paginator.columns.add({name: "price", cell: "number"}, {render: false});
    expect(paginator.$el.find("tr > td[colspan=2]").length).toBe(1);

    paginator.columns.remove(paginator.columns.last());
    expect(paginator.$el.find("tr > td[colspan=1]").length).toBe(1);
  });

  it("renders page handles <= windowSize if not in infinite mode", function () {
    var paginator = new Backgrid.Extension.Paginator({
      collection: books,
      columns: [{name: "title", cell: "string"}]
    });
    paginator.render();
    paginator.remove();
    expect(paginator.$el.find("a").length).toBe(7);

    paginator = new (Backgrid.Extension.Paginator.extend({
      windowSize: 1
    }))({
      collection: books,
      columns: [{name: "title", cell: "string"}]
    });
    paginator.render();
    expect(paginator.$el.find("a").length).toBe(5);

    paginator.$el.find("a").eq(3).click();
    expect(paginator.$el.find("a").eq(2).html()).toBe('2');
  });

  it("renders only the fast forward page handles in infinite mode", function () {
    books.switchMode("infinite", {models: books.fullCollection.models});
    var paginator = new (Backgrid.Extension.Paginator.extend({
      fastForwardHandleLabels: {
        prev: "first",
        next: "next"
      }
    }))({
      collection: books,
      columns: [{name: "title", cell: "string"}]
    });

    paginator.render();
    expect(paginator.$el.find("a").length).toBe(2);
    expect(paginator.$el.find("a").eq(0).html()).toBe("first");
    expect(paginator.$el.find("a").eq(1).html()).toBe("next");
  });

  it("renders only the fast forward page handles defined under any mode", function () {
    var paginator = new (Backgrid.Extension.Paginator.extend({
      fastForwardHandleLabels: {
        prev: "first",
        next: "next"
      }
    }))({
      collection: books,
      columns: [{name: "title", cell: "string"}]
    });

    paginator.render();
    expect(paginator.$el.find("a").length).toBe(5);
    expect(paginator.$el.find("a").eq(0).html()).toBe("first");
    expect(paginator.$el.find("a").eq(4).html()).toBe("next");
  });

});
