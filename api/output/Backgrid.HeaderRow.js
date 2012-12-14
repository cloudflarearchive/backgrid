Ext.data.JsonP.Backgrid_HeaderRow({
  "tagname": "class",
  "name": "Backgrid.HeaderRow",
  "extends": "Backgrid.Row",
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
  "id": "class-Backgrid.HeaderRow",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Row",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.HeaderRow",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Row",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "renderColumn",
        "tagname": "method",
        "owner": "Backgrid.Row",
        "meta": {
        },
        "id": "method-renderColumn"
      },
      {
        "name": "resetCellDirections",
        "tagname": "method",
        "owner": "Backgrid.HeaderRow",
        "meta": {
        },
        "id": "method-resetCellDirections"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 243,
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
    "Backbone.View",
    "Backgrid.Row"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.Row' rel='Backgrid.Row' class='docClass'>Backgrid.Row</a><div class='subclass '><strong>Backgrid.HeaderRow</strong></div></div></div></pre><div class='doc-contents'><p>HeaderRow is a controller for a row of header cells.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-tagName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Row' rel='Backgrid.Row' class='defined-in docClass'>Backgrid.Row</a><br/></div><a href='#!/api/Backgrid.Row-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;tr&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderRow'>Backgrid.HeaderRow</span><br/></div><a href='#!/api/Backgrid.HeaderRow-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>parent</span> : * (optional)<div class='sub-desc'></div></li><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'></div></li><li><span class='pre'>headerCell</span> : <a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a><div class='sub-desc'><p>You can customize header\ncell rendering by supplying your own header cell view.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If options.columns or options.collection is undefined.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Row-method-initialize' rel='Backgrid.Row-method-initialize' class='docClass'>Backgrid.Row.initialize</a></p></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Row' rel='Backgrid.Row' class='defined-in docClass'>Backgrid.Row</a><br/></div><a href='#!/api/Backgrid.Row-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a row of cells for this row's model. ...</div><div class='long'><p>Renders a row of cells for this row's model.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-renderColumn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Row' rel='Backgrid.Row' class='defined-in docClass'>Backgrid.Row</a><br/></div><a href='#!/api/Backgrid.Row-method-renderColumn' class='name expandable'>renderColumn</a>( <span class='pre'>column, renderable</span> )</div><div class='description'><div class='short'>Backbone event handler. ...</div><div class='long'><p>Backbone event handler. Insert a table cell to the right column in the row\nif renderable is true, detach otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'>\n</div></li><li><span class='pre'>renderable</span> : boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resetCellDirections' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderRow'>Backgrid.HeaderRow</span><br/></div><a href='#!/api/Backgrid.HeaderRow-method-resetCellDirections' class='name expandable'>resetCellDirections</a>( <span class='pre'>comparator, sortByColName, direction</span> )</div><div class='description'><div class='short'>Internal callback function to respond to a sort event from a\nHeaderCell. ...</div><div class='long'><p>Internal callback function to respond to a <code>sort</code> event from a\nHeaderCell. Resets the sorting directions of the cells that the <code>sort</code>\nevent <em>DID NOT</em> originate from.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comparator</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>sortByColName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>direction</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});