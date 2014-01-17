Ext.data.JsonP.Backgrid_PercentFormatter({
  "tagname": "class",
  "name": "Backgrid.PercentFormatter",
  "extends": "Backgrid.NumberFormatter",
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
  "id": "class-Backgrid.PercentFormatter",
  "members": {
    "cfg": [
      {
        "name": "options",
        "tagname": "cfg",
        "owner": "Backgrid.PercentFormatter",
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
        "owner": "Backgrid.PercentFormatter",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "fromRaw",
        "tagname": "method",
        "owner": "Backgrid.PercentFormatter",
        "meta": {
        },
        "id": "method-fromRaw"
      },
      {
        "name": "toRaw",
        "tagname": "method",
        "owner": "Backgrid.PercentFormatter",
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
  "linenr": 155,
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
    "Backgrid.CellFormatter",
    "Backgrid.NumberFormatter"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='docClass'>Backgrid.CellFormatter</a><div class='subclass '><a href='#!/api/Backgrid.NumberFormatter' rel='Backgrid.NumberFormatter' class='docClass'>Backgrid.NumberFormatter</a><div class='subclass '><strong>Backgrid.PercentFormatter</strong></div></div></div></pre><div class='doc-contents'><p>A number formatter that converts a floating point number, optionally\nmultiplied by a multiplier, to a percentage string and vice versa.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-options' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.PercentFormatter'>Backgrid.PercentFormatter</span><br/></div><a href='#!/api/Backgrid.PercentFormatter-cfg-options' class='name expandable'>options</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<ul><li><span class='pre'>multiplier</span> : number (optional)<div class='sub-desc'><p>The number used to multiply the model\nvalue for display.</p>\n<p>Defaults to: <code>1</code></p></div></li><li><span class='pre'>symbol</span> : string (optional)<div class='sub-desc'><p>The symbol to append to the percentage\nstring.</p>\n<p>Defaults to: <code>&#39;%&#39;</code></p></div></li></ul><p>Overrides: <a href='#!/api/Backgrid.NumberFormatter-cfg-options' rel='Backgrid.NumberFormatter-cfg-options' class='docClass'>Backgrid.NumberFormatter.options</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.PercentFormatter'>Backgrid.PercentFormatter</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.PercentFormatter-method-constructor' class='name expandable'>Backgrid.PercentFormatter</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.PercentFormatter\" rel=\"Backgrid.PercentFormatter\" class=\"docClass\">Backgrid.PercentFormatter</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.PercentFormatter\" rel=\"Backgrid.PercentFormatter\" class=\"docClass\">Backgrid.PercentFormatter</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>RangeError</span><div class='sub-desc'><p>If decimals &lt; 0 or > 20.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.NumberFormatter-method-constructor' rel='Backgrid.NumberFormatter-method-constructor' class='docClass'>Backgrid.NumberFormatter.constructor</a></p></div></div></div><div id='method-fromRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.PercentFormatter'>Backgrid.PercentFormatter</span><br/></div><a href='#!/api/Backgrid.PercentFormatter-method-fromRaw' class='name expandable'>fromRaw</a>( <span class='pre'>rawValue, model</span> ) : string</div><div class='description'><div class='short'>Takes a floating point number, where the number is first multiplied by\nmultiplier, then converted to a formatted stri...</div><div class='long'><p>Takes a floating point number, where the number is first multiplied by\n<code>multiplier</code>, then converted to a formatted string like\nNumberFormatter#fromRaw, then finally append <code>symbol</code> to the end.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawValue</span> : number<div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>Used for more complicated formatting</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.NumberFormatter-method-fromRaw' rel='Backgrid.NumberFormatter-method-fromRaw' class='docClass'>Backgrid.NumberFormatter.fromRaw</a></p></div></div></div><div id='method-toRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.PercentFormatter'>Backgrid.PercentFormatter</span><br/></div><a href='#!/api/Backgrid.PercentFormatter-method-toRaw' class='name expandable'>toRaw</a>( <span class='pre'>formattedData, model</span> ) : number|undefined</div><div class='description'><div class='short'>Takes a string, possibly appended with symbol and/or decimalSeparator,\nand convert it back to a number for the model ...</div><div class='long'><p>Takes a string, possibly appended with <code>symbol</code> and/or <code>decimalSeparator</code>,\nand convert it back to a number for the model like NumberFormatter#toRaw,\nand then dividing it by <code>multiplier</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formattedData</span> : string<div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>Used for more complicated formatting</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>number|undefined</span><div class='sub-desc'><p>Undefined if the string cannot be converted to\na number.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.NumberFormatter-method-toRaw' rel='Backgrid.NumberFormatter-method-toRaw' class='docClass'>Backgrid.NumberFormatter.toRaw</a></p></div></div></div></div></div></div></div>"
});