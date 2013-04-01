/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/
describe("A Empty Row", function () {
  var row;

  beforeEach(function(){
    row = new Backgrid.EmptyRow({
      columns: [{
        name: "title",
        cell: "string"
      },{
        name: "author",
        cell: "string"
      }]
    });

    row.render();
  }) ;

  it("renders a table row", function() {
    expect(row.el.tagName).toEqual("TR") ;
  }) ;

  it("renders a single column", function() {
    expect($(row.el).find('td').size()).toEqual(1) ;
  }) ;

  it("spans the column", function() {
    expect($(row.el).find('td').attr('colspan')).toEqual("2") ;
  }) ;

  it("sets the content to a space", function() {
    expect($(row.el).find('td').text()).toEqual(" ") ;
  }) ;

  it("accepts an option for the text in the row", function() {
    row = new Backgrid.EmptyRow({
      columns: [{
        name: "title"
      },{
        name: "author"
      }],
      emptyText: 'No data'
    });

    row.render();

    expect($(row.el).find('td').text()).toEqual("No data") ;
  }) ;

  it("clears the content between two renderings", function() {
    row.render() ;

    expect($(row.el).find('td').size()).toEqual(1) ;
  }) ;
}) ;