/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/

/**
   EmptyRow is a simple container view that takes a list of column
   and render a row with a single column

   @class Backgrid.EmptyRow
   @extends Backbone.View
*/
var EmptyRow = Backgrid.EmptyRow = Backbone.View.extend({
  /** @property */
  tagName: "tr",

  initialize: function (options) {
    this.text = options.emptyText || ' ' ;
    this.columns =  options.columns ;
  } ,

  /**
     Renders a empty row.
  */
  render: function () {
    this.$el.empty();

    var td = document.createElement('td') ;
    td.setAttribute('colspan', this.columns.length) ;
    td.textContent = this.text ;
    this.el.appendChild(td);

    return this;
  }
}) ;