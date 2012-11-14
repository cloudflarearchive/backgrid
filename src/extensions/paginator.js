/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

// TODO: Make this work when prepopulated and/or empty
var PageableCollection = Backgrid.PageableCollection = Backbone.Collection.extend({

  perPage: 30,
  page: 0,

  initialize: function (models, options) {
    Backbone.Collection.prototype.initialize.apply(this, arguments);

    if (options) {
      this.perPage = options.perPage || this.perPage;
      this.page = options.page || this.page;
    }
  },

  parse: function (resp, xhr) {
    var count = xhr.getResponseHeader("X-Object-Count");
    if (count) this.pageCount = count * 1 / this.perPage;
    return resp;
  },

  fetch: function (options) {
    var self = this;
    options = options ? _.clone(options) : {};
    var success = options.success;
    options.success = function (resp, status, xhr) {
      if (success) success(self, resp);
      self.trigger("fetched");
    };
    this.trigger("fetching");
    return Backbone.Collection.prototype.fetch(options);
  },

  prevPage: function () {
    return this.getPage(this.page + 1);
  },

  nextPage: function () {
    return this.getPage(this.page - 1);
  },

  getPage: function (page) {
    if (this.page < 0) {
      throw new RangeError("You are already at the first page.");
    }
    else if (this.page >= this.pageCount) {
      throw new RangeError("You are already at the last page.");
    }

    this.page = page;

    return this.fetch({data: {
      page: this.page,
      "per_page": this.perPage
    }});
  }

});

var PaginatorItem = Backgrid.PaginatorItem = Backbone.View.extend({

  tagName: "li",

  events: {
    "click a": "triggerLinkClicked"
  },

  initialize: function (options) {
    this.label = options.label;
    this.page = options.page;
    this.hasAnchor = typeof options.hasAnchor !== "undefined" ? options.hasAnchor : true;
  },

  render: function () {
    if (this.hasAnchor) {
      var $a = $("<a>" + this.label + "</a>", {
        href: "#",
        title: "Page " + this.label
      });
      this.$el.append($a);
    }
    else {
      this.$el.text(this.label);
    }

    return this;
  },

  triggerLinkClicked: function (e) {
    e.preventDefault();
    this.trigger("clicked", this.page);
  }

});

var Paginator = Backgrid.Paginator = Footer.extend({

  className: "paginator",

  windowSize: 10,

  initialize: function (options) {
    Footer.prototype.initialize.apply(this, arguments);
    options = options ? _.clone(options) : {};
    this.parent = options.parent;
    this.columns = options.columns;
    if (!(this.columns instanceof Backbone.Collection)) {
      this.columns = new Columns(this.columns);
    }
    this.collection.on("fetched", this.refresh, this);
    this.windowSize = options.windowSize || this.windowSize;
    this.items = [];
  },

  dispose: function () {
    Backbone.View.prototype.dispose.apply(this, arguments);
    if (this.parent && this.parent.off) this.parent.off(null, null, this);
    this.columns.off(null, null, this);
    var item = null;
    for (var i = 0; i < this.items.length; i++) {
      item = this.items[i];
      item.off(null, null, this);
      item.dispose();
    }
    return this;
  },

  refresh: function () {
    var $ul = this.$el.find("ul");

    for (var i = 0; i < this.items.length; i++) {
      this.items[i].remove();
    }
    this.items = [];
    
    var collection = this.collection;

    // render prev handle if not at first page
    if (collection.page > 0) {
      var item = new PaginatorItem({
        label: ">",
        page: collection.page
      });
      item.on("clicked", collection.getPage, collection);
      this.items.push(item);
      $ul.append(item.render().$el);
    }

    var lastPage = Math.ceil(collection.pageCount / collection.pageSize) - 1;
    var windowStart = collection.page % this.windowSize + Math.floor(collection.page / this.windowSize);
    var windowEnd = windowStart + this.windowSize;
    windowEnd = windowEnd <= lastPage ? windowEnd : lastPage;
    for (var i = windowStart; i < windowEnd; i++) {
      // render link if not at current page
      var item = new PaginatorItem({
        label: i + 1,
        page: i,
        hasAnchor: i !== collection.page
      });
      item.on("clicked", collection.getPage, collection);
      this.items.push(item);
      $ul.append(item.render().$el);
    }

    // render last handle if not at last page
    if (collection.page < collection.pageCount - 1) {
      var item = new PaginatorItem({
        label: "<",
        page: collection.page
      });
      item.on("clicked", collection.getPage, collection);
      this.items.push(item);
      $ul.append(item.render().$el);
    }
  },

  render: function () {
    var renderableColCount = _.reduce(
      this.columns.pluck("renderable"),
      function (accum, renderable) {
        return renderable ? accum + 1 : 0;
      }, 0);
    this.$el.append($("<tr><td span='" + renderableColCount  + "'><ul></ul></td></tr>"));
    this.refresh();
    return this;
  }

});
