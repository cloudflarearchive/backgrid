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

function trim(s) {
  if (String.prototype.trim) {
    return String.prototype.trim.call(s, s);
  }

  return s.replace(/^\s+|\s+$/g, "");
}

function capitalize(s) {
  return String.fromCharCode(s.charCodeAt(0) - 32) + s.slice(1);
}

var Backgrid = root.Backgrid = {};
