Ext.data.JsonP.Backgrid_Extension_Select2CellEditor({
  "tagname": "class",
  "name": "Backgrid.Extension.Select2CellEditor",
  "extends": "Backgrid.SelectCellEditor",
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
  "id": "class-Backgrid.Extension.Select2CellEditor",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.Extension.Select2CellEditor",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "select2Options",
        "tagname": "property",
        "owner": "Backgrid.Extension.Select2CellEditor",
        "meta": {
        },
        "id": "property-select2Options"
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
        "name": "close",
        "tagname": "method",
        "owner": "Backgrid.SelectCellEditor",
        "meta": {
        },
        "id": "method-close"
      },
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
        "owner": "Backgrid.Extension.Select2CellEditor",
        "meta": {
        },
        "id": "method-postRender"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Extension.Select2CellEditor",
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
      },
      {
        "name": "setSelect2Options",
        "tagname": "method",
        "owner": "Backgrid.Extension.Select2CellEditor",
        "meta": {
        },
        "id": "method-setSelect2Options"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 11,
  "files": [
    {
      "filename": "backgrid-select2-cell.js",
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
    "Backgrid.CellEditor",
    "Backgrid.SelectCellEditor"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='docClass'>Backgrid.CellEditor</a><div class='subclass '><a href='#!/api/Backgrid.SelectCellEditor' rel='Backgrid.SelectCellEditor' class='docClass'>Backgrid.SelectCellEditor</a><div class='subclass '><strong>Backgrid.Extension.Select2CellEditor</strong></div></div></div></div></pre><div class='doc-contents'><p>Select2CellEditor is a cell editor that renders a <code>select2</code> select box\ninstead of the default <code>&lt;select&gt;</code> HTML element.</p>\n\n<p>See:</p>\n\n<ul>\n<li><a href=\"http://ivaynberg.github.com/select2/\">Select2</a></li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-events' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Select2CellEditor'>Backgrid.Extension.Select2CellEditor</span><br/></div><a href='#!/api/Backgrid.Extension.Select2CellEditor-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;close&quot;: &quot;save&quot;, &quot;change&quot;: &quot;save&quot;}</code></p><p>Overrides: <a href='#!/api/Backgrid.SelectCellEditor-property-events' rel='Backgrid.SelectCellEditor-property-events' class='docClass'>Backgrid.SelectCellEditor.events</a></p></div></div></div><div id='property-select2Options' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Select2CellEditor'>Backgrid.Extension.Select2CellEditor</span><br/></div><a href='#!/api/Backgrid.Extension.Select2CellEditor-property-select2Options' class='name not-expandable'>select2Options</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.SelectCellEditor' rel='Backgrid.SelectCellEditor' class='defined-in docClass'>Backgrid.SelectCellEditor</a><br/></div><a href='#!/api/Backgrid.SelectCellEditor-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;select&quot;</code></p></div></div></div><div id='property-template' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.SelectCellEditor' rel='Backgrid.SelectCellEditor' class='defined-in docClass'>Backgrid.SelectCellEditor</a><br/></div><a href='#!/api/Backgrid.SelectCellEditor-property-template' class='name not-expandable'>template</a><span> : function(Object, ?Object=): string</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.SelectCellEditor' rel='Backgrid.SelectCellEditor' class='defined-in docClass'>Backgrid.SelectCellEditor</a><br/></div><a href='#!/api/Backgrid.SelectCellEditor-method-close' class='name expandable'>close</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Triggers a backgrid:edited event from the model so the body can close\nthis editor. ...</div><div class='long'><p>Triggers a <code>backgrid:edited</code> event from the model so the body can close\nthis editor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='defined-in docClass'>Backgrid.CellEditor</a><br/></div><a href='#!/api/Backgrid.CellEditor-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a><div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>formatter</code> is not a formatter instance, or when\n<code>model</code> or <code>column</code> are undefined.</p>\n</div></li></ul></div></div></div><div id='method-postRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Select2CellEditor'>Backgrid.Extension.Select2CellEditor</span><br/></div><a href='#!/api/Backgrid.Extension.Select2CellEditor-method-postRender' class='name expandable'>postRender</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Attach event handlers to the select2 box and focus it. ...</div><div class='long'><p>Attach event handlers to the select2 box and focus it.</p>\n<p>Overrides: <a href='#!/api/Backgrid.CellEditor-method-postRender' rel='Backgrid.CellEditor-method-postRender' class='docClass'>Backgrid.CellEditor.postRender</a></p></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Select2CellEditor'>Backgrid.Extension.Select2CellEditor</span><br/></div><a href='#!/api/Backgrid.Extension.Select2CellEditor-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Extension.Select2CellEditor\" rel=\"Backgrid.Extension.Select2CellEditor\" class=\"docClass\">Backgrid.Extension.Select2CellEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a select2 select box instead of the default &lt;select&gt; HTML\nelement using the supplied options from selec...</div><div class='long'><p>Renders a <code>select2</code> select box instead of the default <code>&lt;select&gt;</code> HTML\nelement using the supplied options from <a href=\"#!/api/Backgrid.Extension.Select2CellEditor-property-select2Options\" rel=\"Backgrid.Extension.Select2CellEditor-property-select2Options\" class=\"docClass\">select2Options</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Extension.Select2CellEditor\" rel=\"Backgrid.Extension.Select2CellEditor\" class=\"docClass\">Backgrid.Extension.Select2CellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.SelectCellEditor-method-render' rel='Backgrid.SelectCellEditor-method-render' class='docClass'>Backgrid.SelectCellEditor.render</a></p></div></div></div><div id='method-save' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.SelectCellEditor' rel='Backgrid.SelectCellEditor' class='defined-in docClass'>Backgrid.SelectCellEditor</a><br/></div><a href='#!/api/Backgrid.SelectCellEditor-method-save' class='name expandable'>save</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Saves the value of the selected option to the model attribute. ...</div><div class='long'><p>Saves the value of the selected option to the model attribute. Triggers a\n<code>backgrid:edited</code> Backbone event from the model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSelect2Options' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Select2CellEditor'>Backgrid.Extension.Select2CellEditor</span><br/></div><a href='#!/api/Backgrid.Extension.Select2CellEditor-method-setSelect2Options' class='name expandable'>setSelect2Options</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Sets the options for select2. ...</div><div class='long'><p>Sets the options for <code>select2</code>. Called by the parent Select2Cell during\nedit mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});