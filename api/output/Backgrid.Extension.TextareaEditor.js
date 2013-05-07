Ext.data.JsonP.Backgrid_Extension_TextareaEditor({
  "tagname": "class",
  "name": "Backgrid.Extension.TextareaEditor",
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
        "name": "clearError",
        "tagname": "property",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "property-clearError"
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
        "name": "close",
        "tagname": "method",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "method-close"
      },
      {
        "name": "focus",
        "tagname": "method",
        "owner": "Backgrid.Extension.TextareaEditor",
        "meta": {
        },
        "id": "method-focus"
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
        "name": "saveOrCancel",
        "tagname": "method",
        "owner": "Backgrid.Extension.TextareaEditor",
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
    "Backgrid.CellEditor"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='docClass'>Backgrid.CellEditor</a><div class='subclass '><strong>Backgrid.Extension.TextareaEditor</strong></div></div></div></pre><div class='doc-contents'><p>Renders a form with a text area and a save button in a modal dialog.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;modal hide fade&quot;</code></p></div></div></div><div id='property-clearError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-clearError' class='name not-expandable'>clearError</a><span> : Object</span></div><div class='description'><div class='short'><p>Clears the error class on the parent cell.</p>\n</div><div class='long'><p>Clears the error class on the parent cell.</p>\n</div></div></div><div id='property-cols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-cols' class='name expandable'>cols</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>80</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;keydown textarea&quot;: &quot;clearError&quot;, &quot;submit&quot;: &quot;saveOrCancel&quot;, &quot;hide&quot;: &quot;saveOrCancel&quot;, &quot;hidden&quot;: &quot;close&quot;, &quot;shown&quot;: &quot;focus&quot;}</code></p></div></div></div><div id='property-modalOptions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-modalOptions' class='name expandable'>modalOptions</a><span> : Object</span></div><div class='description'><div class='short'>The options passed to Bootstrap's modal\nplugin. ...</div><div class='long'><p>The options passed to Bootstrap's modal\nplugin.</p>\n<p>Defaults to: <code>{backdrop: false}</code></p></div></div></div><div id='property-rows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-rows' class='name expandable'>rows</a><span> : Number</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>10</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;div&quot;</code></p></div></div></div><div id='property-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-property-template' class='name not-expandable'>template</a><span> : function(Object, ?Object=): string</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-close' class='name expandable'>close</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Triggers a backgrid:edited event along with the cell editor as the\nparameter after the modal is hidden. ...</div><div class='long'><p>Triggers a <code>backgrid:edited</code> event along with the cell editor as the\nparameter after the modal is hidden.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-focus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-focus' class='name expandable'>focus</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Focuses the textarea when the modal is shown. ...</div><div class='long'><p>Focuses the textarea when the modal is shown.</p>\n</div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='defined-in docClass'>Backgrid.CellEditor</a><br/></div><a href='#!/api/Backgrid.CellEditor-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a><div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>formatter</code> is not a formatter instance, or when\n<code>model</code> or <code>column</code> are undefined.</p>\n</div></li></ul></div></div></div><div id='method-postRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.CellEditor' rel='Backgrid.CellEditor' class='defined-in docClass'>Backgrid.CellEditor</a><br/></div><a href='#!/api/Backgrid.CellEditor-method-postRender' class='name expandable'>postRender</a>( <span class='pre'>model, column</span> ) : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Post-rendering setup and initialization. ...</div><div class='long'><p>Post-rendering setup and initialization. Focuses the cell editor's <code>el</code> in\nthis default implementation. <strong>Should</strong> be called by Cell classes after\ncalling Backgrid.CellEditor#render.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>column</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Extension.TextareaEditor\" rel=\"Backgrid.Extension.TextareaEditor\" class=\"docClass\">Backgrid.Extension.TextareaEditor</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a modal form dialog with a textarea, submit button and a close button. ...</div><div class='long'><p>Renders a modal form dialog with a textarea, submit button and a close button.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Extension.TextareaEditor\" rel=\"Backgrid.Extension.TextareaEditor\" class=\"docClass\">Backgrid.Extension.TextareaEditor</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-saveOrCancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.TextareaEditor'>Backgrid.Extension.TextareaEditor</span><br/></div><a href='#!/api/Backgrid.Extension.TextareaEditor-method-saveOrCancel' class='name expandable'>saveOrCancel</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Event handler. ...</div><div class='long'><p>Event handler. Saves the text in the text area to the model when\nsubmitting. When cancelling, if the text area is dirty, a confirmation\ndialog will pop up. If the user clicks confirm, the text will be saved to\nthe model.</p>\n\n<p>Triggers a Backbone <code>backgrid:error</code> event from the model along with the\nmodel, column and the existing value as the parameters if the value\ncannot be converted.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});