Ext.data.JsonP.Backgrid_Extension_SelectAllHeaderCell({
  "tagname": "class",
  "name": "Backgrid.Extension.SelectAllHeaderCell",
  "extends": "Backgrid.Extension.SelectRowCell",
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
  "id": "class-Backgrid.Extension.SelectAllHeaderCell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.Extension.SelectAllHeaderCell",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Extension.SelectAllHeaderCell",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "enterEditMode",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "method-enterEditMode"
      },
      {
        "name": "exitEditMode",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "method-exitEditMode"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectAllHeaderCell",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "onChange",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectAllHeaderCell",
        "meta": {
        },
        "id": "method-onChange"
      },
      {
        "name": "onKeydown",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "method-onKeydown"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 105,
  "files": [
    {
      "filename": "backgrid-select-all.js",
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
    "Backbone.View",
    "Backgrid.Extension.SelectRowCell"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.Extension.SelectRowCell' rel='Backgrid.Extension.SelectRowCell' class='docClass'>Backgrid.Extension.SelectRowCell</a><div class='subclass '><strong>Backgrid.Extension.SelectAllHeaderCell</strong></div></div></div></pre><div class='doc-contents'><p>Renders a checkbox to select all rows on the current page.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectAllHeaderCell'>Backgrid.Extension.SelectAllHeaderCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectAllHeaderCell-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;select-all-header-cell&quot;</code></p><p>Overrides: <a href='#!/api/Backgrid.Extension.SelectRowCell-property-className' rel='Backgrid.Extension.SelectRowCell-property-className' class='docClass'>Backgrid.Extension.SelectRowCell.className</a></p></div></div></div><div id='property-events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.SelectRowCell' rel='Backgrid.Extension.SelectRowCell' class='defined-in docClass'>Backgrid.Extension.SelectRowCell</a><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;keydown :checkbox&quot;: &quot;onKeydown&quot;, &quot;change :checkbox&quot;: &quot;onChange&quot;, &quot;click :checkbox&quot;: &quot;enterEditMode&quot;}</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectAllHeaderCell'>Backgrid.Extension.SelectAllHeaderCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectAllHeaderCell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;th&quot;</code></p><p>Overrides: <a href='#!/api/Backgrid.Extension.SelectRowCell-property-tagName' rel='Backgrid.Extension.SelectRowCell-property-tagName' class='docClass'>Backgrid.Extension.SelectRowCell.tagName</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-enterEditMode' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.SelectRowCell' rel='Backgrid.Extension.SelectRowCell' class='defined-in docClass'>Backgrid.Extension.SelectRowCell</a><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-enterEditMode' class='name expandable'>enterEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Focuses the checkbox. ...</div><div class='long'><p>Focuses the checkbox.</p>\n</div></div></div><div id='method-exitEditMode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.SelectRowCell' rel='Backgrid.Extension.SelectRowCell' class='defined-in docClass'>Backgrid.Extension.SelectRowCell</a><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-exitEditMode' class='name expandable'>exitEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unfocuses the checkbox. ...</div><div class='long'><p>Unfocuses the checkbox.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectAllHeaderCell'>Backgrid.Extension.SelectAllHeaderCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectAllHeaderCell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer. When this cell's checkbox is checked, a Backbone\n<code>backgrid:select</code> event will be triggered for each model for the current\npage in the underlying collection. If a <code>SelectRowCell</code> instance exists\nfor the rows representing the models, they will check themselves. If any\nof the SelectRowCell instances trigger a Backbone <code>backgrid:selected</code>\nevent with a <code>false</code> value, this cell will uncheck its checkbox. In the\nevent of a Backbone <code>backgrid:refresh</code> event, which is triggered when the\nbody refreshes its rows, which can happen under a number of conditions\nsuch as paging or the columns were reset, this cell will still remember\nthe previously selected models and trigger a Backbone <code>backgrid:select</code>\nevent on them such that the SelectRowCells can recheck themselves upon\nrefreshing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'></div></li></ul></div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Extension.SelectRowCell-method-initialize' rel='Backgrid.Extension.SelectRowCell-method-initialize' class='docClass'>Backgrid.Extension.SelectRowCell.initialize</a></p></div></div></div><div id='method-onChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectAllHeaderCell'>Backgrid.Extension.SelectAllHeaderCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectAllHeaderCell-method-onChange' class='name expandable'>onChange</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Progagates the checked value of this checkbox to all the models of the\nunderlying collection by triggering a Backbone...</div><div class='long'><p>Progagates the checked value of this checkbox to all the models of the\nunderlying collection by triggering a Backbone <code>backgrid:select</code> event on\nthe models themselves, passing each model and the current <code>checked</code> value\nof the checkbox in each event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Extension.SelectRowCell-method-onChange' rel='Backgrid.Extension.SelectRowCell-method-onChange' class='docClass'>Backgrid.Extension.SelectRowCell.onChange</a></p></div></div></div><div id='method-onKeydown' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.SelectRowCell' rel='Backgrid.Extension.SelectRowCell' class='defined-in docClass'>Backgrid.Extension.SelectRowCell</a><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-onKeydown' class='name expandable'>onKeydown</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Process keyboard navigation. ...</div><div class='long'><p>Process keyboard navigation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Extension.SelectRowCell' rel='Backgrid.Extension.SelectRowCell' class='defined-in docClass'>Backgrid.Extension.SelectRowCell</a><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Extension.SelectRowCell\" rel=\"Backgrid.Extension.SelectRowCell\" class=\"docClass\">Backgrid.Extension.SelectRowCell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a checkbox in a table cell. ...</div><div class='long'><p>Renders a checkbox in a table cell.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Extension.SelectRowCell\" rel=\"Backgrid.Extension.SelectRowCell\" class=\"docClass\">Backgrid.Extension.SelectRowCell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});