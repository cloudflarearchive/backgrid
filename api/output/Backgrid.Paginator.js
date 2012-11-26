Ext.data.JsonP.Backgrid_Paginator({
  "tagname": "class",
  "name": "Backgrid.Paginator",
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
  "id": "class-Backgrid.Paginator",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.Paginator",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "hasFastForward",
        "tagname": "property",
        "owner": "Backgrid.Paginator",
        "meta": {
        },
        "id": "property-hasFastForward"
      },
      {
        "name": "windowSize",
        "tagname": "property",
        "owner": "Backgrid.Paginator",
        "meta": {
        },
        "id": "property-windowSize"
      }
    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Paginator",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "refresh",
        "tagname": "method",
        "owner": "Backgrid.Paginator",
        "meta": {
        },
        "id": "method-refresh"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Paginator",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "renderFastForward",
        "tagname": "method",
        "owner": "Backgrid.Paginator",
        "meta": {
        },
        "id": "method-renderFastForward"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 66,
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
  "html": "<div><div class='doc-contents'><p>Paginator is a Footer element that re-renders a large result set in a table\nby splitting it across multiple pages. If the result set is still larger,\nthe page handles are rendered within a sliding window, with 10 indexed page\nhandles each by default, plus the fast forward, fast backward, previous and\nnext page handles. The fast forward, fast backward, previous and next page\nhandles can be turned off.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Paginator'>Backgrid.Paginator</span><br/></div><a href='#!/api/Backgrid.Paginator-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;paginator&quot;</code></p></div></div></div><div id='property-hasFastForward' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Paginator'>Backgrid.Paginator</span><br/></div><a href='#!/api/Backgrid.Paginator-property-hasFastForward' class='name expandable'>hasFastForward</a><span> : Boolean</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-windowSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Paginator'>Backgrid.Paginator</span><br/></div><a href='#!/api/Backgrid.Paginator-property-windowSize' class='name expandable'>windowSize</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>10</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Paginator'>Backgrid.Paginator</span><br/></div><a href='#!/api/Backgrid.Paginator-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>parent</span> : *<div class='sub-desc'><p>The parent view class of this footer.</p>\n</div></li><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'><p>Column metadata.</p>\n</div></li><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'></div></li><li><span class='pre'>windowSize</span> : number<div class='sub-desc'><p>The number of page handles to display per sliding window.</p>\n</div></li><li><span class='pre'>hasFastForward</span> : boolean<div class='sub-desc'><p>Whether to render fast forward buttons.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Paginator'>Backgrid.Paginator</span><br/></div><a href='#!/api/Backgrid.Paginator-method-refresh' class='name expandable'>refresh</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Re-render the page handles. ...</div><div class='long'><p>Re-render the page handles. Current page handle is disabled.</p>\n</div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Paginator'>Backgrid.Paginator</span><br/></div><a href='#!/api/Backgrid.Paginator-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Paginator\" rel=\"Backgrid.Paginator\" class=\"docClass\">Backgrid.Paginator</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Render the paginator handles inside an unordered list placed inside a\ncell that spans all the columns. ...</div><div class='long'><p>Render the paginator handles inside an unordered list placed inside a\ncell that spans all the columns.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Paginator\" rel=\"Backgrid.Paginator\" class=\"docClass\">Backgrid.Paginator</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-renderFastForward' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Paginator'>Backgrid.Paginator</span><br/></div><a href='#!/api/Backgrid.Paginator-method-renderFastForward' class='name expandable'>renderFastForward</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Render the fast forward, fast backward, previous page and next page\nhandles if hasFastward is true. ...</div><div class='long'><p>Render the fast forward, fast backward, previous page and next page\nhandles if <code>hasFastward</code> is true. Page handles are disabled at\nboundaries.</p>\n</div></div></div></div></div></div></div>"
});