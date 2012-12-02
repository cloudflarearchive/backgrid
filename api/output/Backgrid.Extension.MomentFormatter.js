Ext.data.JsonP.Backgrid_Extension_MomentFormatter({
  "tagname": "class",
  "name": "Backgrid.Extension.MomentFormatter",
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
  "id": "class-Backgrid.Extension.MomentFormatter",
  "members": {
    "cfg": [
      {
        "name": "options",
        "tagname": "cfg",
        "owner": "Backgrid.Extension.MomentFormatter",
        "meta": {
        },
        "id": "cfg-options"
      }
    ],
    "property": [

    ],
    "method": [
      {
        "name": "constructor",
        "tagname": "method",
        "owner": "Backgrid.Extension.MomentFormatter",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "fromRaw",
        "tagname": "method",
        "owner": "Backgrid.Extension.MomentFormatter",
        "meta": {
        },
        "id": "method-fromRaw"
      },
      {
        "name": "toRaw",
        "tagname": "method",
        "owner": "Backgrid.Extension.MomentFormatter",
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
  "linenr": 10,
  "files": [
    {
      "filename": "backgrid-moment-cell.js",
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='docClass'>Backgrid.CellFormatter</a><div class='subclass '><strong>Backgrid.Extension.MomentFormatter</strong></div></div></pre><div class='doc-contents'><p>MomentFormatter converts bi-directionally any datetime values in any format\nsupported by <a href=\"http://momentjs.com/docs/#/parsing/\">moment()</a> to any\ndatetime format\n<a href=\"http://momentjs.com/docs/#/displaying/format/\">moment.fn.format()</a>\nsupports.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-options' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.MomentFormatter'>Backgrid.Extension.MomentFormatter</span><br/></div><a href='#!/api/Backgrid.Extension.MomentFormatter-cfg-options' class='name expandable'>options</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<ul><li><span class='pre'>modelInUTC</span> : boolean (optional)<div class='sub-desc'><p>Whether the model values should\nbe read/written in UTC mode or local mode.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>modelLang</span> : string (optional)<div class='sub-desc'><p>The locale the model\nvalues should be read/written in.</p>\n<p>Defaults to: <code>moment.lang()</code></p></div></li><li><span class='pre'>modelFormat</span> : string (optional)<div class='sub-desc'><p>The format this\nmoment formatter should use to read/write model values. Only meaningful if\nthe values are strings.</p>\n<p>Defaults to: <code>moment.defaultFormat</code></p></div></li><li><span class='pre'>displayInUTC</span> : boolean (optional)<div class='sub-desc'><p>Whether the display values\nshould be read/written in UTC mode or local mode.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>displayLang</span> : string (optional)<div class='sub-desc'><p>The locale the display\nvalues should be read/written in.</p>\n<p>Defaults to: <code>moment.lang()</code></p></div></li><li><span class='pre'>displayFormat</span> : string (optional)<div class='sub-desc'><p>The format\nthis moment formatter should use to read/write dislay values.</p>\n<p>Defaults to: <code>moment.defaultFormat</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.MomentFormatter'>Backgrid.Extension.MomentFormatter</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.Extension.MomentFormatter-method-constructor' class='name expandable'>Backgrid.Extension.MomentFormatter</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Extension.MomentFormatter\" rel=\"Backgrid.Extension.MomentFormatter\" class=\"docClass\">Backgrid.Extension.MomentFormatter</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Extension.MomentFormatter\" rel=\"Backgrid.Extension.MomentFormatter\" class=\"docClass\">Backgrid.Extension.MomentFormatter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-constructor' rel='Backgrid.CellFormatter-method-constructor' class='docClass'>Backgrid.CellFormatter.constructor</a></p></div></div></div><div id='method-fromRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.MomentFormatter'>Backgrid.Extension.MomentFormatter</span><br/></div><a href='#!/api/Backgrid.Extension.MomentFormatter-method-fromRaw' class='name expandable'>fromRaw</a>( <span class='pre'>rawData</span> ) : string</div><div class='description'><div class='short'>Converts datetime values from the model for display. ...</div><div class='long'><p>Converts datetime values from the model for display.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawData</span> : *<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-fromRaw' rel='Backgrid.CellFormatter-method-fromRaw' class='docClass'>Backgrid.CellFormatter.fromRaw</a></p></div></div></div><div id='method-toRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.MomentFormatter'>Backgrid.Extension.MomentFormatter</span><br/></div><a href='#!/api/Backgrid.Extension.MomentFormatter-method-toRaw' class='name expandable'>toRaw</a>( <span class='pre'>formattedData</span> ) : string</div><div class='description'><div class='short'>Converts datetime values from user input to model values. ...</div><div class='long'><p>Converts datetime values from user input to model values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formattedData</span> : string<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-toRaw' rel='Backgrid.CellFormatter-method-toRaw' class='docClass'>Backgrid.CellFormatter.toRaw</a></p></div></div></div></div></div></div></div>"
});