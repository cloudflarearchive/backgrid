/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/

var window = root;

// Copyright 2009, 2010 Kristopher Michael Kowal
// https://github.com/kriskowal/es5-shim
// ES5 15.5.4.20
// http://es5.github.com/#x15.5.4.20
var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
  "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
  "\u2029\uFEFF";
if (!String.prototype.trim || ws.trim()) {
  // http://blog.stevenlevithan.com/archives/faster-trim-javascript
  // http://perfectionkills.com/whitespace-deviations/
  ws = "[" + ws + "]";
  var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
  trimEndRegexp = new RegExp(ws + ws + "*$");
  String.prototype.trim = function trim() {
    if (this === undefined || this === null) {
      throw new TypeError("can't convert " + this + " to object");
    }
    return String(this)
      .replace(trimBeginRegexp, "")
      .replace(trimEndRegexp, "");
  };
}

function capitalize(s) {
  return String.fromCharCode(s.charCodeAt(0) - 32) + s.slice(1);
}

function lpad(str, length, padstr) {
  var paddingLen = length - (str + '').length;
  paddingLen =  paddingLen < 0 ? 0 : paddingLen;
  var padding = '';
  for (var i = 0; i < paddingLen; i++) {
    padding = padding + padstr;
  }
  return padding + str;
}

var Backgrid = root.Backgrid = {

  VERSION: "0.2.6",

  Extension: {},

  requireOptions: function (options, requireOptionKeys) {
    for (var i = 0; i < requireOptionKeys.length; i++) {
      var key = requireOptionKeys[i];
      if (_.isUndefined(options[key])) {
        throw new TypeError("'" + key  + "' is required");
      }
    }
  },

  resolveNameToClass: function (name, suffix) {
    if (_.isString(name)) {
      var key = _.map(name.split('-'), function (e) { return capitalize(e); }).join('') + suffix;
      var klass = Backgrid[key] || Backgrid.Extension[key];
      if (_.isUndefined(klass)) {
        throw new ReferenceError("Class '" + key + "' not found");
      }
      return klass;
    }

    return name;
  }
};
_.extend(Backgrid, Backbone.Events);

/**
   Command translates a DOM Event into commands that Backgrid
   recognizes. Interested parties can listen on selected Backgrid events that
   come with an instance of this class and act on the commands.

   It is also possible to globally rebind the keyboard shortcuts by replacing
   the methods in this class' prototype.

   @class Backgrid.Command
   @constructor
 */
var Command = Backgrid.Command = function (evt) {
  _.extend(this, {
    altKey: !!evt.altKey,
    char: evt.char,
    charCode: evt.charCode,
    ctrlKey: !!evt.ctrlKey,
    key: evt.key,
    keyCode: evt.keyCode,
    locale: evt.locale,
    location: evt.location,
    metaKey: !!evt.metaKey,
    repeat: !!evt.repeat,
    shiftKey: !!evt.shiftKey,
    which: evt.which
  });
};
_.extend(Command.prototype, {
  /**
     Up Arrow

     @member Backgrid.Command
   */
  moveUp: function () { return this.keyCode == 38; },
  /**
     Down Arrow

     @member Backgrid.Command
   */
  moveDown: function () { return this.keyCode === 40; },
  /**
     Shift Tab

     @member Backgrid.Command
   */
  moveLeft: function () { return this.shiftKey && this.keyCode === 9; },
  /**
     Tab

     @member Backgrid.Command
   */
  moveRight: function () { return !this.shiftKey && this.keyCode === 9; },
  /**
     Enter

     @member Backgrid.Command
   */
  save: function () { return this.keyCode === 13; },
  /**
     Esc

     @member Backgrid.Command
   */
  cancel: function () { return this.keyCode === 27; },
  /**
     None of the above.

     @member Backgrid.Command
   */
  passThru: function () {
    return !(this.moveUp() || this.moveDown() || this.moveLeft() ||
             this.moveRight() || this.save() || this.cancel());
  }
});

