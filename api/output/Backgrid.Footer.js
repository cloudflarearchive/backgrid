Ext.data.JsonP.Backgrid_Footer({
  "tagname": "class",
  "name": "Backgrid.Footer",
  "extends": "Backgrid.View",
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
    "abstract": true
  },
  "private": null,
  "id": "class-Backgrid.Footer",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Footer",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "constructor",
        "tagname": "method",
        "owner": "Backgrid.View",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Footer",
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
      "filename": "footer.js",
      "href": null
    }
  ],
  "html_meta": {
    "abstract": null
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
    "Backgrid.View"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.View' rel='Backgrid.View' class='docClass'>Backgrid.View</a><div class='subclass '><strong>Backgrid.Footer</strong></div></div></pre><div class='doc-contents'><p>A Footer is a generic class that only defines a default tag <code>tfoot</code> and\nnumber of required parameters in the initializer.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-tagName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Footer'>Backgrid.Footer</span><br/></div><a href='#!/api/Backgrid.Footer-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;tfoot&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.View' rel='Backgrid.View' class='defined-in docClass'>Backgrid.View</a><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.View-method-constructor' class='name expandable'>Backgrid.Footer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.View\" rel=\"Backgrid.View\" class=\"docClass\">Backgrid.View</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.View\" rel=\"Backgrid.View\" class=\"docClass\">Backgrid.View</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Footer'>Backgrid.Footer</span><br/></div><a href='#!/api/Backgrid.Footer-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>parent</span> : *<div class='sub-desc'><p>The parent view class of this footer.</p>\n</div></li><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'><p>Column metadata.</p>\n</div></li><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If options.columns or options.collection is undefined.</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});