/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2012 Jimmy Yuen Ho Wong
  Licensed under the MIT @license.
*/

/*global root:true */

var require = require || function (packageName) {
  throw new ReferenceError(packageName + " is required but missing.");
};

var _ = root._ || require("underscore");
var Backbone = root.Backbone || require("backbone");

// Monkey-patch Backbone <= 0.9.2 with dispose() on the View
if (!Backbone.View.prototype.dispose) {

  _.extend(Backbone.View.prototype, {

    dispose: function () {
      this.undelegateEvents();
      if (this.model && this.model.off) this.model.off(null, null, this);
      if (this.collection && this.collection.off) this.collection.off(null, null, this);
      return this;
    },

    remove: function () {
      this.dispose();
      this.$el.remove();
      return this;
    }

  });

}

function trim(s) {
  if (String.prototype.trim) {
    return String.prototype.trim.call(s, s);
  }

  return s.replace(/^\s+|\s+$/g, "");
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

var Backgrid = root.Backgrid = {};

Backgrid.VERSION = "0.1";
