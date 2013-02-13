/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/
describe("A TextCell", function () {

  var cell;

  beforeEach(function () {
    cell = new Backgrid.Extension.TextCell({
      model: new Backbone.Model({
        name: "name"
      }),
      column: {
        name: "name",
        cell: "text"
      }
    });

  });

  it("applies a text-cell class to the cell", function () {
    cell.render();
    expect(cell.$el.hasClass("text-cell")).toBe(true);
  });

});

describe("A TextareaEditor", function () {

  var editor;

  beforeEach(function () {
    editor = new Backgrid.Extension.TextareaEditor({
      formatter: Backgrid.Extension.TextCell.prototype.formatter,
      model: new Backbone.Model({
        name: "name <script></script>"
      }),
      column: {
        name: "name",
        cell: "text"
      }
    });

    spyOn(editor, "trigger").andCallThrough();

    $("body").append(editor.el);

    editor.render();
  });

  afterEach(function () {
    editor.remove();
  });

  it("renders a dialog form with a textarea, a submit button and close button according to config", function () {
    expect(editor.$el.find("form").length).toBe(1);
    expect(editor.$el.find("form textarea").length).toBe(1);
    expect(editor.$el.find("form textarea").html()).toBe("name &lt;script&gt;&lt;/script&gt;");
    expect(editor.$el.find("form input[type=submit]").length).toBe(1);
    expect(editor.$el.find("button.close").length).toBe(1);
    expect(editor.$el.find("form textarea").prop("cols")).toBe(Backgrid.Extension.TextareaEditor.prototype.cols);
    expect(editor.$el.find("form textarea").prop("rows")).toBe(Backgrid.Extension.TextareaEditor.prototype.rows);
  });

  it("asks for confirmation if textarea is dirty when canceling", function () {
    var spiedConfirm = spyOn(window, "confirm");

    spiedConfirm.andReturn(false);
    editor.$el.find("textarea").val("name\r");
    editor.$el.find(".close").click();
    editor.$el.one($.support.transition.end, function () {
      expect(editor.trigger).toHaveBeenCalledWith("done");
      expect(window.confirm).toHaveBeenCalledWith("Would you like to save your changes?");
      expect(editor.model.get(editor.column.get("name"))).toBe("name");
    });
    spiedConfirm.reset();

    spiedConfirm.andReturn(true);
    editor.$el.find(".close").click();
    editor.$el.one($.support.transition.end, function () {
      expect(editor.trigger).toHaveBeenCalledWith("done");
      expect(window.confirm).toHaveBeenCalledWith("Would you like to save your changes?");
      expect(editor.model.get(editor.column.get("name"))).toBe("name\r");
    });
  });

  it("saves the text from the textarea to the model and trigger 'done' when the form is submitted", function () {
    editor.$el.find("textarea").val("another name");
    editor.$el.find("form").submit();
    // have to wait for bootstrap's css transition to finish
    // before hidden is fired and `trigger` called
    editor.$el.one($.support.transition.end, function () {
      expect(editor.trigger.calls.length).toBe(1);
      expect(editor.trigger).toHaveBeenCalledWith("done");
      expect(editor.model.get(editor.column.get("name"))).toBe("another name");
    });
  });

  it("triggers 'error' if the formatter returns undefined or fails the model's validation", function () {
    var oldToRaw = editor.formatter.toRaw;
    editor.formatter.toRaw = function () {};
    editor.$el.find("textarea").val("another name");
    editor.$el.find("form").submit();
    expect(editor.trigger.calls.length).toBe(1);
    expect(editor.trigger).toHaveBeenCalledWith("error");

    editor.formatter.toRaw = oldToRaw;
    editor.model.validate = function () { return "error found"; };
    editor.trigger.reset();
    editor.$el.find("textarea").val("another name");
    editor.$el.find("form").submit();
    expect(editor.trigger.calls.length).toBe(1);
    expect(editor.trigger).toHaveBeenCalledWith("error");
  });

});
