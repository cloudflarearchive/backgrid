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

var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events', 'use$'];

var View = Backgrid.View = function(options) {
  this.cid = _.uniqueId('view');
  options = options || {};
  _.extend(this, _.pick(options, viewOptions));
  this._ensureElement(options);
  this.initialize.apply(this, arguments);
  this.delegateEvents();
};

var delegateEventSplitter = /^(\S+)\s*(.*)$/;

_.extend(Backgrid.View.prototype, Backbone.Events, {

  use$: true,

  tagName: 'div',

  $: function(selector) {
    return this.$el ? this.$el.find(selector) : this.el.querySelectorAll(selector);
  },

  initialize: function(){},

  render: function() {
    return this;
  },

  show: function () {
    this.el.style.display = '';
    return this;
  },

  hide: function () {
    this.el.style.display = "none";
    return this;
  },

  empty: function () {
    var el = this.el;
    while (el.firstChild) el.removeChild(el.firstChild);
    return this;
  },

  remove: function() {
    if (this.$el) this.$el.remove();
    else if (this.el) {
      var parentNode = this.el.parentNode;
      if (parentNode) parentNode.removeChild(this.el);
    }
    this.stopListening();
    return this;
  },

  setElement: function(element, options) {
    options = _.extend({use$: Backbone.$ && this.use$, delegate: true}, options || {});
    var delegate = options.delegate;
    if (this.$el) this.undelegateEvents();
    if (options.use$) {
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
    }
    else if (typeof element == 'string') {
      if (element[0] == '<') {
        var el = window.document.createElement("div");
        el.innerHTML = element;
        this.el = el.firstChild;
      }
      else this.el = window.document.querySelector(element);
    }
    else this.el = element;
    if (delegate !== false) this.delegateEvents();
    return this;
  },

  _processEvents: function(events, func) {
    for (var key in events) {
      var method = events[key];
      if (!_.isFunction(method)) method = this[events[key]];
      if (!method) continue;

      method = _.bind(method, this);
      var match = key.match(delegateEventSplitter);
      func(match[1], match[2], method);
    }
  },

  delegateEvents: function(events) {
    if (!(events || (events = _.result(this, 'events')))) return this;
    this.undelegateEvents();
    var el = this.el, $el = this.$el, cid = this.cid;
    this._processEvents(events, function (eventName, selector, method) {
      var namespacedEventName = eventName + '.delegateEvents' + cid;
      if (selector === '') {
        if ($el) $el.on(namespacedEventName, method);
        else if (el) {
          if (el.addEventListener) el.addEventListener(eventName, method);
          else if (el.attachEvent) el.attachEvent('on' + eventName, method);
        }
      } else {
        if ($el) $el.on(namespacedEventName, selector, method);
        else if (el) {
          var descendants = el.querySelectorAll(selector);
          for (var i = 0, l = descendants.length; i < l; i++) {
            var descendant = descendants[i];
            if (el.addEventListener) {
              descendant.addEventListener(eventName, method);
            }
            else if (el.attachEvent) {
              descendant.attachEvent('on' + eventName, method);
            }
          }
        }
      }
    });
    return this;
  },

  undelegateEvents: function() {
    var el = this.el, $el = this.$el;
    if ($el) this.$el.off('.delegateEvents' + this.cid);
    else if (el) {
      var events = _.result(this, 'events');
      if (!events) return this;
      this._processEvents(events, function (eventName, selector, method) {
        if (selector === '') {
          if (el.removeEventListener) el.removeEventListener(eventName, method);
          else if (el.detachEvent) el.detachEvent('on' + eventName, method);
        } else {
          var descendants = el.querySelectorAll(selector);
          for (var i = 0, l = descendants.length; i < l; i++) {
            var descendant = descendants[i];
            if (el.removeEventListener) {
              descendant.removeEventListener(eventName, method);
            }
            else if (el.detachEvent) {
              descendant.detachEvent('on' + eventName, method);
            }
          }
        }
      });
    }
    return this;
  },

  _ensureElement: function(options) {
    options = _.extend(options, {delegate: false});
    if (!this.el) {
      var el = this.el = window.document.createElement(_.result(this, 'tagName'));
      var attrs = _.extend({}, _.result(this, 'attributes'));
      if (this.id) attrs.id = _.result(this, 'id');
      if (this.className) attrs['class'] = _.result(this, 'className');
      for (var k in attrs) {
        el.setAttribute(k, attrs[k]);
      }
      this.setElement(el, options);
    } else {
      this.setElement(_.result(this, 'el'), options);
    }
  }

});

View.extend = Backbone.View.extend;
