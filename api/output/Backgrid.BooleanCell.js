Ext.data.JsonP.Backgrid_BooleanCell({
  "tagname": "class",
  "name": "Backgrid.BooleanCell",
  "extends": "Backgrid.Cell",
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
  "id": "class-Backgrid.BooleanCell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.BooleanCell",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "editor",
        "tagname": "property",
        "owner": "Backgrid.BooleanCell",
        "meta": {
        },
        "id": "property-editor"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.BooleanCell",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "formatter",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-formatter"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "enterEditMode",
        "tagname": "method",
        "owner": "Backgrid.BooleanCell",
        "meta": {
        },
        "id": "method-enterEditMode"
      },
      {
        "name": "exitEditMode",
        "tagname": "method",
        "owner": "Backgrid.BooleanCell",
        "meta": {
        },
        "id": "method-exitEditMode"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "remove",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
          "chainable": true
        },
        "id": "method-remove"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.BooleanCell",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "renderError",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-renderError"
      },
      {
        "name": "save",
        "tagname": "method",
        "owner": "Backgrid.BooleanCell",
        "meta": {
        },
        "id": "method-save"
      }
    ],
    "event": [
      {
        "name": "edit",
        "tagname": "event",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "event-edit"
      },
      {
        "name": "editing",
        "tagname": "event",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "event-editing"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 578,
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
    "Backgrid.Cell"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='docClass'>Backgrid.Cell</a><div class='subclass '><strong>Backgrid.BooleanCell</strong></div></div></div></pre><div class='doc-contents'><p>BooleanCell is a different kind of cell in that there's no difference between\ndisplay mode and edit mode and this cell type always renders a checkbox for\nselection.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCell'>Backgrid.BooleanCell</span><br/></div><a href='#!/api/Backgrid.BooleanCell-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;boolean-cell&quot;</code></p></div></div></div><div id='property-editor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCell'>Backgrid.BooleanCell</span><br/></div><a href='#!/api/Backgrid.BooleanCell-property-editor' class='name expandable'>editor</a><span> : function(Object, ?Object=): string</span></div><div class='description'><div class='short'>BooleanCell simple uses a default HTML checkbox template instead of a\nCellEditor instance. ...</div><div class='long'><p>BooleanCell simple uses a default HTML checkbox template instead of a\nCellEditor instance. The Underscore.js template to\nrender the editor.</p>\n<p>Overrides: <a href='#!/api/Backgrid.Cell-property-editor' rel='Backgrid.Cell-property-editor' class='docClass'>Backgrid.Cell.editor</a></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCell'>Backgrid.BooleanCell</span><br/></div><a href='#!/api/Backgrid.BooleanCell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'>Since the editor is not an instance of a CellEditor subclass, more things\nneed to be done in BooleanCell class to lis...</div><div class='long'><p>Since the editor is not an instance of a CellEditor subclass, more things\nneed to be done in BooleanCell class to listen to editor mode events.</p>\n<p>Defaults to: <code>{&quot;click&quot;: &quot;enterEditMode&quot;, &quot;blur input[type=checkbox]&quot;: &quot;exitEditMode&quot;, &quot;change input[type=checkbox]&quot;: &quot;save&quot;}</code></p><p>Overrides: <a href='#!/api/Backgrid.Cell-property-events' rel='Backgrid.Cell-property-events' class='docClass'>Backgrid.Cell.events</a></p></div></div></div><div id='property-formatter' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-formatter' class='name expandable'>formatter</a><span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a>|Object|string</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>new CellFormatter()</code></p></div></div></div><div id='property-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;td&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-enterEditMode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCell'>Backgrid.BooleanCell</span><br/></div><a href='#!/api/Backgrid.BooleanCell-method-enterEditMode' class='name expandable'>enterEditMode</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Simple focuses the checkbox and add an editor CSS class to the cell. ...</div><div class='long'><p>Simple focuses the checkbox and add an <code>editor</code> CSS class to the cell.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Cell-method-enterEditMode' rel='Backgrid.Cell-method-enterEditMode' class='docClass'>Backgrid.Cell.enterEditMode</a></p></div></div></div><div id='method-exitEditMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCell'>Backgrid.BooleanCell</span><br/></div><a href='#!/api/Backgrid.BooleanCell-method-exitEditMode' class='name expandable'>exitEditMode</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Removed the editor CSS class from the cell. ...</div><div class='long'><p>Removed the <code>editor</code> CSS class from the cell.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Cell-method-exitEditMode' rel='Backgrid.Cell-method-exitEditMode' class='docClass'>Backgrid.Cell.exitEditMode</a></p></div></div></div><div id='method-initialize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>ReferenceError</span><div class='sub-desc'><p>If formatter is a string but a formatter class of\nsaid name cannot be found in the Backgrid module.</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clean up this cell. ...</div><div class='long'><p>Clean up this cell.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCell'>Backgrid.BooleanCell</span><br/></div><a href='#!/api/Backgrid.BooleanCell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.BooleanCell\" rel=\"Backgrid.BooleanCell\" class=\"docClass\">Backgrid.BooleanCell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a checkbox and check it if the model value of this column is true,\nuncheck otherwise. ...</div><div class='long'><p>Renders a checkbox and check it if the model value of this column is true,\nuncheck otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.BooleanCell\" rel=\"Backgrid.BooleanCell\" class=\"docClass\">Backgrid.BooleanCell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Cell-method-render' rel='Backgrid.Cell-method-render' class='docClass'>Backgrid.Cell.render</a></p></div></div></div><div id='method-renderError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-renderError' class='name expandable'>renderError</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Put an error CSS class on the table cell. ...</div><div class='long'><p>Put an <code>error</code> CSS class on the table cell.</p>\n</div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.BooleanCell'>Backgrid.BooleanCell</span><br/></div><a href='#!/api/Backgrid.BooleanCell-method-save' class='name expandable'>save</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Set true to the model attribute if the checkbox is checked, false\notherwise. ...</div><div class='long'><p>Set true to the model attribute if the checkbox is checked, false\notherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-edit' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-event-edit' class='name expandable'>edit</a>( <span class='pre'>cell, editor</span> )</div><div class='description'><div class='short'>Backbone Event. ...</div><div class='long'><p>Backbone Event. Fired when a cell is entering edit mode and an editor\ninstance has been constructed, but before it is rendered and inserted\ninto the DOM.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cell</span> : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><div class='sub-desc'><p>This cell instance.</p>\n</div></li><li><span class='pre'>editor</span> : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a><div class='sub-desc'><p>The cell editor constructed.</p>\n</div></li></ul></div></div></div><div id='event-editing' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-event-editing' class='name expandable'>editing</a>( <span class='pre'>cell, editor</span> )</div><div class='description'><div class='short'>Backbone Event. ...</div><div class='long'><p>Backbone Event. Fired when a cell has finished switching to edit mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cell</span> : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><div class='sub-desc'><p>This cell instance.</p>\n</div></li><li><span class='pre'>editor</span> : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a><div class='sub-desc'><p>The cell editor constructed.</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});