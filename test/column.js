module('Backgrid.Column');

test('Init with no cell', function() {
  throws(function() {
    new Backgrid.Column({
      name: 'name'
    });
  }, Error);
});

test('Init with no name', function() {
  throws(function() {
    new Backgrid.Column({
      cell: 1
    });
  }, Error);
});

test('Init with no cell and name', function() {
  throws(function() {
    new Backgrid.Column();
  }, Error);
});

test('Inited with the right defaults', function() {
  var col = new Backgrid.Column({
    name: 'title',
    cell: 1
  });

  equal(col.get('label'), col.get('name'));
  strictEqual(col.get('editable'), true);
  strictEqual(col.get('sortable'), true);
  strictEqual(col.get('renderable'), true);
  strictEqual(col.get('cell'), 1);
  strictEqual(col.get('name'), 'title');
  strictEqual(col.get('label'), 'title');
});
