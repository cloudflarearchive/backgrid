/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/**
   Just a convenient class for interested parties to subclass.

   The default Cell classes don't require the formatter to be a subclass of
   Formatter as long as the fromRaw(rawData) and toRaw(formattedData) methods
   are defined.

   @abstract
   @class Backgrid.Formatter
*/
var Formatter = Backgrid.Formatter = function () {};
_.extend(Formatter.prototype, {

  /**
     Takes a raw value from a model and returns a formatted string for display.

     @member Backgrid.Formatter
     @param {*} rawData
     @return {string}
  */
  fromRaw: function (rawData) {
    return rawData;
  },

  /**
     Takes a formatted string, usually from user input, and returns a
     appropriately typed value for persistence in the model.

     If the user input is invalid or unable to be converted to a raw value
     suitable for persistence in the model, toRaw must return `undefined`.

     @member Backgrid.Formatter
     @param {string} formattedData
     @return {*|undefined}
  */
  toRaw: function (formattedData) {
    return formattedData;
  }

});

/**
   A floating point number formatter. Doesn't understand notation at the moment.

   @class Backgrid.NumberFormatter
   @extends Backgrid.Formatter
   @param {Object} options
   @param {number} [options.decimals=2] Number of decimals to display. Must be an integer.
   @param {string} [options.decimalSeparator='.'] The separator to use when
   displaying decimals.
   @param {string} [options.orderSeparator=','] The separator to use to
   separator thousands. May be an empty string.

   @throws {RangeError} If decimals < 0 or > 20.
*/
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

  /**
     Takes a floating point number and convert it to a formatted string where
     every thousand is separated by `orderSeparator`, with a `decimal` number of
     decimals separated by `decimalSeparator`. The number returned is rounded
     the usual way.

     @member Backgrid.NumberFormatter
     @param {number} number
     @return {string}
  */
  fromRaw: function (number) {
    if (isNaN(number) || number === null) return '';

    number = number.toFixed(~~this.decimals);

    var parts = number.split('.');
    var integerPart = parts[0];
    var decimalPart = parts[1] ? (this.decimalSeparator || '.') + parts[1] : '';

    return integerPart.replace(this.HUMANIZED_NUM_RE, '$1' + this.orderSeparator) + decimalPart;
  },

  /**
     Takes a string, possibly formatted with `orderSeparator` and/or
     `decimalSeparator`, and convert it back to a number.

     @member Backgrid.NumberFormatter
     @param {string} formattedData
     @return {number|undefined} Undefined if the string cannot be converted to
     a number.
  */
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

/**
   Formatter to converts between various datetime string formats.

   This class only understands ISO-8601 formatted datetime strings. If a
   timezone is specified, it must be an offset.

   @class Backgrid.DatetimeFormatter
   @extends Backgrid.Formatter

   @param {Object} options
   @param {boolean} [options.includeDate=true] Whether the values include the
   date part.
   @param {boolean} [options.includeTime=true] Whether the values include the
   time part.
   @param {boolean} [options.includeMilli=false] If `includeTime` is true,
   whether to include the millisecond part.

   @throws {Error} If both `includeDate` and `includeTime` are false.
*/
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

  /**
     Converts an ISO-8601 formatted datetime string, possibly with a timezone,
     to a datetime string, date string or a time string in the __local
     timezone__, depending on the options supplied to this formatter instance at
     construction.

     @member Backgrid.DatetimeFormatter
     @param {string} rawData
     @return {string} ISO-8601 string. Always in local time.
  */
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

  /**
     Converts a datetime, date or time string, to an ISO-8601 formatted
     datetime, date or time string, depending on the options supplied to this
     formatter instance at construction. If the string input does not include a
     time zone offset, the string is assumed to denote a local time, otherwise
     the date and time part are assumed to be in UTC.

     @member Backgrid.DatetimeFormatter
     @param {string} formattedData
     @return {string|undefined} ISO-8601 string. Undefined if unable to convert
     to an ISO-8601 string.
  */
  toRaw: function (formattedData) {
    formattedData = trim(formattedData);

    var parts = formattedData.split(this.ISO_SPLITTER_RE) || [];
    var date = this.includeDate ? parts[0] : '';
    var time = this.includeDate ? parts[1] : parts[0] || '';
    var zone = this.includeDate ? parts[2] : parts[1] || '';
    var YYYYMMDD = this.DATE_RE.exec(date) || [];
    var HHmmssSSS = this.TIME_RE.exec(time) || [];
    var zzZZ = this.ZONE_RE.exec(zone) || [];

    if (this.includeDate && _.isUndefined(YYYYMMDD[0])) return undefined;
    if (this.includeTime && _.isUndefined(HHmmssSSS[0])) return undefined;
    if (!this.includeDate && date) return undefined;
    if (!this.includeTime && time) return undefined;

    var jsDate = null;

    if (zzZZ && !_.isUndefined(zzZZ[0])) {
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

      if (this.includeDate) {
        result += 'T';
      }

      result += lpad(jsDate.getUTCHours(), 2, 0) + ':' + lpad(jsDate.getUTCMinutes(), 2, 0) + ':' + lpad(jsDate.getUTCSeconds(), 2, 0);

      if (this.includeMilli) {
        result = result + '.' + lpad(jsDate.getUTCMilliseconds(), 3, 0);
      }

      if (this.includeDate) {
        result += 'Z';
      }
    }

    return result;
  }
});
