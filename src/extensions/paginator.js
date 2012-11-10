/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

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
    this.collection.on("fetched", this.refresh, this);
    options = options ? _.clone(options) : {};
    this.windowSize = options.windowSize || this.windowSize;
  },

  refresh: function () {
    var $ul = this.$el.find("ul");
    var collection = this.collection;

    // render prev handle if not at first page
    if (collection.page > 0) {
      var pi = new PaginatorItem({
        label: ">",
        page: collection.page
      });
      pi.on("clicked", collection.getPage, collection);
      $ul.append(pi.render().$el);
    }

    var lastPage = Math.ceil(collection.pageCount / collection.pageSize) - 1;
    var windowStart = collection.page % this.windowSize + Math.floor(collection.page / this.windowSize);
    var windowEnd = windowStart + this.windowSize;
    windowEnd = windowEnd <= lastPage ? windowEnd : lastPage;
    for (var i = windowStart; i < windowEnd; i++) {
      // render link if not at current page
      var pi = new PaginatorItem({
        label: i + 1,
        page: i,
        hasAnchor: i !== collection.page
      });
      pi.on("clicked", collection.getPage, collection);
      $ul.append(pi.render().$el);
    }

    // render last handle if not at last page
    if (collection.page < collection.pageCount - 1) {
      var pi = new PaginatorItem({
        label: "<",
        page: collection.page
      });
      pi.on("clicked", collection.getPage, collection);
      $ul.append(pi.render().$el);
    }
  },

  render: function () {
    var renderableColCount = _.reduce(
      self.columns.pluck("renderable"),
      function (accum, renderable) {
        return renderable ? accum + 1 : 0;
      }, 0);
    this.$el.append($("<tr><td span='" + renderableColCount  + "'><ul></ul></td></tr>"));
    this.refresh();
    return this;
  }

});
