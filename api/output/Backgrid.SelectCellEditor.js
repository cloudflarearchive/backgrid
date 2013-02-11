Ext.data.JsonP.Backgrid_SelectCellEditor({
  "tagname": "class",
  "name": "Backgrid.SelectCellEditor",
  "extends": "Backgrid.CellEditor",
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
  "id": "class-Backgrid.SelectCellEditor",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.SelectCellEditor",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.SelectCellEditor",
        "meta": {
        },
        "id": "property-tagName"
      },
      {
        "name": "template",
        "tagname": "property",
        "owner": "Backgrid.SelectCellEditor",
        "meta": {
        },
        "id": "property-template"
      }
    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.CellEditor",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "postRender",
        "tagname": "method",
        "owner": "Backgrid.CellEditor",
        "meta": {
          "chainable": true
        },
        "id": "method-postRender"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.SelectCellEditor",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "save",
        "tagname": "method",
        "owner": "Backgrid.SelectCellEditor",
        "meta": {
        },
        "id": "method-save"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 649,
  "files": [
    {
      "filename": "cell.js",
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
    "Backgrid.CellEditor"
  ],
  "subclasses": [
    "Backgrid.Extension.Select2CellEditor"
  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='docClass'>Backgrid.CellEditor</a><div class='subclass '><strong>Backgrid.SelectCellEditor</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Backgrid.Extension.Select2CellEditor' rel='Backgrid.Extension.Select2CellEditor' class='docClass'>Backgrid.Extension.Select2CellEditor</a></div></pre><div class='doc-contents'><p>SelectCellEditor renders an HTML <code>&lt;select&gt;</code> fragment as the editor.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-events' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCellEditor'>Backgrid.SelectCellEditor</span><br/></div><a href='#!/api/Backgrid.SelectCellEditor-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;change&quot;: &quot;save&quot;, &quot;blur&quot;: &quot;save&quot;}</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCellEditor'>Backgrid.SelectCellEditor</span><br/></div><a href='#!/api/Backgrid.SelectCellEditor-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;select&quot;</code></p></div></div></div><div id='property-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCellEditor'>Backgrid.SelectCellEditor</span><br/></div><a href='#!/api/Backgrid.SelectCellEditor-property-template' class='name not-expandable'>template</a><span> : function(Object, ?Object=): string</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='defined-in docClass'>Backgrid.CellEditor</a><br/></div><a href='#!/api/Backgrid.CellEditor-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>parent</span> : *<div class='sub-desc'></div></li><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a><div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>formatter</code> is not a formatter instance, or when\n<code>model</code> or <code>column</code> are undefined.</p>\n</div></li></ul></div></div></div><div id='method-postRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='defined-in docClass'>Backgrid.CellEditor</a><br/></div><a href='#!/api/Backgrid.CellEditor-method-postRender' class='name expandable'>postRender</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Post-rendering setup and initialization. ...</div><div class='long'><p>Post-rendering setup and initialization. Focuses the cell editor's <code>el</code> in\nthis default implementation. <strong>Should</strong> be called by Cell classes after\ncalling Backgrid.CellEditor#render.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCellEditor'>Backgrid.SelectCellEditor</span><br/></div><a href='#!/api/Backgrid.SelectCellEditor-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.SelectCellEditor\" rel=\"Backgrid.SelectCellEditor\" class=\"docClass\">Backgrid.SelectCellEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders the options if optionValues is a list of name-value pairs. ...</div><div class='long'><p>Renders the options if <code>optionValues</code> is a list of name-value pairs. The\noptions are contained inside option groups if <code>optionValues</code> is a list of\nobject hashes. The name is rendered at the option text and the value is the\noption value. If <code>optionValues</code> is a function, it is called without a\nparameter.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.SelectCellEditor\" rel=\"Backgrid.SelectCellEditor\" class=\"docClass\">Backgrid.SelectCellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCellEditor'>Backgrid.SelectCellEditor</span><br/></div><a href='#!/api/Backgrid.SelectCellEditor-method-save' class='name expandable'>save</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Saves the value of the selected option to the model attribute. ...</div><div class='long'><p>Saves the value of the selected option to the model attribute. Triggers a\n<code>done</code> Backbone event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});