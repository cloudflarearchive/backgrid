describe("A Body", function () {

  it("throws TypeError if columns is not given", function () {
    expect(function () {
      new Backgrid.Body({
        collection: new Backbone.Collecton()
      });
    }).toThrow(new TypeError());
  });

  it("throws TypeError if collection is not given", function () {
    expect(function () {
      new Backgrid.Body({
        columns: [{
          name: "name",
          cell: string
        }]
      });
    }).toThrow(new TypeError());
  });

});
