/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/
describe("A Paginator", function () {

  var books;
  var Books = Backbone.PageableCollection.extend({
    state: {
      pageSize: 1
    }
  });

  var paginator;

  describe("when under client mode", function () {

    beforeEach(function () {
      books = new Books([{
        title: "Alice's Adventures in Wonderland"
      }, {
        title: "A Tale of Two Cities"
      }, {
        title: "The Catcher in the Rye"
      }], {mode: "client"});

      paginator = new Backgrid.Extension.Paginator({
        collection: books,
        columns: [{name: "title", cell: "string"}]
      });

      paginator.render();
    });

    it("has page handles that go to the correct pages when clicked", function () {
      paginator.$el.find("a").eq("3").click();
      expect(books.state.currentPage).toBe(2);
      paginator.$el.find("a").eq("2").click();
      expect(books.state.currentPage).toBe(1);

      paginator.windowSize = 1;
      paginator.render();

      paginator.$el.find("a").eq(4).click();
      expect(paginator.$el.find("a").eq(2).html()).toBe('3');
      expect(books.state.currentPage).toBe(3);

      paginator.$el.find("a").eq(1).click();
      expect(paginator.$el.find("a").eq(2).html()).toBe('2');
      expect(books.state.currentPage).toBe(2);

      books = new Books([{
        title: "Alice's Adventures in Wonderland"
      }, {
        title: "A Tale of Two Cities"
      }, {
        title: "The Catcher in the Rye"
      }], {
        mode: "client",
        state: {
          firstPage: 0
        }
      });
      paginator = new Backgrid.Extension.Paginator({
        collection: books,
        columns: [{name: "title", cell: "string"}]
      });

      paginator.render();

      paginator.$el.find("a").eq("3").click();
      expect(books.state.currentPage).toBe(1);
      paginator.$el.find("a").eq("2").click();
      expect(books.state.currentPage).toBe(0);
    });

    it("renders page handles <= windowSize", function () {
      expect(paginator.$el.find("a").length).toBe(7);

      paginator.windowSize = 1;
      paginator.render();

      expect(paginator.$el.find("a").length).toBe(5);
    });

    it("displays a single page handler number 1 when the collection is empty", function () {
      paginator = new Backgrid.Extension.Paginator({
        collection: new Books(),
        columns: [{name: "title", cell: "string"}]
      });

      paginator.render();

      expect(paginator.$el.find("a").length).toBe(5);
      expect(paginator.$el.find("a[title='No. 1']").length).toBe(1);
      expect(paginator.$el.find("a[title='No. 2']").length).toBe(0);
    });

    it("refreshes upon row insertion", function () {
      books.add({title: "Lord of the Rings"});
      expect(paginator.$el.find("a").length).toBe(8);
      expect(paginator.$el.find("a[title='No. 4']").length).toBe(1);
    });

    it("refreshes upon row removal", function () {
      books.remove(books.first());
      expect(paginator.$el.find("a").length).toBe(6);
      expect(paginator.$el.find("a[title='No. 3']").length).toBe(0);
    });

    it("refreshes upon collection reset", function () {
      books.fullCollection.reset();
      expect(paginator.$el.find("a").length).toBe(5);
      expect(paginator.$el.find("a[title='No. 1']").length).toBe(1);
      expect(paginator.$el.find("a[title='No. 2']").length).toBe(0);
    });
  });

  describe("when under server mode", function () {

    beforeEach(function () {
      books = new Books([{
        title: "Alice's Adventures in Wonderland"
      }], {
        state: {
          pageSize: 1,
          totalRecords: 3
        }
      });

      paginator = new Backgrid.Extension.Paginator({
        collection: books,
        columns: [{name: "title", cell: "string"}]
      });

      paginator.render();
    });

    it("has page handles that go to the correct pages when clicked", function () {
      paginator.windowSize = 1;
      paginator.render();

      books.url = "url";

      var oldAjax = Backbone.ajax;
      Backbone.ajax = function (settings) {
        settings.success([{
          title: "The Catcher in the Rye"
        }]);
      };

      paginator.$el.find("a").eq(4).click();
      expect(paginator.$el.find("a").eq(2).html()).toBe('3');
      expect(books.state.currentPage).toBe(3);

      paginator.$el.find("a").eq(1).click();
      expect(paginator.$el.find("a").eq(2).html()).toBe('2');
      expect(books.state.currentPage).toBe(2);

      books = new Books([{
        title: "Alice's Adventures in Wonderland"
      }], {
        state: {
          totalRecords: 3,
          firstPage: 0
        }
      });

      books.url = "url";

      paginator = new Backgrid.Extension.Paginator({
        collection: books,
        columns: [{name: "title", cell: "string"}]
      });

      paginator.render();

      paginator.$el.find("a").eq("3").click();
      expect(books.state.currentPage).toBe(1);
      paginator.$el.find("a").eq("2").click();
      expect(books.state.currentPage).toBe(0);

      Backbone.ajax = oldAjax;
    });

    it("renders page handles <= windowSize", function () {
      expect(paginator.$el.find("a").length).toBe(7);

      paginator.windowSize = 1;
      paginator.render();

      expect(paginator.$el.find("a").length).toBe(5);
    });

    it("displays a single page handler number 1 when the collection is empty and totalRecords is null", function () {
      paginator = new Backgrid.Extension.Paginator({
        collection: new Books(),
        columns: [{name: "title", cell: "string"}]
      });

      paginator.render();

      expect(paginator.$el.find("a").length).toBe(5);
      expect(paginator.$el.find("a[title='No. 1']").length).toBe(1);
      expect(paginator.$el.find("a[title='No. 2']").length).toBe(0);
    });

    it("refreshes upon collection reset", function () {
      books.reset([{
        title: "Alice's Adventures in Wonderland"
      }]);
      expect(paginator.$el.find("a").length).toBe(7);
      expect(paginator.$el.find("a[title='No. 1']").length).toBe(1);
      expect(paginator.$el.find("a[title='No. 2']").length).toBe(1);
      expect(paginator.$el.find("a[title='No. 3']").length).toBe(1);
    });

  });

  describe("renders only the fast forward page handles", function () {

    beforeEach(function () {
      books = new Books([{
        title: "Alice's Adventures in Wonderland"
      }, {
        title: "A Tale of Two Cities"
      }, {
        title: "The Catcher in the Rye"
      }], {mode: "client"});

      paginator = new Backgrid.Extension.Paginator({
        collection: books,
        columns: [{name: "title", cell: "string"}]
      });

      paginator.render();
    });

    it("in infinite mode", function () {
      books.switchMode("infinite", {models: books.fullCollection.models});
      paginator = new (Backgrid.Extension.Paginator.extend({
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

    it("defined under any mode", function () {
      paginator = new (Backgrid.Extension.Paginator.extend({
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

});
