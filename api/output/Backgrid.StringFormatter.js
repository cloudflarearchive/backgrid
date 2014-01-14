Ext.data.JsonP.Backgrid_StringFormatter({
  "tagname": "class",
  "name": "Backgrid.StringFormatter",
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
  "id": "class-Backgrid.StringFormatter",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "name": "constructor",
        "tagname": "method",
        "owner": "Backgrid.StringFormatter",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "fromRaw",
        "tagname": "method",
        "owner": "Backgrid.StringFormatter",
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
  "linenr": 363,
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='docClass'>Backgrid.CellFormatter</a><div class='subclass '><strong>Backgrid.StringFormatter</strong></div></div></pre><div class='doc-contents'><p>Formatter to convert any value to string.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.StringFormatter'>Backgrid.StringFormatter</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.StringFormatter-method-constructor' class='name expandable'>Backgrid.StringFormatter</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.StringFormatter\" rel=\"Backgrid.StringFormatter\" class=\"docClass\">Backgrid.StringFormatter</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.StringFormatter\" rel=\"Backgrid.StringFormatter\" class=\"docClass\">Backgrid.StringFormatter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-constructor' rel='Backgrid.CellFormatter-method-constructor' class='docClass'>Backgrid.CellFormatter.constructor</a></p></div></div></div><div id='method-fromRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.StringFormatter'>Backgrid.StringFormatter</span><br/></div><a href='#!/api/Backgrid.StringFormatter-method-fromRaw' class='name expandable'>fromRaw</a>( <span class='pre'>rawValue, model</span> ) : string</div><div class='description'><div class='short'>Converts any value to a string using Ecmascript's implicit type\nconversion. ...</div><div class='long'><p>Converts any value to a string using Ecmascript's implicit type\nconversion. If the given value is <code>null</code> or <code>undefined</code>, an empty string is\nreturned instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawValue</span> : *<div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>Used for more complicated formatting</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-fromRaw' rel='Backgrid.CellFormatter-method-fromRaw' class='docClass'>Backgrid.CellFormatter.fromRaw</a></p></div></div></div><div id='method-toRaw' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='defined-in docClass'>Backgrid.CellFormatter</a><br/></div><a href='#!/api/Backgrid.CellFormatter-method-toRaw' class='name expandable'>toRaw</a>( <span class='pre'>formattedData, model</span> ) : *|undefined</div><div class='description'><div class='short'>Takes a formatted string, usually from user input, and returns a\nappropriately typed value for persistence in the model. ...</div><div class='long'><p>Takes a formatted string, usually from user input, and returns a\nappropriately typed value for persistence in the model.</p>\n\n<p>If the user input is invalid or unable to be converted to a raw value\nsuitable for persistence in the model, toRaw must return <code>undefined</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formattedData</span> : string<div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>Used for more complicated formatting</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*|undefined</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});