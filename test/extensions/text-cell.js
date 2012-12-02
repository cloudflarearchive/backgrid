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
        name: "name"
      }),
      column: {
        name: "name",
        cell: "text"
      }
    });

    $("body").append(editor.el);

    editor.render();
  });

  afterEach(function () {
    editor.remove();
  });

  it("renders a dialog form with a textarea, a submit button and close button", function () {
    expect(editor.$el.find("form").length).toBe(1);
    expect(editor.$el.find("form textarea").length).toBe(1);
    expect(editor.$el.find("form input[type=submit]").length).toBe(1);
    expect(editor.$el.find("button.close").length).toBe(1);
  });

  it("saves the text from the textarea to the model and trigger 'done' when the form is submitted", function () {
    editor.$el.find("textarea").val("another name");
    editor.$el.find("form").submit();
    expect(editor.model.get(editor.column.get("name"))).toBe("another name");
  });

});
