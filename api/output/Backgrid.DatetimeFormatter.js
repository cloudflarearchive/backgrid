Ext.data.JsonP.Backgrid_DatetimeFormatter({
  "tagname": "class",
  "name": "Backgrid.DatetimeFormatter",
  "extends": "Backgrid.Formatter",
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

    ],
    "property": [

    ],
    "method": [
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
  "linenr": 138,
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
    "Backgrid.Formatter"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Backgrid.Formatter' rel='Backgrid.Formatter' class='docClass'>Backgrid.Formatter</a><div class='subclass '><strong>Backgrid.DatetimeFormatter</strong></div></div></pre><div class='doc-contents'><p>Formatter to converts between various datetime string formats.</p>\n\n<p>This class only understands ISO-8601 formatted datetime strings. If a\ntimezone is specified, it must be an offset. If both <code>includeDate</code> and <code>includeTime</code> are false.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-fromRaw' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DatetimeFormatter'>Backgrid.DatetimeFormatter</span><br/></div><a href='#!/api/Backgrid.DatetimeFormatter-method-fromRaw' class='name expandable'>fromRaw</a>( <span class='pre'>rawData</span> ) : string</div><div class='description'><div class='short'>Converts an ISO-8601 formatted datetime string, possibly with a timezone,\nto a datetime string, date string or a time...</div><div class='long'><p>Converts an ISO-8601 formatted datetime string, possibly with a timezone,\nto a datetime string, date string or a time string in the <strong>local\ntimezone</strong>, depending on the options supplied to this formatter instance at\nconstruction.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rawData</span> : string<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>ISO-8601 string. Always in local time.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Formatter-method-fromRaw' rel='Backgrid.Formatter-method-fromRaw' class='docClass'>Backgrid.Formatter.fromRaw</a></p></div></div></div><div id='method-toRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DatetimeFormatter'>Backgrid.DatetimeFormatter</span><br/></div><a href='#!/api/Backgrid.DatetimeFormatter-method-toRaw' class='name expandable'>toRaw</a>( <span class='pre'>formattedData</span> ) : string|undefined</div><div class='description'><div class='short'>Converts a datetime, date or time string, to an ISO-8601 formatted\ndatetime, date or time string, depending on the op...</div><div class='long'><p>Converts a datetime, date or time string, to an ISO-8601 formatted\ndatetime, date or time string, depending on the options supplied to this\nformatter instance at construction. If the string input does not include a\ntime zone offset, the string is assumed to denote a local time, otherwise\nthe date and time part are assumed to be in UTC.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formattedData</span> : string<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>string|undefined</span><div class='sub-desc'><p>ISO-8601 string. Undefined if unable to convert\nto an ISO-8601 string.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Formatter-method-toRaw' rel='Backgrid.Formatter-method-toRaw' class='docClass'>Backgrid.Formatter.toRaw</a></p></div></div></div></div></div></div></div>"
});