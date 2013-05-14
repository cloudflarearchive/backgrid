Ext.data.JsonP.Backgrid_Extension_LunrFilter({
  "tagname": "class",
  "name": "Backgrid.Extension.LunrFilter",
  "extends": "Backgrid.Extension.ClientSideFilter",
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
  "id": "class-Backgrid.Extension.LunrFilter",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "A",
        "tagname": "property",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "property-A"
      },
      {
        "name": "The",
        "tagname": "property",
        "owner": "Backgrid.Extension.ServerSideFilter",
        "meta": {
        },
        "id": "property-The"
      },
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.Extension.ServerSideFilter",
        "meta": {
        },
        "id": "property-className"
      },
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
        "owner": "Backgrid.Extension.LunrFilter",
        "meta": {
        },
        "id": "property-fields"
      },
      {
        "name": "name",
        "tagname": "property",
        "owner": "Backgrid.Extension.ServerSideFilter",
        "meta": {
        },
        "id": "property-name"
      },
      {
        "name": "ref",
        "tagname": "property",
        "owner": "Backgrid.Extension.LunrFilter",
        "meta": {
        },
        "id": "property-ref"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Extension.ServerSideFilter",
        "meta": {
        },
        "id": "property-tagName"
      },
      {
        "name": "template",
        "tagname": "property",
        "owner": "Backgrid.Extension.ServerSideFilter",
        "meta": {
        },
        "id": "property-template"
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
        "name": "addToIndex",
        "tagname": "method",
        "owner": "Backgrid.Extension.LunrFilter",
        "meta": {
        },
        "id": "method-addToIndex"
      },
      {
        "name": "clear",
        "tagname": "method",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "method-clear"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Extension.LunrFilter",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "makeMatcher",
        "tagname": "method",
        "owner": "Backgrid.Extension.ClientSideFilter",
        "meta": {
        },
        "id": "method-makeMatcher"
      },
      {
        "name": "removeFromIndex",
        "tagname": "method",
        "owner": "Backgrid.Extension.LunrFilter",
        "meta": {
        },
        "id": "method-removeFromIndex"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Extension.ServerSideFilter",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "resetIndex",
        "tagname": "method",
        "owner": "Backgrid.Extension.LunrFilter",
        "meta": {
        },
        "id": "method-resetIndex"
      },
      {
        "name": "search",
        "tagname": "method",
        "owner": "Backgrid.Extension.LunrFilter",
        "meta": {
        },
        "id": "method-search"
      },
      {
        "name": "updateIndex",
        "tagname": "method",
        "owner": "Backgrid.Extension.LunrFilter",
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
  "linenr": 235,
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
    "Backgrid.Extension.ServerSideFilter",
    "Backgrid.Extension.ClientSideFilter"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.Extension.ServerSideFilter' rel='Backgrid.Extension.ServerSideFilter' class='docClass'>Backgrid.Extension.ServerSideFilter</a><div class='subclass '><a href='#!/api/Backgrid.Extension.ClientSideFilter' rel='Backgrid.Extension.ClientSideFilter' class='docClass'>Backgrid.Extension.ClientSideFilter</a><div class='subclass '><strong>Backgrid.Extension.LunrFilter</strong></div></div></div></pre><div class='doc-contents'><p>LunrFilter is a ClientSideFilter that uses <a href=\"http://lunrjs.com/\">lunrjs</a> to\nindex the text fields of each model for a collection, and performs\nfull-text searching.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-A' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ClientSideFilter' rel='Backgrid.Extension.ClientSideFilter' class='defined-in docClass'>Backgrid.Extension.ClientSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-property-A' class='name expandable'>A</a><span> : ?Array.&lt;string&gt;</span></div><div class='description'><div class='short'>list of model field names to search\nfor matches. ...</div><div class='long'><p>list of model field names to search\nfor matches. If null, all of the fields will be searched.</p>\n</div></div></div><div id='property-The' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ServerSideFilter' rel='Backgrid.Extension.ServerSideFilter' class='defined-in docClass'>Backgrid.Extension.ServerSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ServerSideFilter-property-The' class='name not-expandable'>The</a><span> : Object</span></div><div class='description'><div class='short'><p>HTML5 placeholder to appear beneath the search box.</p>\n</div><div class='long'><p>HTML5 placeholder to appear beneath the search box.</p>\n</div></div></div><div id='property-className' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ServerSideFilter' rel='Backgrid.Extension.ServerSideFilter' class='defined-in docClass'>Backgrid.Extension.ServerSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ServerSideFilter-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;backgrid-filter form-search&quot;</code></p></div></div></div><div id='property-events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ClientSideFilter' rel='Backgrid.Extension.ClientSideFilter' class='defined-in docClass'>Backgrid.Extension.ClientSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-property-events' class='name not-expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href='#!/api/Backgrid.Extension.ServerSideFilter-property-events' rel='Backgrid.Extension.ServerSideFilter-property-events' class='docClass'>Backgrid.Extension.ServerSideFilter.events</a></p></div></div></div><div id='property-fields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.LunrFilter'>Backgrid.Extension.LunrFilter</span><br/></div><a href='#!/api/Backgrid.Extension.LunrFilter-property-fields' class='name expandable'>fields</a><span> : Object</span></div><div class='description'><div class='short'>A hash of lunrjs index field names and boost\nvalue. ...</div><div class='long'><p>A hash of <code>lunrjs</code> index field names and boost\nvalue. Unlike ClientSideFilter#fields, LunrFilter#fields is <em>required</em> to\ninitialize the index.</p>\n</div></div></div><div id='property-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ServerSideFilter' rel='Backgrid.Extension.ServerSideFilter' class='defined-in docClass'>Backgrid.Extension.ServerSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ServerSideFilter-property-name' class='name expandable'>name</a><span> : string</span></div><div class='description'><div class='short'>Query key ...</div><div class='long'><p>Query key</p>\n<p>Defaults to: <code>'q'</code></p></div></div></div><div id='property-ref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.LunrFilter'>Backgrid.Extension.LunrFilter</span><br/></div><a href='#!/api/Backgrid.Extension.LunrFilter-property-ref' class='name expandable'>ref</a><span> : string</span></div><div class='description'><div class='short'>｀lunrjs` document reference attribute name. ...</div><div class='long'><p>｀lunrjs` document reference attribute name.</p>\n<p>Defaults to: <code>&quot;id&quot;</code></p></div></div></div><div id='property-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ServerSideFilter' rel='Backgrid.Extension.ServerSideFilter' class='defined-in docClass'>Backgrid.Extension.ServerSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ServerSideFilter-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;form&quot;</code></p></div></div></div><div id='property-template' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ServerSideFilter' rel='Backgrid.Extension.ServerSideFilter' class='defined-in docClass'>Backgrid.Extension.ServerSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ServerSideFilter-property-template' class='name not-expandable'>template</a><span> : function(Object, ?Object=): string</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-wait' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ClientSideFilter' rel='Backgrid.Extension.ClientSideFilter' class='defined-in docClass'>Backgrid.Extension.ClientSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-property-wait' class='name expandable'>wait</a><span> : Number</span></div><div class='description'><div class='short'>The time in milliseconds to wait since for since the last\nchange to the search box's value before searching. ...</div><div class='long'><p>The time in milliseconds to wait since for since the last\nchange to the search box's value before searching. This value can be\nadjusted depending on how often the search box is used and how large the\nsearch index is.</p>\n<p>Defaults to: <code>149</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addToIndex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.LunrFilter'>Backgrid.Extension.LunrFilter</span><br/></div><a href='#!/api/Backgrid.Extension.LunrFilter-method-addToIndex' class='name expandable'>addToIndex</a>( <span class='pre'>model</span> )</div><div class='description'><div class='short'>Adds the given model to the index. ...</div><div class='long'><p>Adds the given model to the index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clear' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ClientSideFilter' rel='Backgrid.Extension.ClientSideFilter' class='defined-in docClass'>Backgrid.Extension.ClientSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Clears the search box and reset the collection to its original. ...</div><div class='long'><p>Clears the search box and reset the collection to its original.</p>\n<p>Overrides: <a href='#!/api/Backgrid.Extension.ServerSideFilter-method-clear' rel='Backgrid.Extension.ServerSideFilter-method-clear' class='docClass'>Backgrid.Extension.ServerSideFilter.clear</a></p></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.LunrFilter'>Backgrid.Extension.LunrFilter</span><br/></div><a href='#!/api/Backgrid.Extension.LunrFilter-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Indexes the underlying collection on construction. ...</div><div class='long'><p>Indexes the underlying collection on construction. The index will refresh\nwhen the underlying collection is reset. If any model is added, removed\nor if any indexed fields of any models has changed, the index will be\nupdated.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'></div></li><li><span class='pre'>placeholder</span> : String (optional)<div class='sub-desc'></div></li><li><span class='pre'>ref</span> : string (optional)<div class='sub-desc'><p>｀lunrjs` document reference attribute name.</p>\n</div></li><li><span class='pre'>fields</span> : Object (optional)<div class='sub-desc'><p>A hash of <code>lunrjs</code> index field names and\nboost value.</p>\n</div></li><li><span class='pre'>wait</span> : number (optional)<div class='sub-desc'></div></li></ul></div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Extension.ClientSideFilter-method-initialize' rel='Backgrid.Extension.ClientSideFilter-method-initialize' class='docClass'>Backgrid.Extension.ClientSideFilter.initialize</a></p></div></div></div><div id='method-makeMatcher' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ClientSideFilter' rel='Backgrid.Extension.ClientSideFilter' class='defined-in docClass'>Backgrid.Extension.ClientSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ClientSideFilter-method-makeMatcher' class='name expandable'>makeMatcher</a>( <span class='pre'>query</span> ) : function(Backbone.Model):boolean</div><div class='description'><div class='short'>This default implementation takes a query string and returns a matcher\nfunction that looks for matches in the model's...</div><div class='long'><p>This default implementation takes a query string and returns a matcher\nfunction that looks for matches in the model's #fields or all of its\nfields if #fields is null, for any of the words in the query\ncase-insensitively.</p>\n\n<p>Subclasses overriding this method must take care to conform to the\nsignature of the matcher function. In addition, when the matcher function\nis called, its context will be bound to this ClientSideFilter object so\nit has access to the filter's attributes and methods.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : string<div class='sub-desc'><p>The search query in the search box.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>function(Backbone.Model):boolean</span><div class='sub-desc'><p>A matching function.</p>\n</div></li></ul></div></div></div><div id='method-removeFromIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.LunrFilter'>Backgrid.Extension.LunrFilter</span><br/></div><a href='#!/api/Backgrid.Extension.LunrFilter-method-removeFromIndex' class='name expandable'>removeFromIndex</a>( <span class='pre'>model</span> )</div><div class='description'><div class='short'>Removes the given model from the index. ...</div><div class='long'><p>Removes the given model from the index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.ServerSideFilter' rel='Backgrid.Extension.ServerSideFilter' class='defined-in docClass'>Backgrid.Extension.ServerSideFilter</a><br/></div><a href='#!/api/Backgrid.Extension.ServerSideFilter-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Extension.ServerSideFilter\" rel=\"Backgrid.Extension.ServerSideFilter\" class=\"docClass\">Backgrid.Extension.ServerSideFilter</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a search form with a text box, optionally with a placeholder and\na preset value if supplied during initializa...</div><div class='long'><p>Renders a search form with a text box, optionally with a placeholder and\na preset value if supplied during initialization.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Extension.ServerSideFilter\" rel=\"Backgrid.Extension.ServerSideFilter\" class=\"docClass\">Backgrid.Extension.ServerSideFilter</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-resetIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.LunrFilter'>Backgrid.Extension.LunrFilter</span><br/></div><a href='#!/api/Backgrid.Extension.LunrFilter-method-resetIndex' class='name expandable'>resetIndex</a>( <span class='pre'>collection, [options]</span> )</div><div class='description'><div class='short'>Reindex the collection. ...</div><div class='long'><p>Reindex the collection. If <code>options.reindex</code> is <code>false</code>, this method is a\nno-op.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'>\n<ul><li><span class='pre'>reindex</span> : boolean (optional)<div class='sub-desc'><p>Defaults to: <code>true</code></p></div></li></ul></div></li></ul></div></div></div><div id='method-search' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.LunrFilter'>Backgrid.Extension.LunrFilter</span><br/></div><a href='#!/api/Backgrid.Extension.LunrFilter-method-search' class='name expandable'>search</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Takes the query from the search box and performs a full-text search on\nthe client-side. ...</div><div class='long'><p>Takes the query from the search box and performs a full-text search on\nthe client-side. The search result is returned by resetting the\nunderlying collection to the models after interrogating the index for the\nquery answer.</p>\n<p>Overrides: <a href='#!/api/Backgrid.Extension.ClientSideFilter-method-search' rel='Backgrid.Extension.ClientSideFilter-method-search' class='docClass'>Backgrid.Extension.ClientSideFilter.search</a></p></div></div></div><div id='method-updateIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.LunrFilter'>Backgrid.Extension.LunrFilter</span><br/></div><a href='#!/api/Backgrid.Extension.LunrFilter-method-updateIndex' class='name expandable'>updateIndex</a>( <span class='pre'>model</span> )</div><div class='description'><div class='short'>Updates the index for the given model. ...</div><div class='long'><p>Updates the index for the given model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});