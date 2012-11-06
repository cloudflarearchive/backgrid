/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

'use strict';

// Just a convenient class for interested parties to subclass.
// The default Cell classes don't require the formatter to be a subclass of
// Formatter as long as the fromRaw(rawData) and toRaw(formattedData) methods
// are defined.
var Formatter = Backgrid.Formatter = function () {};
_.extend(Formatter.prototype, {
  // Takes raw data from a model to its formatted form and return it
  fromRaw: function (rawData) {
    return rawData;
  },
  // Takes formatted data from a cell editor to its raw form for the model and return it
  toRaw: function (formattedData) {
    return formattedData;
  }
});
