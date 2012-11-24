Ext.data.JsonP.Backgrid_Header({
  "tagname": "class",
  "name": "Backgrid.Header",
  "extends": "Backbone.View",
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
  "id": "class-Backgrid.Header",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Header",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "dispatchSortEvent",
        "tagname": "method",
        "owner": "Backgrid.Header",
        "meta": {
        },
        "id": "method-dispatchSortEvent"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Header",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Header",
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
  "linenr": 137,
  "files": [
    {
      "filename": "header.js",
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
    "Backbone.View"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><strong>Backgrid.Header</strong></div></div></pre><div class='doc-contents'><p>Header is a special structural view class that renders a table head with a\nsingle row of header cells.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-tagName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Header'>Backgrid.Header</span><br/></div><a href='#!/api/Backgrid.Header-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;thead&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-dispatchSortEvent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Header'>Backgrid.Header</span><br/></div><a href='#!/api/Backgrid.Header-method-dispatchSortEvent' class='name expandable'>dispatchSortEvent</a>( <span class='pre'>comparator, sortByColName, direction</span> )</div><div class='description'><div class='short'>Internal callback function to respond to a sort event from a\nHeaderCell. ...</div><div class='long'><p>Internal callback function to respond to a <code>sort</code> event from a\nHeaderCell. The comparator is dispatched to the underlying collection\nthrough the parent and the header cells are cycled to their correct\nrendering for this sorting event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comparator</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>sortByColName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>direction</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Header'>Backgrid.Header</span><br/></div><a href='#!/api/Backgrid.Header-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>parent</span> : * (optional)<div class='sub-desc'></div></li><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'></div></li><li><span class='pre'>headerCell</span> : <a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a><div class='sub-desc'><p>You can customize header\ncell rendering by supplying your own header cell view.</p>\n\n<p>See:</p>\n\n<ul>\n<li><a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a></li>\n</ul>\n\n</div></li></ul></div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Header'>Backgrid.Header</span><br/></div><a href='#!/api/Backgrid.Header-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Header\" rel=\"Backgrid.Header\" class=\"docClass\">Backgrid.Header</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders this table head with a single row of header cells. ...</div><div class='long'><p>Renders this table head with a single row of header cells.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Header\" rel=\"Backgrid.Header\" class=\"docClass\">Backgrid.Header</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});