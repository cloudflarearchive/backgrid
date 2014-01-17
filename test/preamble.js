/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/
describe("Backgrid#resolveNameToClass", function () {

  it("will return a reference to a Backgrid or a Backgrid.Extension object from a dasherized string and a suffix", function () {
    Backgrid.SelectRowCell = {};
    expect(Backgrid.resolveNameToClass("select-row", "Cell")).toBeDefined();
    expect(Backgrid.resolveNameToClass("select", "Cell")).toBeDefined();
    delete Backgrid.SelectRowCell;
  });

  it("will return the `name` object if it is not a string", function () {
    expect(Backgrid.resolveNameToClass({})).toEqual({});
  });

  it("throws ReferenceError if an object cannot be found in the Backgrid or Backgrid.Extension namespace", function () {
    expect(function () {
      Backgrid.resolveNameToClass("snoopy", "Cell");
    }).toThrow(new ReferenceError("Class 'SnoopyCell' not found"));
  });

});

describe("Backgrid#callByNeed", function () {

  it("will return the first argument if it is not a function", function () {
    expect(Backgrid.callByNeed(1)).toBe(1);
  });

  it("will return the value of the first argument after evaluating it as a function if it is a function", function () {
    expect(Backgrid.callByNeed(function () { return 1; })).toBe(1);
  });

  it("will use the second parameter as the context when evaluating the first parameter as a function", function () {
    expect(Backgrid.callByNeed(function () { return this[0]; }, [1,2,3])).toBe(1);
  });

  it("will use the third parameter and beyond as arguments to the first argument when evaluating it as a function", function () {
    expect(Backgrid.callByNeed(function (a) { return this[0] + a; }, [1,2,3], 1)).toBe(2);
  });

});

describe("Backgrid.Command", function () {

  it("can be initialized with a DOM Event instance", function () {
    var e = $.Event("keydown", {keyCode: 38});
    var keys = new Backgrid.Command(e);
    expect(keys.keyCode).toBe(38);
  });

  it("#moveUp() returns true when the up key was pressed", function () {
    var e = $.Event("keydown", {keyCode: 38});
    var keys = new Backgrid.Command(e);
    expect(keys.moveUp()).toBe(true);
  });

  it("#moveDown() returns true when the down key was pressed", function () {
    var e = $.Event("keydown", {keyCode: 40});
    var keys = new Backgrid.Command(e);
    expect(keys.moveDown()).toBe(true);
  });

  it("#moveLeft() returns true when shift-tab were pressed", function () {
    var e = $.Event("keydown", {keyCode: 9, shiftKey: true});
    var keys = new Backgrid.Command(e);
    expect(keys.moveLeft()).toBe(true);
  });

  it("#moveRight() returns true when the tab key was pressed", function () {
    var e = $.Event("keydown", {keyCode: 9});
    var keys = new Backgrid.Command(e);
    expect(keys.moveRight()).toBe(true);
  });

  it("#save() returns true when the enter key was pressed", function () {
    var e = $.Event("keydown", {keyCode: 13});
    var keys = new Backgrid.Command(e);
    expect(keys.save()).toBe(true);
  });

  it("#cancel() returns true when the esc key was pressed", function () {
    var e = $.Event("keydown", {keyCode: 27});
    var keys = new Backgrid.Command(e);
    expect(keys.cancel()).toBe(true);
  });

  it("#passThru() returns true when none of the above was true", function () {
    var e = $.Event("keydown", {keyCode: 32});
    var keys = new Backgrid.Command(e);
    expect(keys.passThru()).toBe(true);
  });

});
