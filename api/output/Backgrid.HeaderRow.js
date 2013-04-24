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
        "name": "makeCell",
        "tagname": "method",
        "owner": "Backgrid.Row",
        "meta": {
          "protected": true
        },
        "id": "method-makeCell"
      },
      {
        "name": "remove",
        "tagname": "method",
        "owner": "Backgrid.Row",
        "meta": {
          "chainable": true
        },
        "id": "method-remove"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Row",
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
  "linenr": 204,
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.Row' rel='Backgrid.Row' class='docClass'>Backgrid.Row</a><div class='subclass '><strong>Backgrid.HeaderRow</strong></div></div></div></pre><div class='doc-contents'><p>HeaderRow is a controller for a row of header cells.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-tagName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Row' rel='Backgrid.Row' class='defined-in docClass'>Backgrid.Row</a><br/></div><a href='#!/api/Backgrid.Row-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;tr&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderRow'>Backgrid.HeaderRow</span><br/></div><a href='#!/api/Backgrid.HeaderRow-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'></div></li><li><span class='pre'>headerCell</span> : <a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a> (optional)<div class='sub-desc'><p>Customized default\nHeaderCell for all the columns. Supply a HeaderCell class or instance to a\nthe <code>headerCell</code> key in a column definition for column-specific header\nrendering.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If options.columns or options.collection is undefined.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Row-method-initialize' rel='Backgrid.Row-method-initialize' class='docClass'>Backgrid.Row.initialize</a></p></div></div></div><div id='method-makeCell' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Row' rel='Backgrid.Row' class='defined-in docClass'>Backgrid.Row</a><br/></div><a href='#!/api/Backgrid.Row-method-makeCell' class='name expandable'>makeCell</a>( <span class='pre'>column, options</span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Factory method for making a cell. ...</div><div class='long'><p>Factory method for making a cell. Used by <a href=\"#!/api/Backgrid.Row-method-initialize\" rel=\"Backgrid.Row-method-initialize\" class=\"docClass\">initialize</a> internally. Override\nthis to provide an appropriate cell instance for a custom Row subclass.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>The options passed to <a href=\"#!/api/Backgrid.Row-method-initialize\" rel=\"Backgrid.Row-method-initialize\" class=\"docClass\">initialize</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Row' rel='Backgrid.Row' class='defined-in docClass'>Backgrid.Row</a><br/></div><a href='#!/api/Backgrid.Row-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clean up this row and its cells. ...</div><div class='long'><p>Clean up this row and its cells.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Row' rel='Backgrid.Row' class='defined-in docClass'>Backgrid.Row</a><br/></div><a href='#!/api/Backgrid.Row-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a row of cells for this row's model. ...</div><div class='long'><p>Renders a row of cells for this row's model.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});