/*jshint multistr:true */
/*global _:false */

var JST = {
  installation: _.template('\
<head>\n\
  <script src="/js/jquery.js"></script>\n\
  <script src="/js/underscore.js"></script>\n\
  <script src="/js/backbone.js"></script>\n\
  <script src="/js/underscore.string.js"></script>\n\
  <script src="/js/backgrid.js"></script>\n\
</head>\n\
'),

  example1: _.template('\
var aliceInWonderland = new Backbone.Model({\n\
  title: "Alice in Wonderland",\n\
  year: 1865,\n\
  price: "19.95"\n\
});\n\
...\n\
var books = new Backbone.Collection([\n\
  aliceInWonderland,\n\
  oliverTwist, ...\n\
]);\n\
'),

  example2: _.template('\
// Define some columns first\n\
var columns = [{\n\
  name: "title",\n\
  label: "Title",\n\
  cell: "string"\n\
}, {\n\
  name: "year",\n\
  label: "Year",\n\
  cell: Backgrid.IntegerCell.extend({ orderSeparator: \'\' })\n\
}, {\n\
  name: "price",\n\
  label: "Price",\n\
  cell: "number"\n\
}];\n\
\n\
// Create a new Grid object\n\
var bookGrid = new Backgrid.Grid({\n\
  columns: columns,\n\
  collection: books\n\
});\n\
\n\
// Render and append the Grid view\'s root to a container\n\
$("#my-table-container").append(bookGrid.render().$el);\n\
')
};
