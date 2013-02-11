/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/
describe("A CellFormatter", function () {

  it("must have a function fromRaw that accepts 1 parameter and passes the argument thru", function () {

    var formatter = new Backgrid.CellFormatter;

    expect(formatter.fromRaw).toBeDefined();
    expect(formatter.fromRaw("raw")).toBe("raw");
  });

  it("must have a function toRaw that accepts 1 parameter and passes the argument thru", function () {

    var formatter = new Backgrid.CellFormatter;

    expect(formatter.toRaw).toBeDefined();
    expect(formatter.toRaw("formatted")).toBe("formatted");
  });

});

describe("A NumberFormatter", function () {

  it("throws RangeError if a options.decimals is less than 0 or greater than 20", function () {

    expect(function () {
      new Backgrid.NumberFormatter({
        decimals: -1
      });
    }).toThrow(new RangeError("decimals must be between 0 and 20"));

    expect(function () {
      new Backgrid.NumberFormatter({
        decimals: 21
      });
    }).toThrow(new RangeError("decimals must be between 0 and 20"));

  });

  it(".fromRaw() converts a number to a number string with 2 decimals, with " +
     "1000s separated by ',' and the decimal part separated by '.' by default", function () {
    var formatter = new Backgrid.NumberFormatter();
    expect(formatter.fromRaw(1000003.1415926)).toBe("1,000,003.14");
  });

  it(".fromRaw() can convert a number to a number string with any number of " +
     "decimals between 0 and 20 inclusive, and 1000s separated by any string" +
     " and the decimal part separated by and string", function () {

    var formatter = new Backgrid.NumberFormatter({
      decimals: 3,
      orderSeparator: '.',
      decimalSeparator: ','
    });

    expect(formatter.fromRaw(1000003.1415926)).toBe("1.000.003,142");
  });

  it(".toRaw() converts a number string with any number of decimals, with " +
     "1000s separated by ',' and the decimal part separated by '.' to a " +
     "number by default", function () {

    var formatter = new Backgrid.NumberFormatter();
    expect(formatter.toRaw("1,000,003.141592653589793238462")).toBe(1000003.14);

  });

  it(".toRaw() can convert a number string with any number of decimals, 1000s" +
     " separated by any string and the decimal part separated by any string to" +
     " a number", function () {

    var formatter = new Backgrid.NumberFormatter({
      decimals: 3,
      orderSeparator: '.',
      decimalSeparator: ','
    });

    expect(formatter.toRaw("1.000.003,141592653589793238462")).toBe(1000003.142);

  });

});

describe("A DatetimeFormatter", function () {

  it("throws Error if includeDate and includeTime are both false", function () {

    expect(function () {
      new Backgrid.DatetimeFormatter({
        includeDate: false,
        includeTime: false
      });
    }).toThrow(new Error("Either includeDate or includeTime must be true"));

  });

  it(".fromRaw() can convert an ISO datetime string to an ISO date string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeTime: false
    });
    expect(formatter.fromRaw(new Date(Date.UTC(2012, 1, 29, 5, 30, 0, 100)).toISOString())).toBe("2012-02-29");
  });

  it(".fromRaw() can convert an ISO datetime string to an ISO time string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false
    });
    expect(formatter.fromRaw(new Date(Date.UTC(2012, 1, 29, 5, 30, 0, 100)).toISOString())).toBe("05:30:00");
  });

  it(".fromRaw() can convert an ISO datetime string to an ISO time string with milliseconds", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false,
      includeMilli: true
    });
    expect(formatter.fromRaw(new Date(Date.UTC(2012, 1, 29, 5, 30, 0, 100)).toISOString())).toBe("05:30:00.100");
  });

  it(".fromRaw() can convert an ISO datetime string to an ISO datetime string with milliseconds", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeMilli: true
    });
    expect(formatter.fromRaw(new Date(Date.UTC(2012, 1, 29, 5, 30, 0, 100)).toISOString())).toBe("2012-02-29T05:30:00.100Z");
  });

  it(".fromRaw() can convert an ISO date string to an ISO datetime string", function () {
    var formatter = new Backgrid.DatetimeFormatter;
    expect(formatter.fromRaw("2012-02-29")).toBe("2012-02-29T00:00:00Z");
  });

  it(".fromRaw() can convert an ISO date string to an ISO date string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeTime: false
    });
    expect(formatter.fromRaw("2012-02-29")).toBe("2012-02-29");
  });

  it(".fromRaw() can convert an ISO time string to an ISO time string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false
    });
    expect(formatter.fromRaw("05:30:29.123")).toBe("05:30:29");
  });

  it(".fromRaw() can convert an ISO time string to an ISO time string with milliseconds", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false,
      includeMilli: true
    });
    expect(formatter.fromRaw("05:30:29.123")).toBe("05:30:29.123");
  });

  it(".fromRaw() ignores null values", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: true
    });
    expect(formatter.fromRaw(null)).toBeNull();
  });

  it(".fromRaw() ignores undefined values", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: true
    });
    expect(formatter.fromRaw(undefined)).toBeUndefined();
  });

  it(".fromRaw() throws an exception on invalid values", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: true
    });

    expect(function() {
      formatter.fromRaw(false);
    }).toThrow();
  });

  it(".toRaw() returns undefined when converting an ISO datetime string to an ISO date string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeTime: false
    });
    expect(formatter.toRaw(new Date(Date.UTC(2012, 1, 29, 5, 30, 0, 100)).toISOString())).toBe(undefined);
  });

  it(".toRaw() returns undefined when converting an ISO datetime string to an ISO time string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false
    });
    expect(formatter.toRaw(new Date(Date.UTC(2012, 1, 29, 5, 30, 0, 100)).toISOString())).toBe(undefined);
  });

  it(".toRaw() returns undefined when converting an ISO datetime string to an ISO time string with milliseconds", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false,
      includeMilli: true
    });
    expect(formatter.toRaw(new Date(Date.UTC(2012, 1, 29, 5, 30, 0, 100)).toISOString())).toBe(undefined);
  });

  it(".toRaw() can convert an ISO datetime string to an ISO datetime string", function () {
    var formatter = new Backgrid.DatetimeFormatter;
    expect(formatter.toRaw(new Date(Date.UTC(2012, 1, 29, 5, 30, 0, 100)).toISOString())).toBe("2012-02-29T05:30:00Z");
  });

  it(".toRaw() can convert an ISO datetime string to an ISO datetime string with milliseconds", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeMilli: true
    });
    expect(formatter.toRaw(new Date(Date.UTC(2012, 1, 29, 5, 30, 0, 100)).toISOString())).toBe("2012-02-29T05:30:00.100Z");
  });

  it(".toRaw() returns undefined when converting an ISO date string to an ISO datetime string", function () {
    var formatter = new Backgrid.DatetimeFormatter;
    expect(formatter.toRaw("2012-02-29")).toBe(undefined);
  });

  it(".toRaw() returns undefined when converting an ISO date string to an ISO datetime string with milliseconds", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeMilli: true
    });
    expect(formatter.toRaw("2012-02-29")).toBe(undefined);
  });

  it(".toRaw() returns undefined when converting an ISO date string to an ISO time string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false
    });
    expect(formatter.toRaw("2012-02-29")).toBe(undefined);
  });

  it(".toRaw() returns undefined when converting an ISO date string to an ISO time string with milliseconds", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false,
      includeMilli: true
    });
    expect(formatter.toRaw("2012-02-29")).toBe(undefined);
  });

  it(".toRaw() can convert an ISO date string to an ISO date string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeTime: false
    });
    expect(formatter.toRaw("2012-02-29")).toBe("2012-02-29");
  });

  it(".toRaw() returns undefined when converting an ISO time string to an ISO date string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeTime: false
    });
    expect(formatter.toRaw("05:30:29.123")).toBe(undefined);
  });

  it(".toRaw() returns undefined when converting an ISO time string to an ISO datetime string", function () {
    var formatter = new Backgrid.DatetimeFormatter;
    expect(formatter.toRaw("05:30:29.123")).toBe(undefined);
  });

  it(".toRaw() returns undefined when converting an ISO time string to an ISO datetime string with milliseconds", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeMilli: true
    });
    expect(formatter.toRaw("05:30:29.123")).toBe(undefined);
  });

  it(".toRaw() can convert an ISO time string to an ISO time string", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false
    });
    expect(formatter.toRaw("05:30:29.123")).toBe("05:30:29");
  });

  it(".toRaw() can convert an ISO time string to an ISO time string with milliseconds", function () {
    var formatter = new Backgrid.DatetimeFormatter({
      includeDate: false,
      includeMilli: true
    });
    expect(formatter.toRaw("05:30:29.123")).toBe("05:30:29.123");
  });
});
