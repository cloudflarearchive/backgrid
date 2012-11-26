Ext.data.JsonP.Backgrid_PageHandle({
  "tagname": "class",
  "name": "Backgrid.PageHandle",
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
  "id": "class-Backgrid.PageHandle",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.PageHandle",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.PageHandle",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.PageHandle",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "loadPage",
        "tagname": "method",
        "owner": "Backgrid.PageHandle",
        "meta": {
        },
        "id": "method-loadPage"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.PageHandle",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 11,
  "files": [
    {
      "filename": "backgrid-paginator.js",
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
  "html": "<div><div class='doc-contents'><p>Helper class for rendering the individual page handles.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-events' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.PageHandle'>Backgrid.PageHandle</span><br/></div><a href='#!/api/Backgrid.PageHandle-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;click a&quot;: &quot;loadPage&quot;}</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.PageHandle'>Backgrid.PageHandle</span><br/></div><a href='#!/api/Backgrid.PageHandle-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;li&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.PageHandle'>Backgrid.PageHandle</span><br/></div><a href='#!/api/Backgrid.PageHandle-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>label</span> : string<div class='sub-desc'><p>The label of the handle, usually the same\nas the current page number.</p>\n</div></li><li><span class='pre'>page</span> : number<div class='sub-desc'><p>The current page number of this handle.</p>\n</div></li><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'></div></li><li><span class='pre'>className</span> : string (optional)<div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-loadPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.PageHandle'>Backgrid.PageHandle</span><br/></div><a href='#!/api/Backgrid.PageHandle-method-loadPage' class='name expandable'>loadPage</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Event handler. ...</div><div class='long'><p>Event handler. Refresh the collection with just the page's model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.PageHandle'>Backgrid.PageHandle</span><br/></div><a href='#!/api/Backgrid.PageHandle-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.PageHandle\" rel=\"Backgrid.PageHandle\" class=\"docClass\">Backgrid.PageHandle</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Render the page handle as an anchor inside a list item. ...</div><div class='long'><p>Render the page handle as an anchor inside a list item.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.PageHandle\" rel=\"Backgrid.PageHandle\" class=\"docClass\">Backgrid.PageHandle</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});