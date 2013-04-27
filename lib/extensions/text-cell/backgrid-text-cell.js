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
      "submit": "save",
      "hide": "cancel",
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
       Event handler. Saves the text in the text area to the model.

       Triggers a Backbone `backgrid:error` event along with the editor as the
       parameter if the value cannot be converted. Classes listening to the
       `backgrid:error` event, usually the Cell classes, should respond
       appropriately, usually by rendering some kind of error feedback.

       @param {Event} e
    */
    save: function (e) {
      if (e) e.preventDefault();

      var model = this.model;
      var column = this.column;
      var val = this.$el.find("textarea").val();
      var newValue = this.formatter.toRaw(val);

      if (_.isUndefined(newValue)) {
        model.trigger("backgrid:error", model, column, val);
      }
      else {
        model.set(column.get("name"), newValue);
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
      if (content !== (this.model.get(this.column.get("name")) || '').replace(/\r/g, '') &&
          window.confirm("Would you like to save your changes?")) {
        e.preventDefault();
        e.stopPropagation();
        return this.save();
      }
    },

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
