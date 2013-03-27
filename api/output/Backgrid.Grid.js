Ext.data.JsonP.Backgrid_Grid({
  "tagname": "class",
  "name": "Backgrid.Grid",
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
  "id": "class-Backgrid.Grid",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "body",
        "tagname": "property",
        "owner": "Backgrid.Grid",
        "meta": {
        },
        "id": "property-body"
      },
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.Grid",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "footer",
        "tagname": "property",
        "owner": "Backgrid.Grid",
        "meta": {
        },
        "id": "property-footer"
      },
      {
        "name": "header",
        "tagname": "property",
        "owner": "Backgrid.Grid",
        "meta": {
        },
        "id": "property-header"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Grid",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "getSelectedModels",
        "tagname": "method",
        "owner": "Backgrid.Grid",
        "meta": {
        },
        "id": "method-getSelectedModels"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Grid",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "insertColumn",
        "tagname": "method",
        "owner": "Backgrid.Grid",
        "meta": {
          "chainable": true
        },
        "id": "method-insertColumn"
      },
      {
        "name": "insertRow",
        "tagname": "method",
        "owner": "Backgrid.Grid",
        "meta": {
        },
        "id": "method-insertRow"
      },
      {
        "name": "remove",
        "tagname": "method",
        "owner": "Backgrid.Grid",
        "meta": {
          "chainable": true
        },
        "id": "method-remove"
      },
      {
        "name": "removeColumn",
        "tagname": "method",
        "owner": "Backgrid.Grid",
        "meta": {
          "chainable": true
        },
        "id": "method-removeColumn"
      },
      {
        "name": "removeRow",
        "tagname": "method",
        "owner": "Backgrid.Grid",
        "meta": {
        },
        "id": "method-removeRow"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Grid",
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
  "linenr": 9,
  "files": [
    {
      "filename": "grid.js",
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><strong>Backgrid.Grid</strong></div></div></pre><div class='doc-contents'><p>Grid represents a data grid that has a header, body and an optional footer.</p>\n\n<p>By default, a Grid treats each model in a collection as a row, and each\nattribute in a model as a column. To render a grid you must provide a list of\ncolumn metadata and a collection to the Grid constructor. Just like any\nBackbone.View class, the grid is rendered as a DOM node fragment when you\ncall render().</p>\n\n<pre><code>var grid = <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a>({\n  columns: [{ name: \"id\", label: \"ID\", type: \"string\" },\n   // ...\n  ],\n  collections: books\n});\n\n$(\"#table-container\").append(grid.render().el);\n</code></pre>\n\n<p>Optionally, if you want to customize the rendering of the grid's header and\nfooter, you may choose to extend <a href=\"#!/api/Backgrid.Header\" rel=\"Backgrid.Header\" class=\"docClass\">Backgrid.Header</a> and <a href=\"#!/api/Backgrid.Footer\" rel=\"Backgrid.Footer\" class=\"docClass\">Backgrid.Footer</a>, and\nthen supply that class or an instance of that class to the Grid constructor.\nSee the documentation for Header and Footer for further details.</p>\n\n<pre><code>var grid = <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a>({\n  columns: [{ name: \"id\", label: \"ID\", type: \"string\" }],\n  collections: books,\n  header: Backgrid.Header.extend({\n       //...\n  }),\n  footer: Backgrid.Paginator\n});\n</code></pre>\n\n<p>Finally, if you want to override how the rows are rendered in the table body,\nyou can supply a Body subclass as the <code>body</code> attribute that uses a different\nRow class. See:</p>\n\n<ul>\n<li><a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a></li>\n<li><a href=\"#!/api/Backgrid.Header\" rel=\"Backgrid.Header\" class=\"docClass\">Backgrid.Header</a></li>\n<li><a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a></li>\n<li><a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a></li>\n<li><a href=\"#!/api/Backgrid.Footer\" rel=\"Backgrid.Footer\" class=\"docClass\">Backgrid.Footer</a></li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-body' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-body' class='name not-expandable'>body</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-className' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;backgrid&quot;</code></p></div></div></div><div id='property-footer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-footer' class='name not-expandable'>footer</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-header' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-header' class='name not-expandable'>header</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;table&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getSelectedModels' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-getSelectedModels' class='name expandable'>getSelectedModels</a>( <span class='pre'></span> ) : Array.&lt;Backbone.Model&gt;</div><div class='description'><div class='short'>Convenient method to retrieve a list of selected models. ...</div><div class='long'><p>Convenient method to retrieve a list of selected models. This method only\nexists when the <code>SelectAll</code> extension has been included.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array.&lt;Backbone.Model&gt;</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializes a Grid instance. ...</div><div class='long'><p>Initializes a Grid instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'><p>Column metadata.</p>\n</div></li><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'><p>The collection of tabular model data to display.</p>\n</div></li><li><span class='pre'>header</span> : <a href=\"#!/api/Backgrid.Header\" rel=\"Backgrid.Header\" class=\"docClass\">Backgrid.Header</a> (optional)<div class='sub-desc'><p>An optional Header class to override the default.</p>\n<p>Defaults to: <code>Backgrid.Header</code></p></div></li><li><span class='pre'>body</span> : <a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a> (optional)<div class='sub-desc'><p>An optional Body class to override the default.</p>\n<p>Defaults to: <code>Backgrid.Body</code></p></div></li><li><span class='pre'>row</span> : <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a> (optional)<div class='sub-desc'><p>An optional Row class to override the default.</p>\n<p>Defaults to: <code>Backgrid.Row</code></p></div></li><li><span class='pre'>footer</span> : <a href=\"#!/api/Backgrid.Footer\" rel=\"Backgrid.Footer\" class=\"docClass\">Backgrid.Footer</a> (optional)<div class='sub-desc'><p>An optional Footer class.</p>\n<p>Defaults to: <code>Backgrid.Footer</code></p></div></li></ul></div></li></ul></div></div></div><div id='method-insertColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-insertColumn' class='name expandable'>insertColumn</a>( <span class='pre'>[options]</span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Delegates to Backgrid.Columns#add for adding a column. ...</div><div class='long'><p>Delegates to Backgrid.Columns#add for adding a column. Subviews can listen\nto the <code>add</code> event from their internal <code>columns</code> if rerendering needs to\nhappen.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Options for <code>Backgrid.Columns#add</code>.</p>\n<ul><li><span class='pre'>render</span> : boolean (optional)<div class='sub-desc'><p>Whether to render the column\nimmediately after insertion.</p>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-insertRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-insertRow' class='name expandable'>insertRow</a>( <span class='pre'>model, collection, options</span> )</div><div class='description'><div class='short'>Delegates to Backgrid.Body.insertRow. ...</div><div class='long'><p>Delegates to <a href=\"#!/api/Backgrid.Body-method-insertRow\" rel=\"Backgrid.Body-method-insertRow\" class=\"docClass\">Backgrid.Body.insertRow</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>collection</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clean up this grid and its subviews. ...</div><div class='long'><p>Clean up this grid and its subviews.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-removeColumn' class='name expandable'>removeColumn</a>( <span class='pre'>[options]</span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Delegates to Backgrid.Columns#remove for removing a column. ...</div><div class='long'><p>Delegates to Backgrid.Columns#remove for removing a column. Subviews can\nlisten to the <code>remove</code> event from the internal <code>columns</code> if rerendering\nneeds to happen.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Options for <code>Backgrid.Columns#remove</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-removeRow' class='name expandable'>removeRow</a>( <span class='pre'>model, collection, options</span> )</div><div class='description'><div class='short'>Delegates to Backgrid.Body.removeRow. ...</div><div class='long'><p>Delegates to <a href=\"#!/api/Backgrid.Body-method-removeRow\" rel=\"Backgrid.Body-method-removeRow\" class=\"docClass\">Backgrid.Body.removeRow</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>collection</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Grid'>Backgrid.Grid</span><br/></div><a href='#!/api/Backgrid.Grid-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders the grid's header, then footer, then finally the body. ...</div><div class='long'><p>Renders the grid's header, then footer, then finally the body. Triggers a\nBackbone <code>backgrid:rendered</code> event along with a reference to the grid when\nthe it has successfully been rendered.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});