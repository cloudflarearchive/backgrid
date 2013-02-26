/*
  backgrid-select-all
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/
(function (window, $, _, Backbone, Backgrid)  {

  var SelectRowCell = Backgrid.Extension.SelectRowCell = Backbone.View.extend({

    className: "select-row-cell",

    tagName: "td",

    events: {
      "change": "onChange"
    },

    initialize: function (options) {

      this.column = options.column;
      if (!(this.column instanceof Backgrid.Column)) {
        this.column = new Backgrid.Column(this.column);
      }

      this.listenTo(this.model, "select", function (model, selected) {
        this.$el.find(":checkbox").prop("checked", selected).change();
      });

    },

    onChange: function (e) {
      this.model.trigger("selected", this.model, $(e.target).prop("checked"));
    },

    render: function () {
      this.$el.empty().append("<input type='checkbox' />");
      return this;
    }

  });

  Backgrid.Extension.SelectAllHeaderCell = SelectRowCell.extend({

    className: "select-all-header-cell",

    tagName: "th",

    initialize: function (options) {

      this.column = options.column;
      if (!(this.column instanceof Backgrid.Column)) {
        this.column = new Backgrid.Column(this.column);
      }

      this.listenTo(this.collection, "selected", function (model, selected) {
        if (!selected) {
          this.$el.find(":checkbox").prop("checked", selected);
          this.allSelected = selected;
        }
      });

      this.allSelected = false;
    },

    onChange: function (e) {
      var selected = $(e.target).prop("checked");

      this.collection.each(function (model) {
        model.trigger("select", model, selected);
      });

      this.allSelected = selected;
    }

  });

}(window, jQuery, _, Backbone, Backgrid));
