Ext.data.JsonP.Backgrid_EmailFormatter({
  "tagname": "class",
  "name": "Backgrid.EmailFormatter",
  "extends": "Backgrid.CellFormatter",
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
  "id": "class-Backgrid.EmailFormatter",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "name": "constructor",
        "tagname": "method",
        "owner": "Backgrid.EmailFormatter",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "fromRaw",
        "tagname": "method",
        "owner": "Backgrid.CellFormatter",
        "meta": {
        },
        "id": "method-fromRaw"
      },
      {
        "name": "toRaw",
        "tagname": "method",
        "owner": "Backgrid.EmailFormatter",
        "meta": {
        },
        "id": "method-toRaw"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 307,
  "files": [
    {
      "filename": "formatter.js",
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
    "Backgrid.CellFormatter"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='docClass'>Backgrid.CellFormatter</a><div class='subclass '><strong>Backgrid.EmailFormatter</strong></div></div></pre><div class='doc-contents'><p>Simple email validation formatter.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.EmailFormatter'>Backgrid.EmailFormatter</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.EmailFormatter-method-constructor' class='name expandable'>Backgrid.EmailFormatter</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.EmailFormatter\" rel=\"Backgrid.EmailFormatter\" class=\"docClass\">Backgrid.EmailFormatter</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.EmailFormatter\" rel=\"Backgrid.EmailFormatter\" class=\"docClass\">Backgrid.EmailFormatter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-constructor' rel='Backgrid.CellFormatter-method-constructor' class='docClass'>Backgrid.CellFormatter.constructor</a></p></div></div></div><div id='method-fromRaw' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='defined-in docClass'>Backgrid.CellFormatter</a><br/></div><a href='#!/api/Backgrid.CellFormatter-method-fromRaw' class='name expandable'>fromRaw</a>( <span class='pre'>rawData</span> ) : *</div><div class='description'><div class='short'>Takes a raw value from a model and returns an optionally formatted string\nfor display. ...</div><div class='long'><p>Takes a raw value from a model and returns an optionally formatted string\nfor display. The default implementation simply returns the supplied value\nas is without any type conversion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawData</span> : *<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.EmailFormatter'>Backgrid.EmailFormatter</span><br/></div><a href='#!/api/Backgrid.EmailFormatter-method-toRaw' class='name expandable'>toRaw</a>( <span class='pre'>formattedData</span> ) : string|undefined</div><div class='description'><div class='short'>Return the input if it is a string that contains an '@' character and if\nthe strings before and after '@' are non-empty. ...</div><div class='long'><p>Return the input if it is a string that contains an '@' character and if\nthe strings before and after '@' are non-empty. If the input does not\nvalidate, <code>undefined</code> is returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formattedData</span> : *<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string|undefined</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-toRaw' rel='Backgrid.CellFormatter-method-toRaw' class='docClass'>Backgrid.CellFormatter.toRaw</a></p></div></div></div></div></div></div></div>"
});