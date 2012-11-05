/*jshint unused:false */
/*globals root:true, require:true, Backbone:true, _:true, Backgrid:true */

'use strict';

var require = require || function (packageName) {
  throw new ReferenceError(packageName + ' is required but missing.');
};

var Backbone = root.Backbone || require('backbone');

var _ = root._ || require('underscore');

if (!_.string && !_.str) {
  _.string = _.str = require('underscore.string');
}

var $ = root.jQuery || root.Zepto || root.ender;

var Backgrid = Backgrid = {};
