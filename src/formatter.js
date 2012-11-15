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
  // Takes a raw value from a model and returns a formatted string for display.
  fromRaw: function (rawData) {
    return rawData;
  },
  // Takes a formatted string, usually from user input, and returns a
  // appropriately typed value for persistence in the model.
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

  HUMANIZED_NUM_RE: /(\d)(?=(?:\d{3})+$)/g,

  fromRaw: function (number) {
    if (isNaN(number) || number === null) return '';

    number = number.toFixed(~~this.decimals);

    var parts = number.split('.');
    var integerPart = parts[0];
    var decimalPart = parts[1] ? (this.decimalSeparator || '.') + parts[1] : '';

    return integerPart.replace(this.HUMANIZED_NUM_RE, '$1' + this.orderSeparator) + decimalPart;
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

    var result = (rawData * 1).toFixed(~~this.decimals) * 1;
    if (_.isNumber(result) && !_.isNaN(result)) return result;
  }

});

// Only understands ISO-8601 formatted datetime strings. If a timezone is
// specified, it must be an offset.
var DatetimeFormatter = Backgrid.DatetimeFormatter = function (options) {
  options = options ? _.clone(options) : {};
  _.extend(this, this.defaults, options);

  if (!this.includeDate && !this.includeTime) throw new Error("Either includeDate or includeTime must be true");
};
DatetimeFormatter.prototype = new Formatter;
_.extend(DatetimeFormatter.prototype, {

  defaults: {
    includeDate: true,
    includeTime: true,
    includeMilli: false
  },

  DATE_RE: /^([+\-]?\d{4})-(\d{2})-(\d{2})$/,
  TIME_RE: /^(\d{2}):(\d{2}):(\d{2})(\.\d{3})?$/,
  ZONE_RE: /^([+\-]\d{2}):?(\d{2})$/,
  ISO_SPLITTER_RE: /T|Z| +/,

  fromRaw: function (rawData) {
    rawData = trim(rawData);
    var parts = rawData.split(this.ISO_SPLITTER_RE) || [];
    var date = this.includeDate ? parts[0] : '';
    var time = this.includeDate ? parts[1] : parts[0] || '';
    var zone = this.includeDate ? parts[2] : parts[1] || '';
    var YYYYMMDD = this.DATE_RE.exec(date) || [];
    var HHmmssSSS = this.TIME_RE.exec(time) || [];
    var zzZZ = this.ZONE_RE.exec(zone) || [];

    zzZZ[1] = zzZZ[1] * 1 || 0;
    zzZZ[2] = zzZZ[2] * 1 || 0;

    var jsDate = new Date(Date.UTC(YYYYMMDD[1] * 1 || 0,
                                   YYYYMMDD[2] * 1 - 1 || 0,
                                   YYYYMMDD[3] * 1 || 0,
                                   (HHmmssSSS[1] * 1 || null) + zzZZ[1],
                                   (HHmmssSSS[2] * 1 || null) + zzZZ[2],
                                   HHmmssSSS[3] * 1 || null,
                                   HHmmssSSS[4] * 1 || null));

    var result = '';

    if (this.includeDate) {
      result = lpad(jsDate.getFullYear(), 4, 0) + '-' + lpad(jsDate.getMonth() + 1, 2, 0) + '-' + lpad(jsDate.getDate(), 2, 0);
    }

    if (this.includeTime) {
      result = result + ' ' + lpad(jsDate.getHours(), 2, 0) + ':' + lpad(jsDate.getMinutes(), 2, 0) + ':' + lpad(jsDate.getSeconds(), 2, 0);

      if (this.includeMilli) {
        result = result + '.' + lpad(jsDate.getMilliseconds(), 3, 0);
      }
    }

    return result;
  },

  toRaw: function (formattedData) {
    formattedData = trim(formattedData);

    var parts = formattedData.split(this.ISO_SPLITTER_RE) || [];
    var date = this.includeDate ? parts[0] : '';
    var time = this.includeDate ? parts[1] : parts[0] || '';
    var zone = this.includeDate ? parts[2] : parts[1] || '';
    var YYYYMMDD = this.DATE_RE.exec(date) || [];
    var HHmmssSSS = this.TIME_RE.exec(time) || [];
    var zzZZ = this.ZONE_RE.exec(zone) || [];

    if (this.includeDate && typeof YYYYMMDD[0] === "undefined") return undefined;
    if (this.includeTime && typeof HHmmssSSS[0] === "undefined") return undefined;
    if (!this.includeDate && date) return undefined;
    if (!this.includeTime && time) return undefined;

    var jsDate = null;
    if (zzZZ !== []) {
      zzZZ[1] = zzZZ[1] * 1 || 0;
      zzZZ[2] = zzZZ[2] * 1 || 0;
      jsDate = new Date(Date.UTC(YYYYMMDD[1] * 1 || 0,
                                 YYYYMMDD[2] * 1 - 1 || 0,
                                 YYYYMMDD[3] * 1 || 0,
                                 (HHmmssSSS[1] * 1 || null) + zzZZ[1],
                                 (HHmmssSSS[2] * 1 || null) + zzZZ[2],
                                 HHmmssSSS[3] * 1 || null,
                                 HHmmssSSS[4] * 1 || null));
    }
    else {
      jsDate = new Date(YYYYMMDD[1] * 1 || 0,
                        YYYYMMDD[2] * 1 - 1 || 0,
                        YYYYMMDD[3] * 1 || 0,
                        HHmmssSSS[1] * 1 || null,
                        HHmmssSSS[2] * 1 || null,
                        HHmmssSSS[3] * 1 || null,
                        HHmmssSSS[4] * 1 || null);
    }

    var result = '';

    if (this.includeDate) {
      result = lpad(jsDate.getUTCFullYear(), 4, 0) + '-' + lpad(jsDate.getUTCMonth() + 1, 2, 0) + '-' + lpad(jsDate.getUTCDate(), 2, 0);
    }

    if (this.includeTime) {
      result = result + 'T' + lpad(jsDate.getUTCHours(), 2, 0) + ':' + lpad(jsDate.getUTCMinutes(), 2, 0) + ':' + lpad(jsDate.getUTCSeconds(), 2, 0);

      if (this.includeMilli) {
        result = result + '.' + lpad(jsDate.getUTCMilliseconds(), 3, 0);
      }

      result += 'Z';
    }

    return result;
  }
});
