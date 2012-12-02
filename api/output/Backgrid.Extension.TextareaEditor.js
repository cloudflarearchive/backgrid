Ext.data.JsonP.Backgrid_Extension_TextareaEditor({
  "tagname": "class",
  "name": "Backgrid.Extension.TextareaEditor",
  "extends": "Backgrid.InputCellEditor",
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
  "id": "class-Backgrid.Extension.TextareaEditor",
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
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "cols",
        "tagname": "property",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "property-cols"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "modalOptions",
        "tagname": "property",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "property-modalOptions"
      },
      {
        "name": "rows",
        "tagname": "property",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "property-rows"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "property-tagName"
      },
      {
        "name": "template",
        "tagname": "property",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "property-template"
      }
    ],
    "method": [
      {
        "name": "cancel",
        "tagname": "method",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "method-cancel"
      },
      {
        "name": "close",
        "tagname": "method",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "method-close"
      },
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
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "save",
        "tagname": "method",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "method-save"
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
  "linenr": 11,
  "files": [
    {
      "filename": "backgrid-text-cell.js",
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
    "Backgrid.InputCellEditor"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='docClass'>Backgrid.CellEditor</a><div class='subclass '><a href='#!/api/Backgrid.InputCellEditor' rel='Backgrid.InputCellEditor' class='docClass'>Backgrid.InputCellEditor</a><div class='subclass '><strong>Backgrid.Extension.TextareaEditor</strong></div></div></div></div></pre><div class='doc-contents'><p>Renders a form with a text area and a save button in a modal dialog.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-attributes' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.InputCellEditor' rel='Backgrid.InputCellEditor' class='defined-in docClass'>Backgrid.InputCellEditor</a><br/></div><a href='#!/api/Backgrid.InputCellEditor-property-attributes' class='name expandable'>attributes</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: &quot;text&quot;}</code></p></div></div></div><div id='property-className' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;modal hide fade&quot;</code></p></div></div></div><div id='property-cols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-cols' class='name expandable'>cols</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>80</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;submit&quot;: &quot;save&quot;, &quot;hide&quot;: &quot;cancel&quot;, &quot;hidden&quot;: &quot;close&quot;}</code></p><p>Overrides: <a href='#!/api/Backgrid.InputCellEditor-property-events' rel='Backgrid.InputCellEditor-property-events' class='docClass'>Backgrid.InputCellEditor.events</a></p></div></div></div><div id='property-modalOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-modalOptions' class='name expandable'>modalOptions</a><span> : Object</span></div><div class='description'><div class='short'>The options passed to Bootstrap's modal\nplugin. ...</div><div class='long'><p>The options passed to Bootstrap's modal\nplugin.</p>\n<p>Defaults to: <code>{backdrop: false}</code></p></div></div></div><div id='property-rows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-rows' class='name expandable'>rows</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>10</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;div&quot;</code></p><p>Overrides: <a href='#!/api/Backgrid.InputCellEditor-property-tagName' rel='Backgrid.InputCellEditor-property-tagName' class='docClass'>Backgrid.InputCellEditor.tagName</a></p></div></div></div><div id='property-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-template' class='name not-expandable'>template</a><span> : function(Object, ?Object=): string</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-cancel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-cancel' class='name expandable'>cancel</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Event handler. ...</div><div class='long'><p>Event handler. Revert the text in the model after asking for confirmation\nif dirty, otherwise just close the editor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-close' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-close' class='name expandable'>close</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Triggers a done event after the modal is hidden. ...</div><div class='long'><p>Triggers a <code>done</code> event after the modal is hidden.</p>\n</div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.InputCellEditor' rel='Backgrid.InputCellEditor' class='defined-in docClass'>Backgrid.InputCellEditor</a><br/></div><a href='#!/api/Backgrid.InputCellEditor-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer. Removes this <code>el</code> from the DOM when a <code>done</code> event is\ntriggered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a><div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li><li><span class='pre'>placeholder</span> : string (optional)<div class='sub-desc'></div></li></ul></div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellEditor-method-initialize' rel='Backgrid.CellEditor-method-initialize' class='docClass'>Backgrid.CellEditor.initialize</a></p></div></div></div><div id='method-postRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='defined-in docClass'>Backgrid.CellEditor</a><br/></div><a href='#!/api/Backgrid.CellEditor-method-postRender' class='name expandable'>postRender</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Post-rendering setup and initialization. ...</div><div class='long'><p>Post-rendering setup and initialization. Focuses the cell editor's <code>el</code> in\nthis default implementation. <strong>Should</strong> be called by Cell classes after\ncalling Backgrid.CellEditor#render.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Extension.TextareaEditor\" rel=\"Backgrid.Extension.TextareaEditor\" class=\"docClass\">Backgrid.Extension.TextareaEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a modal form dialog with a textarea, submit button and a close button. ...</div><div class='long'><p>Renders a modal form dialog with a textarea, submit button and a close button.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Extension.TextareaEditor\" rel=\"Backgrid.Extension.TextareaEditor\" class=\"docClass\">Backgrid.Extension.TextareaEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.InputCellEditor-method-render' rel='Backgrid.InputCellEditor-method-render' class='docClass'>Backgrid.InputCellEditor.render</a></p></div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-save' class='name expandable'>save</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Event handler. ...</div><div class='long'><p>Event handler. Saves the text in the text area to the model.</p>\n\n<p>Triggers a Backbone <code>error</code> event if the value cannot be\nconverted. Classes listening to the <code>error</code> event, usually the Cell\nclasses, should respond appropriately, usually by rendering some kind of\nerror feedback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-saveOrCancel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.InputCellEditor' rel='Backgrid.InputCellEditor' class='defined-in docClass'>Backgrid.InputCellEditor</a><br/></div><a href='#!/api/Backgrid.InputCellEditor-method-saveOrCancel' class='name expandable'>saveOrCancel</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>If the key pressed is enter or tab, converts the value in the editor to\na raw value for the model using the formatter. ...</div><div class='long'><p>If the key pressed is <code>enter</code> or <code>tab</code>, converts the value in the editor to\na raw value for the model using the formatter.</p>\n\n<p>If the key pressed is <code>esc</code> the changes are undone.</p>\n\n<p>If the editor's value was changed and goes out of focus (<code>blur</code>), the event\nis intercepted, cancelled so the cell remains in focus pending for further\naction.</p>\n\n<p>Triggers a Backbone <code>done</code> event when successful. <code>error</code> if the value\ncannot be converted. Classes listening to the <code>error</code> event, usually the\nCell classes, should respond appropriately, usually by rendering some kind\nof error feedback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});