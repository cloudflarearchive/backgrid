/*
  backgrid-select-all
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/
(function (window, $, _, Backbone, Backgrid)  {

  /**
     Renders a checkbox for row selection.

     @class Backgrid.Extension.SelectRowCell
     @extends Backbone.View
   */
  var SelectRowCell = Backgrid.Extension.SelectRowCell = Backbone.View.extend({

    /** @property */
    className: "select-row-cell",

    /** @property */
    tagName: "td",

    /** @property */
    events: {
      "change": "onChange"
    },

    /**
       Initializer. Listens to the model's `select` event and check or uncheck
       this cell's checkbox accordingly.

       @param {Object} options
       @param {Backgrid.Column} options.column
       @param {Backbone.Model} options.model
     */
    initialize: function (options) {

      this.column = options.column;
      if (!(this.column instanceof Backgrid.Column)) {
        this.column = new Backgrid.Column(this.column);
      }

      this.listenTo(this.model, "select", function (model, selected) {
        this.$el.find(":checkbox").prop("checked", selected);
      });

    },

    /**
       When the checkbox's value changes, this method will trigger a Backbone
       `selected` event with a reference of the model and the checkbox''
       `checked` value.
     */
    onChange: function (e) {
      this.model.trigger("selected", this.model, $(e.target).prop("checked"));
    },

    /**
       Renders a checkbox in a table cell.
     */
    render: function () {
      this.$el.empty().append("<input type='checkbox' />");
      return this;
    }

  });

  /**
     Renders a checkbox to select all rows on the current page.

     @class Backgrid.Extension.SelectAllHeaderCell
     @extends Backgrid.Extension.SelectRowCell
   */
  Backgrid.Extension.SelectAllHeaderCell = SelectRowCell.extend({

    /** @property */
    className: "select-all-header-cell",

    /** @property */
    tagName: "th",

    /**
       Initializer.

       If all of the models on the current page has been selected, this header
       cell will check its checkbox. If the underlying collection has been
       emptied, the checkbox will uncheck. If the checkbox is checked when the
       entire grid refreshes itself, this header cell will trigger a Backbone
       `select` event on each model in the underlying collection, passing the
       model and the current `checked` checkbox value in each event.

       @param {Object} options
       @param {Backgrid.Column} options.column
       @param {Backbone.Collection} options.collection
     */
    initialize: function (options) {

      this.column = options.column;
      if (!(this.column instanceof Backgrid.Column)) {
        this.column = new Backgrid.Column(this.column);
      }

      var collection = this.collection;
      var selectedCount = 0;
      this.listenTo(collection, "selected", function (model, selected) {
        if (!selected) {
          this.$el.find(":checkbox").prop("checked", selected);
          selectedCount--;
        }
        else {
          selectedCount++;
        }

        if (collection.length && selectedCount === collection.length) {
          this.undelegateEvents();
          this.$el.find(":checkbox").prop("checked", true);
          this.delegateEvents();
        }
      });

      this.listenTo(collection, "remove reset", function () {
        if (!collection.length) {
          this.$el.find(":checkbox").prop("checked", false);
        }
      });

      this.listenTo(Backbone, "backgrid:refresh", function () {
        if (this.$el.find(":checkbox").prop("checked")) {
          collection.each(function (model) {
            model.trigger("select", model, true);
          });
        }
      });
    },

    /**
       Progagates the checked value of this checkbox to all the models of the
       underlying collection by triggering a Backbone `select` event on the
       models themselves, passing each model and the current `checked` value of
       the checkbox in each event.
     */
    onChange: function (e) {
      var checked = $(e.target).prop("checked");

      var collection = this.collection;
      collection.each(function (model) {
        model.trigger("select", model, checked);
      });
    }

  });

}(window, jQuery, _, Backbone, Backgrid));
