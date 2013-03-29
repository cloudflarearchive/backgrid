/*
  backgrid-filter
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/

(function ($, _, Backbone, Backgrid, lunr) {

  "use strict";

  /**
     ServerSideFilter is a search form widget that submits a query to the server
     for filtering the current collection.

     @class Backgrid.Extension.ServerSideFilter
   */
  var ServerSideFilter = Backgrid.Extension.ServerSideFilter = Backbone.View.extend({

    /** @property */
    tagName: "form",

    /** @property */
    className: "backgrid-filter form-search",

    /** @property {function(Object, ?Object=): string} template */
    template: _.template('<div class="input-prepend input-append"><span class="add-on"><i class="icon-search"></i></span><input type="text" <% if (placeholder) { %> placeholder="<%- placeholder %>" <% } %> name="<%- name %>" <% if (value) { %> value="<%- value %>" <% } %> /><span class="add-on"><a class="close" href="#">&times;</a></span></div>'),

    /** @property */
    events: {
      "click .close": "clear",
      "submit": "filter"
    },

    /** @property {string} [name='q'] Query key */
    name: "q",

    /** @property */
    placeholder: null,

    /** @property */
    value: null,

    /**
       Initializer.

       @param {Object} options
       @param {Backbone.Collection} options.collection
       @param {String} [options.name]
       @param {String} [options.placeholder]
       @param {String} [options.value]
     */
    initialize: function (options) {
      Backbone.View.prototype.initialize.apply(this, arguments);
      this.name = options.name || this.name;
      this.placeholder = options.placeholder || this.placeholder;
      this.value = options.value || this.value;
    },

    /**
       Upon search form submission, this event handler constructs a query
       parameter object and pass it to Collection#fetch for server-side
       filtering.
     */
    filter: function (e) {
      e.preventDefault();
      var $text = $(e.target).find(":text");
      var data = {};
      data[$text.attr("name")] = $text.val();
      this.collection.fetch({data: data});
    },

    /**
       Event handler for the close button. Clears the search box and refetch the
       collection.
     */
    clear: function (e) {
      e.preventDefault();
      this.$el.find(":text").val(null);
      this.collection.fetch();
    },

    /**
       Renders a search form with a text box, optionally with a placeholder and
       a preset value if supplied during initialization.
     */
    render: function () {
      this.$el.empty().append(this.template({
        name: this.name,
        placeholder: this.placeholder,
        value: this.value
      }));
      this.delegateEvents();
      return this;
    }

  });

  /**
     ClientSideFilter is a search form widget that uses
     [lunrjs](http://lunrjs.com/) to index the text fields of each model for a
     collection, and performs full-text searching on the client side.

     @class Backgrid.Extension.ClientSideFilter
   */
  Backgrid.Extension.ClientSideFilter = ServerSideFilter.extend({

    /** @property */
    events: {
      "click .close": function (e) {
        e.preventDefault();
        this.clear.apply(this, arguments);
      },
      "change :text": "filter",
      "keyup :text": "filter",
      "submit": function (e) {
        e.preventDefault();
        this.filter.apply(this, arguments);
      }
    },

    /**
       @property {string} [ref='id']｀lunrjs` document reference attribute name
    */
    ref: 'id',

    /**
       @property {Object} fields A hash of `lunrjs` index field names and boost
       value.
    */
    fields: null,

    /**
       @property wait The time in milliseconds to wait since for since the last
       change to the search box's value before searching. This value can be
       adjusted depending on how often the search box is used and how large the
       search index is.
    */
    wait: 150,

    /**
       Initializer. Indexes the underlying collection on construction. The index
       will refresh when the underlying collection is reset. If any model is
       removed or if any indexed fields of any models has changed, the index
       will be updated.

       @param {Object} options
       @param {Backbone.Collection} options.collection
       @param {Object} options.fields A hash of `lunrjs` index field names and
       boost value.
       @param {string} [options.ref] ｀lunrjs` document reference attribute name
       @param {number} [options.wait]
     */
    initialize: function (options) {
      ServerSideFilter.prototype.initialize.apply(this, arguments);

      this.fields = options.fields || this.fields;
      this.ref = options.ref || this.ref;
      this.wait = options.wait || this.wait;

      this._debounceMethods(["filter", "clear"]);

      var collection = this.collection.fullCollection || this.collection;
      this.resetIndex(collection);
      this.listenTo(collection, "reset", this.resetIndex);
      this.listenTo(collection, "remove", this.removeFromIndex);
      this.listenTo(collection, "change", this.updateIndex);
    },

    _debounceMethods: function (methodNames) {
      if (_.isString(methodNames)) methodNames = [methodNames];

      this.undelegateEvents();

      for (var i = 0, l = methodNames.length; i < l; i++) {
        var methodName = methodNames[i];
        var method = this[methodName];
        this[methodName] = _.debounce(method, this.wait);
      }

      this.delegateEvents();
    },

    /**
       Reindex the collection. If `options.reindex` is `false`, this method is a
       no-op.

       @param {Backbone.Collection} collection
       @param {Object} [options]
       @param {boolean} [options.reindex=true]
     */
    resetIndex: function (collection, options) {
      options = _.extend({reindex: true}, options || {});
      if (options.reindex) {
        var self = this;
        var index = this.index = lunr(function () {
          _.each(self.fields, function (boost, fieldName) {
            this.field(fieldName, boost);
            this.ref(self.ref);
          }, this);
        });
        var docStore = index.documentStore;
        collection.each(function (model) {
          var doc = model.toJSON();
          if (doc[this.ref] && docStore.has(doc[this.ref])) index.update(doc);
          else index.add(doc);
        }, this);
        this.shadowCollection = collection.clone();
      }
    },

    /**
       Removes the given model from the index.

       @param {Backbone.Model} model
     */
    removeFromIndex: function (model) {
      var index = this.index;
      var doc = model.toJSON();
      if (doc[this.ref] && index.documentStore.has(doc[this.ref])) {
        index.remove(doc);
      }
    },

    /**
       Updates the index for the given model.

       @param {Backbone.Model} model
     */
    updateIndex: function (model) {
      this.index.update(model.toJSON());
    },

    /**
       Takes the query from the search box and performs a full-text search on
       the client-side. The search result is returned by resetting the
       underlying collection to the models after interrogating the index for the
       results for the query.
     */
    filter: function () {
      var searchResults = this.index.search(this.$el.find(":text").val());
      var models = [];
      for (var i = 0; i < searchResults.length; i++) {
        var result = searchResults[i];
        models.push(this.shadowCollection.get(result.ref));
      }
      var collection = this.collection.fullCollection || this.collection;
      collection.reset(models, {reindex: false});
    },

    /**
       Clears the search box and reset the collection to its original.
     */
    clear: function () {
      this.$el.find(":text").val(null);
      var collection = this.collection.fullCollection || this.collection;
      collection.reset(this.shadowCollection.models, {reindex: false});
    }

  });

}(jQuery, _, Backbone, Backgrid, lunr));
