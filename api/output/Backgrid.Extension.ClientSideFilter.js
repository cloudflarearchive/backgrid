Ext.data.JsonP.Backgrid_Extension_ClientSideFilter({
  "tagname": "class",
  "name": "Backgrid.Extension.ClientSideFilter",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "enum": null,
  "override": null,
  "inheritable": null,
  "inheritdoc": null,
  "meta": {
  },
  "private": null,
  "id": "class-Backgrid.Extension.ClientSideFilter",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "fields",
        "tagname": "property",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "property-fields"
      },
      {
        "name": "ref",
        "tagname": "property",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "property-ref"
      },
      {
        "name": "wait",
        "tagname": "property",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "property-wait"
      }
    ],
    "method": [
      {
        "name": "clear",
        "tagname": "method",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "method-clear"
      },
      {
        "name": "filter",
        "tagname": "method",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "method-filter"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "removeFromIndex",
        "tagname": "method",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "method-removeFromIndex"
      },
      {
        "name": "resetIndex",
        "tagname": "method",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "method-resetIndex"
      },
      {
        "name": "updateIndex",
        "tagname": "method",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "method-updateIndex"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 100,
  "files": [
    {
      "filename": "backgrid-filter.js",
      "href": null
    }
  ],
  "html_meta": {
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><div class='doc-contents'><p>ClientSideFilter is a search form widget that uses\n<a href=\"http://lunrjs.com/\">lunrjs</a> to index the text fields of each model for a\ncollection, and performs full-text searching on the client side.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-events' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-property-events' class='name not-expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-fields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-property-fields' class='name not-expandable'>fields</a><span> : Object</span></div><div class='description'><div class='short'><p>A hash of <code>lunrjs</code> index field names and boost\nvalue.</p>\n</div><div class='long'><p>A hash of <code>lunrjs</code> index field names and boost\nvalue.</p>\n</div></div></div><div id='property-ref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-property-ref' class='name expandable'>ref</a><span> : string</span></div><div class='description'><div class='short'>｀lunrjs` document reference attribute name ...</div><div class='long'><p>｀lunrjs` document reference attribute name</p>\n<p>Defaults to: <code>'id'</code></p></div></div></div><div id='property-wait' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-property-wait' class='name expandable'>wait</a><span> : Number</span></div><div class='description'><div class='short'>The time in milliseconds to wait since for since the last\nchange to the search box's value before searching. ...</div><div class='long'><p>The time in milliseconds to wait since for since the last\nchange to the search box's value before searching. This value can be\nadjusted depending on how often the search box is used and how large the\nsearch index is.</p>\n<p>Defaults to: <code>150</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Clears the search box and reset the collection to its original. ...</div><div class='long'><p>Clears the search box and reset the collection to its original.</p>\n</div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-method-filter' class='name expandable'>filter</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Takes the query from the search box and performs a full-text search on\nthe client-side. ...</div><div class='long'><p>Takes the query from the search box and performs a full-text search on\nthe client-side. The search result is returned by resetting the\nunderlying collection to the models after interrogating the index for the\nresults for the query.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer. Indexes the underlying collection on construction. The index\nwill refresh when the underlying collection is reset. If any model is\nremoved or if any indexed fields of any models has changed, the index\nwill be updated.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'></div></li><li><span class='pre'>fields</span> : Object<div class='sub-desc'><p>A hash of <code>lunrjs</code> index field names and\nboost value.</p>\n</div></li><li><span class='pre'>ref</span> : string (optional)<div class='sub-desc'><p>｀lunrjs` document reference attribute name</p>\n</div></li><li><span class='pre'>wait</span> : number (optional)<div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-removeFromIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-method-removeFromIndex' class='name expandable'>removeFromIndex</a>( <span class='pre'>model</span> )</div><div class='description'><div class='short'>Removes the given model from the index. ...</div><div class='long'><p>Removes the given model from the index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resetIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-method-resetIndex' class='name expandable'>resetIndex</a>( <span class='pre'>collection, [options]</span> )</div><div class='description'><div class='short'>Reindex the collection. ...</div><div class='long'><p>Reindex the collection. If <code>options.reindex</code> is <code>false</code>, this method is a\nno-op.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n<ul><li><span class='pre'>reindex</span> : boolean (optional)<div class='sub-desc'><p>Defaults to: <code>true</code></p></div></li></ul></div></li></ul></div></div></div><div id='method-updateIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.ClientSideFilter'>Backgrid.Extension.ClientSideFilter</span><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-method-updateIndex' class='name expandable'>updateIndex</a>( <span class='pre'>model</span> )</div><div class='description'><div class='short'>Updates the index for the given model. ...</div><div class='long'><p>Updates the index for the given model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});