module('Backgrid.Cell');

test('Initialization', function() {
  var cell = new Backgrid.Cell({
    model: new Backbone.Model({
      title: 'Alice in Wonderland'
    }),
    column: {
      type: 'string',
      name: 'title'
    }
  });

  ok(cell);
  ok(cell.el instanceof HTMLTableCellElement);
});

test('Rendering', function() {
  var cell = new Backgrid.Cell({
    model: new Backbone.Model({
      title: 'Alice in Wonderland'
    }),
    column: {
      type: 'string',
      name: 'title',
    }
  });

  strictEqual(cell.render(), cell);
  strictEqual(cell.$el.text(), 'Alice in Wonderland');
});
