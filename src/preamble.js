/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/

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

function lpad(str, length, padstr) {
  var paddingLen = length - (str + '').length;
  paddingLen =  paddingLen < 0 ? 0 : paddingLen;
  var padding = '';
  for (var i = 0; i < paddingLen; i++) {
    padding = padding + padstr;
  }
  return padding + str;
}

var $ = Backbone.$;

var Backgrid = root.Backgrid = {

  Extension: {},

  resolveNameToClass: function (name, suffix) {
    if (_.isString(name)) {
      var key = _.map(name.split('-'), function (e) {
        return e.slice(0, 1).toUpperCase() + e.slice(1);
      }).join('') + suffix;
      var klass = Backgrid[key] || Backgrid.Extension[key];
      if (_.isUndefined(klass)) {
        throw new ReferenceError("Class '" + key + "' not found");
      }
      return klass;
    }

    return name;
  },

  callByNeed: function () {
    var value = arguments[0];
    if (!_.isFunction(value)) return value;

    var context = arguments[1];
    var args = [].slice.call(arguments, 2);
    return value.apply(context, !!(args + '') ? args : []);
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
    "char": evt["char"],
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

Backgrid.mount = function (childView, parentView, options) {
  var el = parentView.el, children = el.childNodes;
  options = _.defaults(options || {}, {at: children.length});
  childView.preRender();
  if (options.at >= children.length) el.appendChild(childView.render().el);
  else el.insertBefore(childView, children[options.at]);
  parentView.delegateEvents();
  childView.postRender();
};

// Cross-platform `addEventListener`.
var addEventListener = function(obj, eventName, listener, useCapture) {
  if (obj.addEventListener) return obj.addEventListener(eventName, listener, useCapture);
  else return obj.attachEvent('on' + eventName, listener);
};

// Cross-platform `removeEventListener`.
var removeEventListener = function(obj, eventName, listener, useCapture) {
  if (obj.removeEventListener) return obj.removeEventListener(eventName, listener, useCapture);
  else return obj.detachEvent('on' + eventName, listener);
};

// Caches a local reference to `Element.prototype` for faster access.
var ElementProto = typeof Element != 'undefined' && Element.prototype;

// Find the right `Element#matches` for IE>=9 and modern browsers.
var matchesSelector = ElementProto && ElementProto.matches ||
    ElementProto[_.find(['webkit', 'moz', 'ms', 'o'], function(prefix) {
      return !!ElementProto[prefix + 'MatchesSelector'];
    }) + 'MatchesSelector'] ||
    // Make our own `Element#matches` for IE8
    function(selector) {
      // We'll use querySelectorAll to find all element matching the selector,
      // then check if the given element is included in that list.
      // Executing the query on the parentNode reduces the resulting nodeList,
      // document doesn't have a parentNode, though.
      var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
      for (var i = 0, l = nodeList.length; i < l; i++) {
        if (nodeList[i] == this) return true;
      }
      return false;
    };

// Cached regex to split keys for `delegate`.
var delegateEventSplitter = /^(\S+)\s*(.*)$/;

var View = Backgrid.View = Backbone.View.extend({

  // Private list to hold all the DOM event delegation listeners.
  _domEvents: [],

  preRender: function () {
    return this;
  },

  postRender: function () {
    return this;
  },

  show: function () {
    delete this.el.style.display;
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

  // Remove this view by taking the element out of the DOM, remove all the DOM
  // event listeners attached to it, and remove any applicable Backbone.Events
  // listeners.
  remove: function() {
    this.undelegateEvents();
    var el = this.el;
    var parentNode = el.parentNode;
    if (parentNode) parentNode.removeChild(el);
    this.stopListening();
    return this;
  },

  // Change the view's element (`this.el` property), including event
  // re-delegation. If element is string, create or find that element and
  // change this view's element to it. Otherwise, assume it is a DOM element
  // and change this view's element to it.
  setElement: function(element, delegate) {
    if (this.el) this.undelegateEvents();
    if (typeof element == 'string') {
      if (element[0].trim() == '<') {
        var el = document.createElement('div');
        el.innerHTML = element;
        this.el = el.firstChild;
      }
      else this.el = document.querySelector(element);
    }
    else this.el = element;
    if (delegate !== false) this.delegateEvents();
    return this;
  },

  // Set callbacks, where `this.events` is a hash of
  //
  // *{"event selector": "callback"}*
  //
  //     {
  //       'mousedown .title':  'edit',
  //       'click .button':     'save',
  //       'click .open':       function(e) { ... }
  //     }
  //
  // pairs. Callbacks will be bound to the view, with `this` set properly.
  // Uses event delegation for efficiency.
  // Omitting the selector binds the event to `this.el`.
  // This only works for delegate-able events: not `focus`, `blur`, not
  // `change`, `submit`, and `reset` in Internet Explorer, not `focusin` and
  // `focusout` in Firefox, and not `mouseenter` and `mouseleave` for Chrome <
  // 30 and Safari.
  //
  // Pass the event name, selector and the bound method to `_delegateEvents`
  // for each mapping in `events`.
  delegateEvents: function(events) {
    if (!(events || (events = _.result(this, 'events')))) return this;
    this.undelegateEvents();
    var _delegateEvents = this._delegateEvents;
    for (var key in events) {
      var method = events[key];
      if (typeof method != 'function') method = this[events[key]];
      if (!method) continue;

      var match = key.match(delegateEventSplitter);
      var eventName = match[1], selector = match[2];
      method = method.bind && method.bind(this) || _.bind(method, this);
      _delegateEvents.call(this, eventName, selector, method);
    }

    return this;
  },

  // Make a event delegation handler for the given `eventName` and `selector`
  // and attach it to `this.el`.
  // If selector is empty, the method will be bound to `this.el`. If not, a
  // new handler that will recursively traverse up the event target's DOM
  // hierarchy looking for a node that matches the selector. If one is found,
  // the event's `delegateTarget` property is set to it and the return the
  // result of calling bound `method` with the parameters given to the
  // handler.
  _delegateEvents: function(eventName, selector, method) {
    var root = this.el, domEvents = this._domEvents, handler;
    if (!selector) handler = method;
    else handler = function (e) {
      var node = e.target || e.srcElement;
      for (; node && node != root; node = node.parentNode) {
        if (matchesSelector.call(node, selector)) {
          e.delegateTarget = node;
          return method.apply(this, arguments);
        }
      }
    };

    addEventListener(root, eventName, handler, false);
    domEvents.push({eventName: eventName, handler: handler});
  },

  // Delegates to `_undelegateEvents` so `BaseView` subclasses can override
  // the default event undelegation routine.
  undelegateEvents: function() {
    this._undelegateEvents();
    return this;
  },

  // Clears all callbacks previously bound to the view with `delegateEvents`.
  // You usually don't need to use this, but may wish to if you have multiple
  // Backbone views attached to the same DOM element.
  _undelegateEvents: function() {
    var el = this.el, domEvents = this._domEvents, i, l, item;
    if (el) {
      for (i = 0, l = domEvents.length; i < l; i++) {
        item = domEvents[i];
        removeEventListener(el, item.eventName, item.handler, false);
      }
      this._domEvents = [];
    }
  },

  // Ensure that the View has a DOM element to render into. If `this.el`
  // exists, it must be a string, a function or a DOM element. If it is a
  // string or a DOM element, pass it through `setElement`. If it is a
  // function, pass its result to `setElement`. Otherwise, create an element
  // from the `id`, `className`, `tagName` and `attributes` properties, and
  // pass it to `setElement`.
  _ensureElement: function() {
    if (!this.el) {
      var el = document.createElement(_.result(this, 'tagName'));
      var attrs = _.extend({}, _.result(this, 'attributes'));
      if (this.id) attrs.id = _.result(this, 'id');
      if (this.className) attrs['class'] = _.result(this, 'className');
      for (var k in attrs) {
        el.setAttribute(k, attrs[k]);
      }
      this.setElement(el, false);
    } else {
      this.setElement(_.result(this, 'el'), false);
    }
  }

});
