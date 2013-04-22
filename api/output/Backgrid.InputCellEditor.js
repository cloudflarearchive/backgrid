Ext.data.JsonP.Backgrid_InputCellEditor({
  "tagname": "class",
  "name": "Backgrid.InputCellEditor",
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
  "id": "class-Backgrid.InputCellEditor",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "attributes",
        "tagname": "property",
        "owner": "Backgrid.InputCellEditor",
        "meta": {
        },
        "id": "property-attributes"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.InputCellEditor",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.InputCellEditor",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.InputCellEditor",
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
        "owner": "Backgrid.InputCellEditor",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "saveOrCancel",
        "tagname": "method",
        "owner": "Backgrid.InputCellEditor",
        "meta": {
        },
        "id": "method-saveOrCancel"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 55,
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

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='docClass'>Backgrid.CellEditor</a><div class='subclass '><strong>Backgrid.InputCellEditor</strong></div></div></div></pre><div class='doc-contents'><p>InputCellEditor the cell editor type used by most core cell types. This cell\neditor renders a text input box as its editor. The input will render a\nplaceholder if the value is empty on supported browsers.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-attributes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.InputCellEditor'>Backgrid.InputCellEditor</span><br/></div><a href='#!/api/Backgrid.InputCellEditor-property-attributes' class='name expandable'>attributes</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: &quot;text&quot;}</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.InputCellEditor'>Backgrid.InputCellEditor</span><br/></div><a href='#!/api/Backgrid.InputCellEditor-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;blur&quot;: &quot;saveOrCancel&quot;, &quot;keydown&quot;: &quot;saveOrCancel&quot;}</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.InputCellEditor'>Backgrid.InputCellEditor</span><br/></div><a href='#!/api/Backgrid.InputCellEditor-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;input&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.InputCellEditor'>Backgrid.InputCellEditor</span><br/></div><a href='#!/api/Backgrid.InputCellEditor-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer. Removes this <code>el</code> from the DOM when a <code>done</code> event is\ntriggered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a><div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li><li><span class='pre'>placeholder</span> : string (optional)<div class='sub-desc'></div></li></ul></div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellEditor-method-initialize' rel='Backgrid.CellEditor-method-initialize' class='docClass'>Backgrid.CellEditor.initialize</a></p></div></div></div><div id='method-postRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='defined-in docClass'>Backgrid.CellEditor</a><br/></div><a href='#!/api/Backgrid.CellEditor-method-postRender' class='name expandable'>postRender</a>( <span class='pre'>model, column</span> ) : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Post-rendering setup and initialization. ...</div><div class='long'><p>Post-rendering setup and initialization. Focuses the cell editor's <code>el</code> in\nthis default implementation. <strong>Should</strong> be called by Cell classes after\ncalling Backgrid.CellEditor#render.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>column</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.InputCellEditor'>Backgrid.InputCellEditor</span><br/></div><a href='#!/api/Backgrid.InputCellEditor-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.InputCellEditor\" rel=\"Backgrid.InputCellEditor\" class=\"docClass\">Backgrid.InputCellEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a text input with the cell value formatted for display, if it\nexists. ...</div><div class='long'><p>Renders a text input with the cell value formatted for display, if it\nexists.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.InputCellEditor\" rel=\"Backgrid.InputCellEditor\" class=\"docClass\">Backgrid.InputCellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-saveOrCancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.InputCellEditor'>Backgrid.InputCellEditor</span><br/></div><a href='#!/api/Backgrid.InputCellEditor-method-saveOrCancel' class='name expandable'>saveOrCancel</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>If the key pressed is enter, tab, up, or down, converts the value\nin the editor to a raw value for saving into the mo...</div><div class='long'><p>If the key pressed is <code>enter</code>, <code>tab</code>, <code>up</code>, or <code>down</code>, converts the value\nin the editor to a raw value for saving into the model using the formatter.</p>\n\n<p>If the key pressed is <code>esc</code> the changes are undone.</p>\n\n<p>If the editor goes out of focus (<code>blur</code>) but the value is invalid, the\nevent is intercepted and cancelled so the cell remains in focus pending for\nfurther action. The changes are saved otherwise.</p>\n\n<p>Triggers a Backbone <code>backgrid:edited</code> event from the model when successful,\nand <code>backgrid:error</code> if the value cannot be converted. Classes listening to\nthe <code>error</code> event, usually the Cell classes, should respond appropriately,\nusually by rendering some kind of error feedback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});