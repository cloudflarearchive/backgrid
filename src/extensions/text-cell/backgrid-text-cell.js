/*
  backgrid-text-cell
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

(function (window, $, _, Backbone, Backgrid)  {

  /**
     Renders a form with a text area and a save button in a modal dialog.

     @class Backgrid.Extension.TextareaEditor
     @extends Backgrid.InputCellEditor
   */
  var TextareaEditor = Backgrid.Extension.TextareaEditor = Backgrid.InputCellEditor.extend({

    /** @property */
    tagName: "div",

    /** @property */
    className: "modal hide fade",

    attributes: {},

    /** @property {function(Object, ?Object=): string} template */
    template: _.template('<form><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3><%- column.get("label") %></h3></div><div class="modal-body"><textarea cols="<%= cols %>" rows="<%= rows %>"><%- content %></textarea></div><div class="modal-footer"><input class="btn" type="submit" value="Save"/></div></form>'),

    /** @property */
    cols: 80,

    /** @property */
    rows: 10,

    /** @property */
    events: {
      "submit": "save",
      "hide": "cancel",
      "hidden": "close"
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

      this.$el.modal(this.modalOptions);

      return this;
    },

    /**
       Event handler. Saves the text in the text area to the model.

       Triggers a Backbone `error` event if the value cannot be
       converted. Classes listening to the `error` event, usually the Cell
       classes, should respond appropriately, usually by rendering some kind of
       error feedback.

       @param {Event} e
    */
    save: function (e) {
      if (e) e.preventDefault();

      var content = this.formatter.toRaw(this.$el.find("textarea").val());

      if (_.isUndefined(content) ||
          !this.model.set(this.column.get("name"), content, {validate: true})) {
        this.trigger("error");
      }
      else {
        this.$el.modal("hide");
      }
    },

    /**
       Event handler. Revert the text in the model after asking for confirmation
       if dirty, otherwise just close the editor.

       @param {Event} e
    */
    cancel: function (e) {

      var content = this.formatter.toRaw(this.$el.find("textarea").val());

      // Dirty
      if (content !== this.model.get(this.column.get("name")).replace(/\r/g, '') &&
          window.confirm("Would you like to save your changes?")) {
        e.preventDefault();
        e.stopPropagation();
        return this.save();
      }
    },

    /**
       Triggers a `done` event after the modal is hidden.
     */
    close: function () {
      this.trigger("done");
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
