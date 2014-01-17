Ext.data.JsonP.Backgrid_DatetimeFormatter({
  "tagname": "class",
  "name": "Backgrid.DatetimeFormatter",
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
  "id": "class-Backgrid.DatetimeFormatter",
  "members": {
    "cfg": [
      {
        "name": "options",
        "tagname": "cfg",
        "owner": "Backgrid.DatetimeFormatter",
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
        "owner": "Backgrid.DatetimeFormatter",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "fromRaw",
        "tagname": "method",
        "owner": "Backgrid.DatetimeFormatter",
        "meta": {
        },
        "id": "method-fromRaw"
      },
      {
        "name": "toRaw",
        "tagname": "method",
        "owner": "Backgrid.DatetimeFormatter",
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
  "linenr": 225,
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.CellFormatter' rel='Backgrid.CellFormatter' class='docClass'>Backgrid.CellFormatter</a><div class='subclass '><strong>Backgrid.DatetimeFormatter</strong></div></div></pre><div class='doc-contents'><p>Formatter to converts between various datetime formats.</p>\n\n<p>This class only understands ISO-8601 formatted datetime strings and UNIX\noffset (number of milliseconds since UNIX Epoch). See\nBackgrid.Extension.MomentFormatter if you need a much more flexible datetime\nformatter.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-options' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DatetimeFormatter'>Backgrid.DatetimeFormatter</span><br/></div><a href='#!/api/Backgrid.DatetimeFormatter-cfg-options' class='name expandable'>options</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<ul><li><span class='pre'>includeDate</span> : boolean (optional)<div class='sub-desc'><p>Whether the values include the\ndate part.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>includeTime</span> : boolean (optional)<div class='sub-desc'><p>Whether the values include the\ntime part.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>includeMilli</span> : boolean (optional)<div class='sub-desc'><p>If <code>includeTime</code> is true,\nwhether to include the millisecond part, if it exists.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DatetimeFormatter'>Backgrid.DatetimeFormatter</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.DatetimeFormatter-method-constructor' class='name expandable'>Backgrid.DatetimeFormatter</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.DatetimeFormatter\" rel=\"Backgrid.DatetimeFormatter\" class=\"docClass\">Backgrid.DatetimeFormatter</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.DatetimeFormatter\" rel=\"Backgrid.DatetimeFormatter\" class=\"docClass\">Backgrid.DatetimeFormatter</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Error</span><div class='sub-desc'><p>If both <code>includeDate</code> and <code>includeTime</code> are false.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-constructor' rel='Backgrid.CellFormatter-method-constructor' class='docClass'>Backgrid.CellFormatter.constructor</a></p></div></div></div><div id='method-fromRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DatetimeFormatter'>Backgrid.DatetimeFormatter</span><br/></div><a href='#!/api/Backgrid.DatetimeFormatter-method-fromRaw' class='name expandable'>fromRaw</a>( <span class='pre'>rawData, model</span> ) : string|null|undefined</div><div class='description'><div class='short'>Converts an ISO-8601 formatted datetime string to a datetime string, date\nstring or a time string. ...</div><div class='long'><p>Converts an ISO-8601 formatted datetime string to a datetime string, date\nstring or a time string. The timezone is ignored if supplied.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawData</span> : string<div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>Used for more complicated formatting</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string|null|undefined</span><div class='sub-desc'><p>ISO-8601 string in UTC. Null and undefined\nvalues are returned as is.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-fromRaw' rel='Backgrid.CellFormatter-method-fromRaw' class='docClass'>Backgrid.CellFormatter.fromRaw</a></p></div></div></div><div id='method-toRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DatetimeFormatter'>Backgrid.DatetimeFormatter</span><br/></div><a href='#!/api/Backgrid.DatetimeFormatter-method-toRaw' class='name expandable'>toRaw</a>( <span class='pre'>formattedData, model</span> ) : string|undefined</div><div class='description'><div class='short'>Converts an ISO-8601 formatted datetime string to a datetime string, date\nstring or a time string. ...</div><div class='long'><p>Converts an ISO-8601 formatted datetime string to a datetime string, date\nstring or a time string. The timezone is ignored if supplied. This method\nparses the input values exactly the same way as\nBackgrid.Extension.MomentFormatter#fromRaw(), in addition to doing some\nsanity checks.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formattedData</span> : string<div class='sub-desc'>\n</div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>Used for more complicated formatting</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string|undefined</span><div class='sub-desc'><p>ISO-8601 string in UTC. Undefined if a date is\nfound when <code>includeDate</code> is false, or a time is found when <code>includeTime</code> is\nfalse, or if <code>includeDate</code> is true and a date is not found, or if\n<code>includeTime</code> is true and a time is not found.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellFormatter-method-toRaw' rel='Backgrid.CellFormatter-method-toRaw' class='docClass'>Backgrid.CellFormatter.toRaw</a></p></div></div></div></div></div></div></div>"
});