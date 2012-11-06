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

if (!_.string && !_.str) {
  _.string = _.str = require("underscore.string");
}

var Backgrid = root.Backgrid = {};
