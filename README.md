# Backgrid.js

[![Build Status](https://travis-ci.org/wyuenho/backgrid.png?branch=master)](https://travis-ci.org/wyuenho/backgrid)

Backgrid.js is a set of components for building semantic and easily stylable
data grid widgets. It offers a simple, intuitive programming interface that
makes easy things easy, but hard things possible when dealing with tabular data.

## Features

The goal of Backgrid.js is to produce a set of core Backbone UI elements that
offer you all the basic displaying, sorting and editing functionalities you'd
expect, and to create an elegant API that makes extending Backgrid.js with extra
functionalities easy.

## Advantages

- No Hungarian notations.
- Solid foundation. Based on Backbone.js.
- Semantic and easily stylable. Just style with plain CSS like you would a normal HTML table.
- Low learning curve. Works with plain old Backbone models and collections. Easy things are easy, hards things possible.
- Highly modular and customizable. Components are just simple Backbone View classes, customization is easy if you already know Backbone.
- Lightweight. Extra features are separated into extensions, which keeps the bloat away.
- Good documentation.
- Well tested. Comes with [100s of test cases](http://wyuenho.github.io/backgrid/test/).

## Supported browsers [[1]](#note-1):

- Internet Explorer 8 [[2]](#note-2)
- Internet Explorer 9+
- Chrome 4+
- Safari 4+
- Firefox 4+
- Opera 9+

### Notes:

- <span id="note-1">[1]</span>: Both the desktop and mobile versions of the above browsers are supported.
- <span id="note-2">[2]</span>: With the exception of the Filter extension's search icon CSS.

## Example

```javascript
var Territory = Backbone.Model.extend({});

var Territories = Backbone.Collection.extend({
  model: Territory,
  url: "examples/territories.json"
});

var territories = new Territories();

// Fetch some countries from the url
territories.fetch();

// Column definitions
var columns = [{
  name: "id", // The key of the model attribute
  label: "ID", // The name to display in the header
  editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
  // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
  cell: Backgrid.IntegerCell.extend({
    orderSeparator: ''
  })
}, {
  name: "name",
  label: "Name",
  // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
  cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
}, {
  name: "pop",
  label: "Population",
  cell: "integer" // An integer cell is a number cell that displays humanized integers
}, {
  name: "percentage",
  label: "% of World Population",
  cell: "number" // A cell type for floating point value, defaults to have a precision 2 decimal numbers
}, {
  name: "date",
  label: "Date",
  cell: "date",
}, {
  name: "url",
  label: "URL",
  cell: "uri" // Renders the value in an HTML <a> element
}];

// Initialize a new Grid instance
var grid = new Backgrid.Grid({
  columns: columns,
  collection: territories,
});

// Render the grid and attach the Grid's root to your HTML document
$("#example-1-result").append(grid.render().el);
```

# Result:

Take a look [here](http://backgridjs.com/index.html#basic-example).

## More Examples

Are you kidding me? This is a README file. Go to the [documentation](http://backgridjs.com/
"Backbone.js Documentation") to find out more :)

## Commercial Support

If there's a feature that you would like me to implement or a bug you'd like me
to fix, you can contact me at this [email address](mailto:wyuenho@gmail.com).

## License
Copyright (c) 2013 Jimmy Yuen Ho Wong  
Licensed under the [MIT license](LICENSE-MIT "MIT License").
