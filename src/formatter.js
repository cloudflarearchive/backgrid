/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

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

// A floating point number formatter. Doesn't speak scientific notation at the
// moment.
var NumberFormatter = Backgrid.NumberFormatter = function (options) {
  options = options ? _.clone(options) : {};
  _.extend(this, this.defaults, options);

  if (this.decimals < 0 || this.decimals > 20) {
    throw new RangeError("decimals must be between 0 and 20");
  }
};
NumberFormatter.prototype = new Formatter;
_.extend(NumberFormatter.prototype, {

  defaults: {
    decimals: 2,
    decimalSeparator: '.',
    orderSeparator: ','
  },

  fromRaw: function (rawData) {
    var numStr = rawData + '';
    var numDigitsBeforeDecimal = numStr.indexOf('.');
    var decimalPart = '';
    if (numDigitsBeforeDecimal === -1) {
      numDigitsBeforeDecimal = numStr.length;
    }
    else {
      var head = numStr.slice(numDigitsBeforeDecimal + 1, numDigitsBeforeDecimal + 1 + this.decimals);
      var tail = numStr[numDigitsBeforeDecimal + 1 + this.decimals];
      decimalPart = tail > 4 ? head.slice(0, head.length - 1) + (head[head.length - 1] * 1 + 1) : head;
    }

    var integerPart = numStr.slice(0, numDigitsBeforeDecimal);
    var formattedIntegerPart = '';
    for (var i = integerPart.length - 1; i >= 0; i--) {
      if ((integerPart.length - i) % 3 === 0) {
        formattedIntegerPart = this.orderSeparator + integerPart.slice(i, i + 3) + formattedIntegerPart;
      }
    }
    formattedIntegerPart = formattedIntegerPart[0] === ',' ? formattedIntegerPart.slice(1) : formattedIntegerPart;
    var leftover = integerPart.slice(0, numDigitsBeforeDecimal % 3);
    if (leftover && formattedIntegerPart) {
      formattedIntegerPart = leftover + ',' + formattedIntegerPart;
    }
    else if (!formattedIntegerPart) {
      formattedIntegerPart = leftover;
    }
    else if (!leftover && !formattedIntegerPart) { // number is integer and less than 1000
      formattedIntegerPart = integerPart;
    }
    return decimalPart ? (formattedIntegerPart + this.decimalSeparator + decimalPart) : formattedIntegerPart;
  },

  toRaw: function (formattedData) {
    var rawData = '';

    var thousands = trim(formattedData).split(this.orderSeparator);
    for (var i = 0; i < thousands.length; i++) {
      rawData += thousands[i];
    }

    var decimalParts = rawData.split(this.decimalSeparator);
    rawData = '';
    for (var i = 0; i < decimalParts.length; i++) {
      rawData = rawData + decimalParts[i] + '.';
    }

    if (rawData[rawData.length - 1] === '.') {
      rawData = rawData.slice(0, rawData.length - 1);
    }

    return (rawData * 1).toFixed(~~this.decimals) * 1;
  }

});

var DatetimeFormatter = Backgrid.DatetimeFormatter = function (options) {
  options = options ? _.clone(options) : {};
  _.extend(this, this.defaults, options);

  if (!this.includeDate && !this.includeTime) throw new Error("Either includeDate or includeTime must be true");
};
DatetimeFormatter.prototype = new Formatter;
_.extend(DatetimeFormatter.prototype, {
  
  defaults: {
    includeDate: true,
    includeTime: true
  },

  fromRaw: function (rawData) {
    var formattedData = new Date(rawData).toISOString();
    
    if (!this.includeTime) {
      return formattedData.slice(0, formattedData.indexOf('T'));
    }

    return formattedData.slice(formattedData.indexOf('T') + 1);
  },

  toRaw: function (formattedData) {
    if (!this.includeTime) {
      var tIndex = formattedData.indexOf("T");
      if (tIndex !== -1) {
        formattedData = formattedData.slice(0, tIndex);
      }
      return new Date(formattedData).toISOString();
    }

    var hms = formattedData.split(":");
    var ms = 0;
    if (hms[3]) {
      ms = hms[3].slice(hms[3].indexOf('.') + 1);
      hms[3].replace('.' + ms, '');
    }
    return new Date(null, null, null, hms[0], hms[1], hms[2], ms);
  }

});
