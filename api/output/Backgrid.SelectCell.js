Ext.data.JsonP.Backgrid_SelectCell({
  "tagname": "class",
  "name": "Backgrid.SelectCell",
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
  "id": "class-Backgrid.SelectCell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.SelectCell",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "editor",
        "tagname": "property",
        "owner": "Backgrid.SelectCell",
        "meta": {
        },
        "id": "property-editor"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.Cell",
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
        "name": "optionValues",
        "tagname": "property",
        "owner": "Backgrid.SelectCell",
        "meta": {
        },
        "id": "property-optionValues"
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
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-enterEditMode"
      },
      {
        "name": "exitEditMode",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-exitEditMode"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.SelectCell",
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
        "owner": "Backgrid.SelectCell",
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
  "linenr": 743,
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
    "Backgrid.Extension.Select2Cell"
  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='docClass'>Backgrid.Cell</a><div class='subclass '><strong>Backgrid.SelectCell</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Backgrid.Extension.Select2Cell' rel='Backgrid.Extension.Select2Cell' class='docClass'>Backgrid.Extension.Select2Cell</a></div></pre><div class='doc-contents'><p>SelectCell is also a different kind of cell in that upon going into edit mode\nthe cell renders a list of options for to pick from, as opposed to an input\nbox.</p>\n\n<p>SelectCell cannot be referenced by its string name when used in a column\ndefinition because requires an <code>optionValues</code> class attribute to be\ndefined. <code>optionValues</code> can either be a list of name-value pairs, to be\nrendered as options, or a list of object hashes which consist of a key <em>name</em>\nwhich is the option group name, and a key <em>values</em> which is a list of\nname-value pairs to be rendered as options under that option group.</p>\n\n<p>In addition, <code>optionValues</code> can also be a parameter-less function that\nreturns one of the above. If the options are static, it is recommended the\nreturned values to be memoized. _.memoize() is a good function to help with\nthat.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCell'>Backgrid.SelectCell</span><br/></div><a href='#!/api/Backgrid.SelectCell-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;select-cell&quot;</code></p></div></div></div><div id='property-editor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCell'>Backgrid.SelectCell</span><br/></div><a href='#!/api/Backgrid.SelectCell-property-editor' class='name not-expandable'>editor</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href='#!/api/Backgrid.Cell-property-editor' rel='Backgrid.Cell-property-editor' class='docClass'>Backgrid.Cell.editor</a></p></div></div></div><div id='property-events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;click&quot;: &quot;enterEditMode&quot;}</code></p></div></div></div><div id='property-formatter' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-formatter' class='name expandable'>formatter</a><span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a>|Object|string</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>new CellFormatter()</code></p></div></div></div><div id='property-optionValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCell'>Backgrid.SelectCell</span><br/></div><a href='#!/api/Backgrid.SelectCell-property-optionValues' class='name not-expandable'>optionValues</a><span> : Array.&lt;Array&gt;|Array.&lt;{name: string, values: Array.&lt;Array&gt;}&gt;</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;td&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-enterEditMode' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-enterEditMode' class='name expandable'>enterEditMode</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters and listens on the...</div><div class='long'><p>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters and listens on the editor's <code>done</code> and <code>error</code>\nevents. When the editor is <code>done</code>, edit mode is exited. When the editor\ntriggers an <code>error</code> event, it means the editor is unable to convert the\ncurrent user input to an apprpriate value for the model's column. An\n<code>editor</code> CSS class is added to the cell upon entering edit mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-exitEditMode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-exitEditMode' class='name expandable'>exitEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes the editor and re-render in display mode. ...</div><div class='long'><p>Removes the editor and re-render in display mode.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCell'>Backgrid.SelectCell</span><br/></div><a href='#!/api/Backgrid.SelectCell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>optionsValues</code> is undefined.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Cell-method-initialize' rel='Backgrid.Cell-method-initialize' class='docClass'>Backgrid.Cell.initialize</a></p></div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clean up this cell. ...</div><div class='long'><p>Clean up this cell.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.SelectCell'>Backgrid.SelectCell</span><br/></div><a href='#!/api/Backgrid.SelectCell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.SelectCell\" rel=\"Backgrid.SelectCell\" class=\"docClass\">Backgrid.SelectCell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders the label using the raw value as key to look up from optionValues. ...</div><div class='long'><p>Renders the label using the raw value as key to look up from <code>optionValues</code>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.SelectCell\" rel=\"Backgrid.SelectCell\" class=\"docClass\">Backgrid.SelectCell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>optionValues</code> is malformed.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Cell-method-render' rel='Backgrid.Cell-method-render' class='docClass'>Backgrid.Cell.render</a></p></div></div></div><div id='method-renderError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-renderError' class='name expandable'>renderError</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Put an error CSS class on the table cell. ...</div><div class='long'><p>Put an <code>error</code> CSS class on the table cell.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-edit' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-event-edit' class='name expandable'>edit</a>( <span class='pre'>cell, editor</span> )</div><div class='description'><div class='short'>Backbone Event. ...</div><div class='long'><p>Backbone Event. Fired when a cell is entering edit mode and an editor\ninstance has been constructed, but before it is rendered and inserted\ninto the DOM.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cell</span> : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><div class='sub-desc'><p>This cell instance.</p>\n</div></li><li><span class='pre'>editor</span> : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a><div class='sub-desc'><p>The cell editor constructed.</p>\n</div></li></ul></div></div></div><div id='event-editing' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-event-editing' class='name expandable'>editing</a>( <span class='pre'>cell, editor</span> )</div><div class='description'><div class='short'>Backbone Event. ...</div><div class='long'><p>Backbone Event. Fired when a cell has finished switching to edit mode.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cell</span> : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><div class='sub-desc'><p>This cell instance.</p>\n</div></li><li><span class='pre'>editor</span> : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a><div class='sub-desc'><p>The cell editor constructed.</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});