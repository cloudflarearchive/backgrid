Ext.data.JsonP.Backgrid_HeaderRow({
  "tagname": "class",
  "name": "Backgrid.HeaderRow",
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
  "id": "class-Backgrid.HeaderRow",
  "members": {
    "cfg": [

    ],
    "property": [

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
  "linenr": 230,
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

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><div class='doc-contents'><p>HeaderRow is a controller for a row of header cells. @extens <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderRow'>Backgrid.HeaderRow</span><br/></div><a href='#!/api/Backgrid.HeaderRow-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer. If options.columns or options.collection is undefined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>parent</span> : * (optional)<div class='sub-desc'></div></li><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'></div></li><li><span class='pre'>headerCell</span> : <a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a><div class='sub-desc'><p>You can customize header\ncell rendering by supplying your own header cell view.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If options.columns or options.collection is undefined.</p>\n</div></li></ul></div></div></div><div id='method-resetCellDirections' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderRow'>Backgrid.HeaderRow</span><br/></div><a href='#!/api/Backgrid.HeaderRow-method-resetCellDirections' class='name expandable'>resetCellDirections</a>( <span class='pre'>comparator, sortByColName, direction</span> )</div><div class='description'><div class='short'>Internal callback function to respond to a sort event from a\nHeaderCell. ...</div><div class='long'><p>Internal callback function to respond to a <code>sort</code> event from a\nHeaderCell. Resets the sorting directions of the cells that the <code>sort</code>\nevent <em>DID NOT</em> originate from.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comparator</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>sortByColName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>direction</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});