Ext.data.JsonP.Backgrid_Extension_Select2Cell({
  "tagname": "class",
  "name": "Backgrid.Extension.Select2Cell",
  "extends": "Backgrid.SelectCell",
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
  "id": "class-Backgrid.Extension.Select2Cell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.Extension.Select2Cell",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "delimiter",
        "tagname": "property",
        "owner": "Backgrid.SelectCell",
        "meta": {
        },
        "id": "property-delimiter"
      },
      {
        "name": "editor",
        "tagname": "property",
        "owner": "Backgrid.Extension.Select2Cell",
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
        "owner": "Backgrid.SelectCell",
        "meta": {
        },
        "id": "property-formatter"
      },
      {
        "name": "multiple",
        "tagname": "property",
        "owner": "Backgrid.SelectCell",
        "meta": {
        },
        "id": "property-multiple"
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
        "name": "select2Options",
        "tagname": "property",
        "owner": "Backgrid.Extension.Select2Cell",
        "meta": {
        },
        "id": "property-select2Options"
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
        "owner": "Backgrid.Extension.Select2Cell",
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

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 81,
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
    "Backgrid.Cell",
    "Backgrid.SelectCell"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='docClass'>Backgrid.Cell</a><div class='subclass '><a href='#!/api/Backgrid.SelectCell' rel='Backgrid.SelectCell' class='docClass'>Backgrid.SelectCell</a><div class='subclass '><strong>Backgrid.Extension.Select2Cell</strong></div></div></div></div></pre><div class='doc-contents'><p>Select2Cell is a cell class that renders a <code>select2</code> select box during edit\nmode.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Select2Cell'>Backgrid.Extension.Select2Cell</span><br/></div><a href='#!/api/Backgrid.Extension.Select2Cell-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;select2-cell&quot;</code></p><p>Overrides: <a href='#!/api/Backgrid.SelectCell-property-className' rel='Backgrid.SelectCell-property-className' class='docClass'>Backgrid.SelectCell.className</a></p></div></div></div><div id='property-delimiter' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.SelectCell' rel='Backgrid.SelectCell' class='defined-in docClass'>Backgrid.SelectCell</a><br/></div><a href='#!/api/Backgrid.SelectCell-property-delimiter' class='name expandable'>delimiter</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>', '</code></p></div></div></div><div id='property-editor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Select2Cell'>Backgrid.Extension.Select2Cell</span><br/></div><a href='#!/api/Backgrid.Extension.Select2Cell-property-editor' class='name not-expandable'>editor</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href='#!/api/Backgrid.SelectCell-property-editor' rel='Backgrid.SelectCell-property-editor' class='docClass'>Backgrid.SelectCell.editor</a></p></div></div></div><div id='property-events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;click&quot;: &quot;enterEditMode&quot;}</code></p></div></div></div><div id='property-formatter' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.SelectCell' rel='Backgrid.SelectCell' class='defined-in docClass'>Backgrid.SelectCell</a><br/></div><a href='#!/api/Backgrid.SelectCell-property-formatter' class='name not-expandable'>formatter</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href='#!/api/Backgrid.Cell-property-formatter' rel='Backgrid.Cell-property-formatter' class='docClass'>Backgrid.Cell.formatter</a></p></div></div></div><div id='property-multiple' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.SelectCell' rel='Backgrid.SelectCell' class='defined-in docClass'>Backgrid.SelectCell</a><br/></div><a href='#!/api/Backgrid.SelectCell-property-multiple' class='name expandable'>multiple</a><span> : Boolean</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-optionValues' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.SelectCell' rel='Backgrid.SelectCell' class='defined-in docClass'>Backgrid.SelectCell</a><br/></div><a href='#!/api/Backgrid.SelectCell-property-optionValues' class='name not-expandable'>optionValues</a><span> : Array.&lt;Array&gt;|Array.&lt;{name: string, values: Array.&lt;Array&gt;}&gt;</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-select2Options' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Select2Cell'>Backgrid.Extension.Select2Cell</span><br/></div><a href='#!/api/Backgrid.Extension.Select2Cell-property-select2Options' class='name not-expandable'>select2Options</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;td&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-enterEditMode' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-enterEditMode' class='name expandable'>enterEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters. ...</div><div class='long'><p>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters. An <code>editor</code> CSS class is added to the cell upon\nentering edit mode.</p>\n\n<p>This method triggers a Backbone <code>backgrid:edit</code> event from the model when\nthe cell is entering edit mode and an editor instance has been constructed,\nbut before it is rendered and inserted into the DOM. The cell and the\nconstructed cell editor instance are sent as event parameters when this\nevent is triggered.</p>\n\n<p>When this cell has finished switching to edit mode, a Backbone\n<code>backgrid:editing</code> event is triggered from the model. The cell and the\nconstructed cell instance are also sent as parameters in the event.</p>\n\n<p>When the model triggers a <code>backgrid:error</code> event, it means the editor is\nunable to convert the current user input to an apprpriate value for the\nmodel's column, and an <code>error</code> CSS class is added to the cell accordingly.</p>\n</div></div></div><div id='method-exitEditMode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-exitEditMode' class='name expandable'>exitEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes the editor and re-render in display mode. ...</div><div class='long'><p>Removes the editor and re-render in display mode.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.Select2Cell'>Backgrid.Extension.Select2Cell</span><br/></div><a href='#!/api/Backgrid.Extension.Select2Cell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li><li><span class='pre'>select2Options</span> : Object (optional)<div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>optionsValues</code> is undefined.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.SelectCell-method-initialize' rel='Backgrid.SelectCell-method-initialize' class='docClass'>Backgrid.SelectCell.initialize</a></p></div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clean up this cell. ...</div><div class='long'><p>Clean up this cell.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.SelectCell' rel='Backgrid.SelectCell' class='defined-in docClass'>Backgrid.SelectCell</a><br/></div><a href='#!/api/Backgrid.SelectCell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.SelectCell\" rel=\"Backgrid.SelectCell\" class=\"docClass\">Backgrid.SelectCell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders the label using the raw value as key to look up from optionValues. ...</div><div class='long'><p>Renders the label using the raw value as key to look up from <code>optionValues</code>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.SelectCell\" rel=\"Backgrid.SelectCell\" class=\"docClass\">Backgrid.SelectCell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If <code>optionValues</code> is malformed.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Cell-method-render' rel='Backgrid.Cell-method-render' class='docClass'>Backgrid.Cell.render</a></p></div></div></div><div id='method-renderError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-renderError' class='name expandable'>renderError</a>( <span class='pre'>model, column</span> )</div><div class='description'><div class='short'>Put an error CSS class on the table cell. ...</div><div class='long'><p>Put an <code>error</code> CSS class on the table cell.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>column</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});