Ext.data.JsonP.Backgrid_Extension_Paginator({
  "tagname": "class",
  "name": "Backgrid.Extension.Paginator",
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
  "id": "class-Backgrid.Extension.Paginator",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.Extension.Paginator",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.Extension.Paginator",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "fastForwardHandleLabels",
        "tagname": "property",
        "owner": "Backgrid.Extension.Paginator",
        "meta": {
        },
        "id": "property-fastForwardHandleLabels"
      },
      {
        "name": "template",
        "tagname": "property",
        "owner": "Backgrid.Extension.Paginator",
        "meta": {
        },
        "id": "property-template"
      },
      {
        "name": "windowSize",
        "tagname": "property",
        "owner": "Backgrid.Extension.Paginator",
        "meta": {
        },
        "id": "property-windowSize"
      }
    ],
    "method": [
      {
        "name": "changePage",
        "tagname": "method",
        "owner": "Backgrid.Extension.Paginator",
        "meta": {
        },
        "id": "method-changePage"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Extension.Paginator",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "makeHandles",
        "tagname": "method",
        "owner": "Backgrid.Extension.Paginator",
        "meta": {
        },
        "id": "method-makeHandles"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Extension.Paginator",
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
  "linenr": 13,
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
  "html": "<div><div class='doc-contents'><p>Paginator is a Footer element that re-renders a large result set in a table\nby splitting it across multiple pages. If the result set is still larger,\nthe page handles are rendered within a sliding window, with 10 indexed page\nhandles each by default, plus the fast forward, fast backward, previous and\nnext page handles. The fast forward, fast backward, previous and next page\nhandles can be turned off.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Paginator'>Backgrid.Extension.Paginator</span><br/></div><a href='#!/api/Backgrid.Extension.Paginator-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;paginator&quot;</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Paginator'>Backgrid.Extension.Paginator</span><br/></div><a href='#!/api/Backgrid.Extension.Paginator-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;click a&quot;: &quot;changePage&quot;}</code></p></div></div></div><div id='property-fastForwardHandleLabels' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Paginator'>Backgrid.Extension.Paginator</span><br/></div><a href='#!/api/Backgrid.Extension.Paginator-property-fastForwardHandleLabels' class='name expandable'>fastForwardHandleLabels</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{first: &quot;《&quot;, prev: &quot;〈&quot;, next: &quot;〉&quot;, last: &quot;》&quot;}</code></p></div></div></div><div id='property-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Paginator'>Backgrid.Extension.Paginator</span><br/></div><a href='#!/api/Backgrid.Extension.Paginator-property-template' class='name not-expandable'>template</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-windowSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Paginator'>Backgrid.Extension.Paginator</span><br/></div><a href='#!/api/Backgrid.Extension.Paginator-property-windowSize' class='name expandable'>windowSize</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>10</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-changePage' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Paginator'>Backgrid.Extension.Paginator</span><br/></div><a href='#!/api/Backgrid.Extension.Paginator-method-changePage' class='name expandable'>changePage</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>jQuery event handler for the page handlers. ...</div><div class='long'><p>jQuery event handler for the page handlers. Goes to the right page upon\nclicking.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Paginator'>Backgrid.Extension.Paginator</span><br/></div><a href='#!/api/Backgrid.Extension.Paginator-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'><p>Column metadata.</p>\n</div></li><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'></div></li><li><span class='pre'>fastForwardHandleLabels</span> : boolean (optional)<div class='sub-desc'><p>Whether to render fast forward buttons.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-makeHandles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Paginator'>Backgrid.Extension.Paginator</span><br/></div><a href='#!/api/Backgrid.Extension.Paginator-method-makeHandles' class='name expandable'>makeHandles</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Internal method to create a list of page handle objects for the template\nto render them. ...</div><div class='long'><p>Internal method to create a list of page handle objects for the template\nto render them.</p>\n</div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Paginator'>Backgrid.Extension.Paginator</span><br/></div><a href='#!/api/Backgrid.Extension.Paginator-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Extension.Paginator\" rel=\"Backgrid.Extension.Paginator\" class=\"docClass\">Backgrid.Extension.Paginator</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Render the paginator handles inside an unordered list placed inside a\ncell that spans all the columns. ...</div><div class='long'><p>Render the paginator handles inside an unordered list placed inside a\ncell that spans all the columns.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Extension.Paginator\" rel=\"Backgrid.Extension.Paginator\" class=\"docClass\">Backgrid.Extension.Paginator</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});