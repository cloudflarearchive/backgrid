# Backgrid.js

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

## Supported browsers:

- Internet Explorer 8+ [[1]](#note-1)
- Chrome 4+
- Safari 4+
- Firefox 4+

### Notes:

<span id="note-1">[1]</span>: Both the desktop and mobile versions of the above browsers are supported.

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
  footer: Backgrid.Paginator
});

// Render the grid and attach the root to your HTML document
$("#example-1-result").append(grid.render().$el);
```

# Result:

Take a look [here](http://wyuenho.github.com/backgrid/#examples).

## More Examples

Are you kidding me? This is a README file. Go to the [documentation](http://wyuenho.github.com/backgrid/
"Backbone.js Documentation") to find out more :)

## License
Copyright (c) 2013 Jimmy Yuen Ho Wong  
Source code licensed under the [MIT license](LICENSE-MIT "MIT License").

Documentation licenses under [GPLv3](http://www.gnu.org/licenses/gpl-3.0.html "GPLv3")
