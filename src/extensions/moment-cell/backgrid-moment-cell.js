/*
  backgrid-moment-cell
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/
(function ($, _, Backbone, Backgrid, moment) {

  /**
     MomentFormatter converts bi-directionally any datetime values in any format
     supported by [moment()](http://momentjs.com/docs/#/parsing/) to any
     datetime format
     [moment.fn.format()](http://momentjs.com/docs/#/displaying/format/)
     supports.

     @class Backgrid.Extension.MomentFormatter
     @extends Backgrid.CellFormatter
     @constructor
   */
  var MomentFormatter = Backgrid.Extension.MomentFormatter = function (options) {
    _.extend(this, this.defaults, options);
  };
  MomentFormatter.prototype = new Backgrid.CellFormatter;
  _.extend(MomentFormatter.prototype, {

    /**
       @cfg {Object} options

       @cfg {boolean} [options.modelInUnixOffset=false] Whether the model values
       should be read/written as the number of milliseconds since UNIX Epoch.

       @cfg {boolean} [options.modelInUnixTimestamp=false] Whether the model
       values should be read/written as the number of seconds since UNIX Epoch.

       @cfg {boolean} [options.modelInUTC=true] Whether the model values should
       be read/written in UTC mode or local mode.

       @cfg {string} [options.modelLang=moment.lang()] The locale the model
       values should be read/written in.

       @cfg {string} [options.modelFormat=moment.defaultFormat] The format this
       moment formatter should use to read/write model values. Only meaningful if
       the values are strings.

       @cfg {boolean} [options.displayInUnixOffset=false] Whether the display
       values should be read/written as the number of milliseconds since UNIX
       Epoch.

       @cfg {boolean} [options.displayInUnixTimestamp=false] Whether the display
       values should be read/written as the number of seconds since UNIX Epoch.

       @cfg {boolean} [options.displayInUTC=true] Whether the display values
       should be read/written in UTC mode or local mode.

       @cfg {string} [options.displayLang=moment.lang()] The locale the display
       values should be read/written in.

       @cfg {string} [options.displayFormat=moment.defaultFormat] The format
       this moment formatter should use to read/write dislay values.
     */
    defaults: {
      modelInUnixOffset: false,
      modelInUnixTimestamp: false,
      modelInUTC: true,
      modelLang: moment.lang(),
      modelFormat: moment.defaultFormat,
      displayInUnixOffset: false,
      displayInUnixTimestamp: false,
      displayInUTC: true,
      displayLang: moment.lang(),
      displayFormat: moment.defaultFormat
    },

    /**
       Converts datetime values from the model for display.

       @member Backgrid.Extension.MomentFormatter
       @param {*} rawData
       @return {string}
     */
    fromRaw: function (rawData) {
      if (rawData == null) return '';

      var m = this.modelInUnixOffset ? moment(rawData) :
        this.modelInUnixTimestamp ? moment.unix(rawData) :
        this.modelInUTC ?
        moment.utc(rawData, this.modelFormat, this.modelLang) :
        moment(rawData, this.modelFormat, this.modelLang);

      if (this.displayInUnixOffset) return +m;

      if (this.displayInUnixTimestamp) return m.unix();

      if (this.displayLang) m.lang(this.displayLang);

      if (this.displayInUTC) m.utc(); else m.local();

      return m.format(this.displayFormat);
    },

    /**
       Converts datetime values from user input to model values.

       @member Backgrid.Extension.MomentFormatter
       @param {string} formattedData
       @return {string}
     */
    toRaw: function (formattedData) {

      var m = this.displayInUnixOffset ? moment(+formattedData) :
        this.displayInUnixTimestamp ? moment.unix(+formattedData) :
        this.displayInUTC ?
        moment.utc(formattedData, this.displayFormat, this.displayLang) :
        moment(formattedData, this.displayFormat, this.displayLang);

      if (!m || !m.isValid()) return;

      if (this.modelInUnixOffset) return +m;

      if (this.modelInUnixTimestamp) return m.unix();

      if (this.modelLang) m.lang(this.modelLang);

      if (this.modelInUTC) m.utc(); else m.local();

      return m.format(this.modelFormat);
    }

  });

  /**
     Renders a datetime cell that uses a Backgrid.Extension.MomentFormatter to
     convert and validate values.

     @class Backgrid.Extension.MomentCell
     @extends Backgrid.Cell
   */
  var MomentCell = Backgrid.Extension.MomentCell = Backgrid.Cell.extend({

    editor: Backgrid.InputCellEditor,

    /** @property */
    className: "moment-cell",

    /** @property {Backgrid.CellFormatter} [formatter=Backgrid.Extension.MomentFormatter] */
    formatter: MomentFormatter,

    /**
       Initializer. Accept Backgrid.Extension.MomentFormatter.options and
       Backgrid.Cell.initialize required parameters.
     */
    initialize: function (options) {

      Backgrid.Cell.prototype.initialize.apply(this, arguments);

      var formatterDefaults = MomentFormatter.prototype.defaults;
      var formatterDefaultKeys = _.keys(formatterDefaults);
      var classAttrs = _.pick(this, formatterDefaultKeys);
      var formatterOptions = _.pick(options, formatterDefaultKeys);

      this.formatter = new this.formatter(_.extend({}, formatterDefaults, classAttrs, formatterOptions));

      this.editor = this.editor.extend({
        attributes: _.extend({}, this.editor.prototype.attributes || this.editor.attributes || {}, {
          placeholder: this.formatter.displayFormat
        })
      });
    }

  });

  _.extend(MomentCell.prototype, MomentFormatter.prototype.defaults);

}(jQuery, _, Backbone, Backgrid, moment));
