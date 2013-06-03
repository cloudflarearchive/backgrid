Ext.data.JsonP.Backgrid_SelectFormatter({
  "tagname": "class",
  "name": "Backgrid.SelectFormatter",
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
  "id": "class-Backgrid.SelectFormatter",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "name": "constructor",
        "tagname": "method",
        "owner": "Backgrid.SelectFormatter",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "fromRaw",
        "tagname": "method",
        "owner": "Backgrid.SelectFormatter",
        "meta": {
        },
        "id": "method-fromRaw"
      },
      {
        "name": "toRaw",
        "tagname": "method",
        "owner": "Backgrid.CellFormatter",
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
  "linenr": 334,
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='docClass'>Backgrid.CellFormatter</a><div class='subclass '><strong>Backgrid.SelectFormatter</strong></div></div></pre><div class='doc-contents'><p>Formatter for SelectCell.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectFormatter'>Backgrid.SelectFormatter</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.SelectFormatter-method-constructor' class='name expandable'>Backgrid.SelectFormatter</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.SelectFormatter\" rel=\"Backgrid.SelectFormatter\" class=\"docClass\">Backgrid.SelectFormatter</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.SelectFormatter\" rel=\"Backgrid.SelectFormatter\" class=\"docClass\">Backgrid.SelectFormatter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-constructor' rel='Backgrid.CellFormatter-method-constructor' class='docClass'>Backgrid.CellFormatter.constructor</a></p></div></div></div><div id='method-fromRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectFormatter'>Backgrid.SelectFormatter</span><br/></div><a href='#!/api/Backgrid.SelectFormatter-method-fromRaw' class='name expandable'>fromRaw</a>( <span class='pre'>rawValue</span> ) : Array.&lt;*&gt;</div><div class='description'><div class='short'>Normalizes raw scalar or array values to an array. ...</div><div class='long'><p>Normalizes raw scalar or array values to an array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawValue</span> : *<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array.&lt;*&gt;</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-fromRaw' rel='Backgrid.CellFormatter-method-fromRaw' class='docClass'>Backgrid.CellFormatter.fromRaw</a></p></div></div></div><div id='method-toRaw' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='defined-in docClass'>Backgrid.CellFormatter</a><br/></div><a href='#!/api/Backgrid.CellFormatter-method-toRaw' class='name expandable'>toRaw</a>( <span class='pre'>formattedData</span> ) : *|undefined</div><div class='description'><div class='short'>Takes a formatted string, usually from user input, and returns a\nappropriately typed value for persistence in the model. ...</div><div class='long'><p>Takes a formatted string, usually from user input, and returns a\nappropriately typed value for persistence in the model.</p>\n\n<p>If the user input is invalid or unable to be converted to a raw value\nsuitable for persistence in the model, toRaw must return <code>undefined</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formattedData</span> : string<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*|undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});