/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/
describe("Backgrid#requireOptions", function () {

  it("throws TypeError if a required option is not found", function () {
    expect(function () {
      Backgrid.requireOptions({}, ['foo']);
    }).toThrow(new TypeError("'foo' is required"));
  });

  it("does not throw a TypeError if a required option is found", function () {
    expect(function () {
      Backgrid.requireOptions({foo: 1}, ['foo']);
    }).not.toThrow(new TypeError("'foo' is required"));
  });

});

describe("Backgrid#resolveNameToClass", function () {

  it("will return a reference to a Backgrid or a Backgrid.Extension object from a dasherized string and a suffix", function () {
    expect(Backgrid.resolveNameToClass("select-row", "Cell")).toBeDefined();
    expect(Backgrid.resolveNameToClass("select", "Cell")).toBeDefined();
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
