Ext.data.JsonP.Backgrid_HeaderCell({
  "tagname": "class",
  "name": "Backgrid.HeaderCell",
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
  "id": "class-Backgrid.HeaderCell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "onClick",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "method-onClick"
      },
      {
        "name": "removeCellDirection",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "method-removeCellDirection"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "setCellDirection",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "method-setCellDirection"
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><strong>Backgrid.HeaderCell</strong></div></div></pre><div class='doc-contents'><p>HeaderCell is a special cell class that renders a column header cell. If the\ncolumn is sortable, a sorter is also rendered and will trigger a table\nrefresh after sorting.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-events' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;click a&quot;: &quot;onClick&quot;}</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;th&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>|Object<div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If options.column or options.collection is undefined.</p>\n</div></li></ul></div></div></div><div id='method-onClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-onClick' class='name expandable'>onClick</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Event handler for the click event on the cell's anchor. ...</div><div class='long'><p>Event handler for the <code>click</code> event on the cell's anchor. If the column is\nsortable, clicking on the anchor will cycle through 3 sorting orderings -\n<code>ascending</code>, <code>descending</code>, and default.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeCellDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-removeCellDirection' class='name expandable'>removeCellDirection</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Event handler for the collection's sort event. ...</div><div class='long'><p>Event handler for the collection's <code>sort</code> event. Removes all the CSS\ndirection classes.</p>\n</div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a header cell with a sorter, a label, and a class name for this\ncolumn. ...</div><div class='long'><p>Renders a header cell with a sorter, a label, and a class name for this\ncolumn.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setCellDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-setCellDirection' class='name expandable'>setCellDirection</a>( <span class='pre'>column, direction</span> )</div><div class='description'><div class='short'>Event handler for the column's change:direction event. ...</div><div class='long'><p>Event handler for the column's <code>change:direction</code> event. If this\nHeaderCell's column is being sorted on, it applies the direction given as a\nCSS class to the header cell. Removes all the CSS direction classes\notherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>column</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>direction</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});