Ext.data.JsonP.Backgrid_DivCellEditor({
  "tagname": "class",
  "name": "Backgrid.DivCellEditor",
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
  "id": "class-Backgrid.DivCellEditor",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "attributes",
        "tagname": "property",
        "owner": "Backgrid.DivCellEditor",
        "meta": {
        },
        "id": "property-attributes"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.DivCellEditor",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.DivCellEditor",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.DivCellEditor",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "postRender",
        "tagname": "method",
        "owner": "Backgrid.DivCellEditor",
        "meta": {
          "chainable": true
        },
        "id": "method-postRender"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.DivCellEditor",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "saveOrCancel",
        "tagname": "method",
        "owner": "Backgrid.DivCellEditor",
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
  "linenr": 360,
  "files": [
    {
      "filename": "backgrid.js",
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='docClass'>Backgrid.CellEditor</a><div class='subclass '><strong>Backgrid.DivCellEditor</strong></div></div></div></pre><div class='doc-contents'><p>A CellEditor subclass that uses a contenteditable <code>div</code> tag as the editing\narea. Used by most built-in cell types.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-attributes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DivCellEditor'>Backgrid.DivCellEditor</span><br/></div><a href='#!/api/Backgrid.DivCellEditor-property-attributes' class='name expandable'>attributes</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{contenteditable: &quot;true&quot;}</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DivCellEditor'>Backgrid.DivCellEditor</span><br/></div><a href='#!/api/Backgrid.DivCellEditor-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{blur: &quot;saveOrCancel&quot;, keydown: &quot;saveOrCancel&quot;}</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DivCellEditor'>Backgrid.DivCellEditor</span><br/></div><a href='#!/api/Backgrid.DivCellEditor-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;div&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DivCellEditor'>Backgrid.DivCellEditor</span><br/></div><a href='#!/api/Backgrid.DivCellEditor-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer. Removes this <code>el</code> from the DOM when a <code>done</code> event is\ntriggered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.Formatter\" rel=\"Backgrid.Formatter\" class=\"docClass\">Backgrid.Formatter</a><div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li></ul></div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellEditor-method-initialize' rel='Backgrid.CellEditor-method-initialize' class='docClass'>Backgrid.CellEditor.initialize</a></p></div></div></div><div id='method-postRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DivCellEditor'>Backgrid.DivCellEditor</span><br/></div><a href='#!/api/Backgrid.DivCellEditor-method-postRender' class='name expandable'>postRender</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.DivCellEditor\" rel=\"Backgrid.DivCellEditor\" class=\"docClass\">Backgrid.DivCellEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Focuses the editor and moves the caret inside and to the end of the text. ...</div><div class='long'><p>Focuses the editor and moves the caret inside and to the end of the text.\nSee <a href=\"#!/api/Backgrid.CellEditor-method-postRender\" rel=\"Backgrid.CellEditor-method-postRender\" class=\"docClass\">Backgrid.CellEditor.postRender</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.DivCellEditor\" rel=\"Backgrid.DivCellEditor\" class=\"docClass\">Backgrid.DivCellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.CellEditor-method-postRender' rel='Backgrid.CellEditor-method-postRender' class='docClass'>Backgrid.CellEditor.postRender</a></p></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DivCellEditor'>Backgrid.DivCellEditor</span><br/></div><a href='#!/api/Backgrid.DivCellEditor-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.DivCellEditor\" rel=\"Backgrid.DivCellEditor\" class=\"docClass\">Backgrid.DivCellEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders this editor. ...</div><div class='long'><p>Renders this editor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.DivCellEditor\" rel=\"Backgrid.DivCellEditor\" class=\"docClass\">Backgrid.DivCellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-saveOrCancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.DivCellEditor'>Backgrid.DivCellEditor</span><br/></div><a href='#!/api/Backgrid.DivCellEditor-method-saveOrCancel' class='name expandable'>saveOrCancel</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>If the key pressed is enter or tab, converts the value in the editor to\na raw value for the model using the formatter. ...</div><div class='long'><p>If the key pressed is <code>enter</code> or <code>tab</code>, converts the value in the editor to\na raw value for the model using the formatter.</p>\n\n<p>If the key pressed is <code>esc</code> or the event type is <code>blur</code>, undo the changes.</p>\n\n<p>Triggers a Backbone <code>done</code> event when successful. <code>error</code> if the value\ncannot be converted. Classes listening to the <code>error</code> event, usually the\nCell classes, should respond appropriately, usually by rendering some kind\nof error feedback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});