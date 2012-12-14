Ext.data.JsonP.Backgrid_Column({
  "tagname": "class",
  "name": "Backgrid.Column",
  "extends": "Backbone.Model",
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
  "id": "class-Backgrid.Column",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Column",
        "meta": {
        },
        "id": "method-initialize"
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
      "filename": "column.js",
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
    "Backbone.Model"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.Model<div class='subclass '><strong>Backgrid.Column</strong></div></div></pre><div class='doc-contents'><p>A Column is a placeholder for column metadata.</p>\n\n<p>You usually don't need to create an instance of this class yourself as a\ncollection of column instances will be created for you from a list of column\nattributes in the Backgrid.js view class constructors.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Column'>Backgrid.Column</span><br/></div><a href='#!/api/Backgrid.Column-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>attrs</span> )</div><div class='description'><div class='short'>Initializes this Column instance. ...</div><div class='long'><p>Initializes this Column instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrs</span> : Object<div class='sub-desc'><p>Column attributes.</p>\n<ul><li><span class='pre'>name</span> : string<div class='sub-desc'><p>The name of the model attribute.</p>\n</div></li><li><span class='pre'>cell</span> : string|<a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><div class='sub-desc'><p>The cell type.\nIf this is a string, the capitalized form will be used to look up a\ncell class in Backbone, i.e.: string => StringCell. If a Cell subclass\nis supplied, it is initialized with a hash of parameters. If a Cell\ninstance is supplied, it is used directly.</p>\n</div></li><li><span class='pre'>headerCell</span> : string|<a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a> (optional)<div class='sub-desc'><p>The header cell type.</p>\n</div></li><li><span class='pre'>label</span> : string (optional)<div class='sub-desc'><p>The label to show in the header.</p>\n</div></li><li><span class='pre'>sortable</span> : boolean (optional)<div class='sub-desc'><p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>editable</span> : boolean (optional)<div class='sub-desc'><p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>renderable</span> : boolean (optional)<div class='sub-desc'><p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a>|Object|string (optional)<div class='sub-desc'><p>The\nformatter to use to convert between raw model values and user input.</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If attrs.cell or attrs.options are not supplied.</p>\n</div></li><li><span class='pre'>ReferenceError</span><div class='sub-desc'><p>If attrs.cell is a string but a cell class of\nsaid name cannot be found in the Backgrid module.</p>\n\n<p>See:</p>\n\n<ul>\n<li><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></li>\n<li><a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a></li>\n</ul>\n\n</div></li></ul></div></div></div></div></div></div></div>"
});