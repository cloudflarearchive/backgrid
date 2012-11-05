var PageableCollectionMixin = {
  url: function () {
    var self = this;
    var baseUrl = null;
    var superUrl = self.constructor.__super__.url;
    if (typeof superUrl !== 'undefined') {
      baseUrl = _.result(superUrl);
    }
  }
};

var PageableCollection = Backgrid.PageableCollection = Backbone.Collection
  .extend(PageableCollectionMixin);

