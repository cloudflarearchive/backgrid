Ext.data.JsonP.Backgrid_Extension_TextareaEditor({
  "tagname": "class",
  "name": "Backgrid.Extension.TextareaEditor",
  "extends": null,
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

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><div class='doc-contents'><p>Renders a form with a text area and a save button in a modal dialog.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;modal hide fade&quot;</code></p></div></div></div><div id='property-cols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-cols' class='name expandable'>cols</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>80</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;submit&quot;: &quot;save&quot;, &quot;hide&quot;: &quot;cancel&quot;, &quot;hidden&quot;: &quot;close&quot;}</code></p></div></div></div><div id='property-modalOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-modalOptions' class='name expandable'>modalOptions</a><span> : Object</span></div><div class='description'><div class='short'>The options passed to Bootstrap's modal\nplugin. ...</div><div class='long'><p>The options passed to Bootstrap's modal\nplugin.</p>\n<p>Defaults to: <code>{backdrop: false}</code></p></div></div></div><div id='property-rows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-rows' class='name expandable'>rows</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>10</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-cancel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-cancel' class='name expandable'>cancel</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Event handler. ...</div><div class='long'><p>Event handler. Revert the text in the model after asking for confirmation\nif dirty, otherwise just close the editor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-close' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-close' class='name expandable'>close</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Event handler. ...</div><div class='long'><p>Event handler. Triggers a <code>done</code> event after the modal is hidden.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Extension.TextareaEditor\" rel=\"Backgrid.Extension.TextareaEditor\" class=\"docClass\">Backgrid.Extension.TextareaEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders this editor. ...</div><div class='long'><p>Renders this editor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Extension.TextareaEditor\" rel=\"Backgrid.Extension.TextareaEditor\" class=\"docClass\">Backgrid.Extension.TextareaEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-save' class='name expandable'>save</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Event handler. ...</div><div class='long'><p>Event handler. Saves the text in the text area to the model.</p>\n\n<p>Triggers a Backbone <code>error</code> event if the value cannot be\nconverted. Classes listening to the <code>error</code> event, usually the Cell\nclasses, should respond appropriately, usually by rendering some kind of\nerror feedback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});