Ext.data.JsonP.Backgrid_CellFormatter({
  "tagname": "class",
  "name": "Backgrid.CellFormatter",
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
    "abstract": true
  },
  "private": null,
  "id": "class-Backgrid.CellFormatter",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "name": "constructor",
        "tagname": "method",
        "owner": "Backgrid.CellFormatter",
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
  "linenr": 9,
  "files": [
    {
      "filename": "formatter.js",
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

  ],
  "subclasses": [
    "Backgrid.DatetimeFormatter",
    "Backgrid.Extension.MomentFormatter",
    "Backgrid.NumberFormatter"
  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Backgrid.DatetimeFormatter' rel='Backgrid.DatetimeFormatter' class='docClass'>Backgrid.DatetimeFormatter</a></div><div class='dependency'><a href='#!/api/Backgrid.Extension.MomentFormatter' rel='Backgrid.Extension.MomentFormatter' class='docClass'>Backgrid.Extension.MomentFormatter</a></div><div class='dependency'><a href='#!/api/Backgrid.NumberFormatter' rel='Backgrid.NumberFormatter' class='docClass'>Backgrid.NumberFormatter</a></div></pre><div class='doc-contents'><p>Just a convenient class for interested parties to subclass.</p>\n\n<p>The default Cell classes don't require the formatter to be a subclass of\nFormatter as long as the fromRaw(rawData) and toRaw(formattedData) methods\nare defined.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.CellFormatter'>Backgrid.CellFormatter</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.CellFormatter-method-constructor' class='name expandable'>Backgrid.CellFormatter</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fromRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.CellFormatter'>Backgrid.CellFormatter</span><br/></div><a href='#!/api/Backgrid.CellFormatter-method-fromRaw' class='name expandable'>fromRaw</a>( <span class='pre'>rawData</span> ) : string</div><div class='description'><div class='short'>Takes a raw value from a model and returns a formatted string for display. ...</div><div class='long'><p>Takes a raw value from a model and returns a formatted string for display.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawData</span> : *<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.CellFormatter'>Backgrid.CellFormatter</span><br/></div><a href='#!/api/Backgrid.CellFormatter-method-toRaw' class='name expandable'>toRaw</a>( <span class='pre'>formattedData</span> ) : *|undefined</div><div class='description'><div class='short'>Takes a formatted string, usually from user input, and returns a\nappropriately typed value for persistence in the model. ...</div><div class='long'><p>Takes a formatted string, usually from user input, and returns a\nappropriately typed value for persistence in the model.</p>\n\n<p>If the user input is invalid or unable to be converted to a raw value\nsuitable for persistence in the model, toRaw must return <code>undefined</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formattedData</span> : string<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*|undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});