/*
  backgrid-text-cell
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/

(function (window, $, _, Backbone, Backgrid)  {

  /**
     Renders a form with a text area and a save button in a modal dialog.

     @class Backgrid.Extension.TextareaEditor
     @extends Backgrid.CellEditor
  */
  var TextareaEditor = Backgrid.Extension.TextareaEditor = Backgrid.CellEditor.extend({

    /** @property */
    tagName: "div",

    /** @property */
    className: "modal hide fade",

    /** @property {function(Object, ?Object=): string} template */
    template: _.template('<form><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3><%- column.get("label") %></h3></div><div class="modal-body"><textarea cols="<%= cols %>" rows="<%= rows %>"><%- content %></textarea></div><div class="modal-footer"><input class="btn" type="submit" value="Save"/></div></form>'),

    /** @property */
    cols: 80,

    /** @property */
    rows: 10,

    /** @property */
    events: {
      "keydown textarea": "clearError",
      "submit": "saveOrCancel",
      "hide": "saveOrCancel",
      "hidden": "close",
      "shown": "focus"
    },

    /**
       @property {Object} modalOptions The options passed to Bootstrap's modal
       plugin.
    */
    modalOptions: {
      backdrop: false
    },

    /**
       Renders a modal form dialog with a textarea, submit button and a close button.
    */
    render: function () {
      this.$el.html($(this.template({
        column: this.column,
        cols: this.cols,
        rows: this.rows,
        content: this.formatter.fromRaw(this.model.get(this.column.get("name")))
      })));

      this.delegateEvents();

      this.$el.modal(this.modalOptions);

      return this;
    },

    /**
       Event handler. Saves the text in the text area to the model when
       submitting. When cancelling, if the text area is dirty, a confirmation
       dialog will pop up. If the user clicks confirm, the text will be saved to
       the model.

       Triggers a Backbone `backgrid:error` event from the model along with the
       model, column and the existing value as the parameters if the value
       cannot be converted.

       @param {Event} e
    */
    saveOrCancel: function (e) {
      if (e && e.type == "submit") {
        e.preventDefault();
        e.stopPropagation();
      }

      var model = this.model;
      var column = this.column;
      var val = this.$el.find("textarea").val();
      var newValue = this.formatter.toRaw(val);

      if (_.isUndefined(newValue)) {
        model.trigger("backgrid:error", model, column, val);

        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
      else if (!e || e.type == "submit" ||
               (e.type == "hide" &&
                newValue !== (this.model.get(this.column.get("name")) || '').replace(/\r/g, '') &&
                window.confirm("Would you like to save your changes?"))) {

        model.set(column.get("name"), newValue);
        this.$el.modal("hide");
      }
      else if (e.type != "hide") this.$el.modal("hide");
    },

    /**
       Clears the error class on the parent cell.
     */
    clearError: _.debounce(function () {
      if (!_.isUndefined(this.formatter.toRaw(this.$el.find("textarea").val()))) {
        this.$el.parent().removeClass("error");
      }
    }, 150),

    /**
       Triggers a `backgrid:edited` event along with the cell editor as the
       parameter after the modal is hidden.

       @param {Event} e
    */
    close: function (e) {
      var model = this.model;
      model.trigger("backgrid:edited", model, this.column,
                    new Backgrid.Command(e));
    },

    /**
       Focuses the textarea when the modal is shown.
    */
    focus: function () {
      this.$el.find("textarea").focus();
    }

  });

  /**
     TextCell is a string cell type that renders a form with a text area in a
     modal dialog instead of an input box editor. It is best suited for entering
     a large body of text.

     @class Backgrid.Extension.TextCell
     @extends Backgrid.StringCell
  */
  var TextCell = Backgrid.Extension.TextCell = Backgrid.StringCell.extend({

    /** @property */
    className: "text-cell",

    /** @property  */
    editor: TextareaEditor

  });

}(window, jQuery, _, Backbone, Backgrid));
