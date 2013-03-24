Ext.data.JsonP.Backgrid_NumberFormatter({
  "tagname": "class",
  "name": "Backgrid.NumberFormatter",
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
  "id": "class-Backgrid.NumberFormatter",
  "members": {
    "cfg": [
      {
        "name": "options",
        "tagname": "cfg",
        "owner": "Backgrid.NumberFormatter",
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
        "owner": "Backgrid.NumberFormatter",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "fromRaw",
        "tagname": "method",
        "owner": "Backgrid.NumberFormatter",
        "meta": {
        },
        "id": "method-fromRaw"
      },
      {
        "name": "toRaw",
        "tagname": "method",
        "owner": "Backgrid.NumberFormatter",
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
  "linenr": 53,
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='docClass'>Backgrid.CellFormatter</a><div class='subclass '><strong>Backgrid.NumberFormatter</strong></div></div></pre><div class='doc-contents'><p>A floating point number formatter. Doesn't understand notation at the moment.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-options' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberFormatter'>Backgrid.NumberFormatter</span><br/></div><a href='#!/api/Backgrid.NumberFormatter-cfg-options' class='name expandable'>options</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<ul><li><span class='pre'>decimals</span> : number (optional)<div class='sub-desc'><p>Number of decimals to display. Must be an integer.</p>\n<p>Defaults to: <code>2</code></p></div></li><li><span class='pre'>decimalSeparator</span> : string (optional)<div class='sub-desc'><p>The separator to use when\ndisplaying decimals.</p>\n<p>Defaults to: <code>'.'</code></p></div></li><li><span class='pre'>orderSeparator</span> : string (optional)<div class='sub-desc'><p>The separator to use to\nseparator thousands. May be an empty string.</p>\n<p>Defaults to: <code>','</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberFormatter'>Backgrid.NumberFormatter</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.NumberFormatter-method-constructor' class='name expandable'>Backgrid.NumberFormatter</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.NumberFormatter\" rel=\"Backgrid.NumberFormatter\" class=\"docClass\">Backgrid.NumberFormatter</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.NumberFormatter\" rel=\"Backgrid.NumberFormatter\" class=\"docClass\">Backgrid.NumberFormatter</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>RangeError</span><div class='sub-desc'><p>If decimals &lt; 0 or > 20.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-constructor' rel='Backgrid.CellFormatter-method-constructor' class='docClass'>Backgrid.CellFormatter.constructor</a></p></div></div></div><div id='method-fromRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberFormatter'>Backgrid.NumberFormatter</span><br/></div><a href='#!/api/Backgrid.NumberFormatter-method-fromRaw' class='name expandable'>fromRaw</a>( <span class='pre'>number</span> ) : string</div><div class='description'><div class='short'>Takes a floating point number and convert it to a formatted string where\nevery thousand is separated by orderSeparato...</div><div class='long'><p>Takes a floating point number and convert it to a formatted string where\nevery thousand is separated by <code>orderSeparator</code>, with a <code>decimal</code> number of\ndecimals separated by <code>decimalSeparator</code>. The number returned is rounded\nthe usual way.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-fromRaw' rel='Backgrid.CellFormatter-method-fromRaw' class='docClass'>Backgrid.CellFormatter.fromRaw</a></p></div></div></div><div id='method-toRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberFormatter'>Backgrid.NumberFormatter</span><br/></div><a href='#!/api/Backgrid.NumberFormatter-method-toRaw' class='name expandable'>toRaw</a>( <span class='pre'>formattedData</span> ) : number|undefined</div><div class='description'><div class='short'>Takes a string, possibly formatted with orderSeparator and/or\ndecimalSeparator, and convert it back to a number. ...</div><div class='long'><p>Takes a string, possibly formatted with <code>orderSeparator</code> and/or\n<code>decimalSeparator</code>, and convert it back to a number.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formattedData</span> : string<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>number|undefined</span><div class='sub-desc'><p>Undefined if the string cannot be converted to\na number.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-toRaw' rel='Backgrid.CellFormatter-method-toRaw' class='docClass'>Backgrid.CellFormatter.toRaw</a></p></div></div></div></div></div></div></div>"
});