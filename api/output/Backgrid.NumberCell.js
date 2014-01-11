Ext.data.JsonP.Backgrid_NumberCell({
  "tagname": "class",
  "name": "Backgrid.NumberCell",
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
  "id": "class-Backgrid.NumberCell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.NumberCell",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "decimalSeparator",
        "tagname": "property",
        "owner": "Backgrid.NumberCell",
        "meta": {
        },
        "id": "property-decimalSeparator"
      },
      {
        "name": "decimals",
        "tagname": "property",
        "owner": "Backgrid.NumberCell",
        "meta": {
        },
        "id": "property-decimals"
      },
      {
        "name": "editor",
        "tagname": "property",
        "owner": "Backgrid.Cell",
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
        "owner": "Backgrid.NumberCell",
        "meta": {
        },
        "id": "property-formatter"
      },
      {
        "name": "orderSeparator",
        "tagname": "property",
        "owner": "Backgrid.NumberCell",
        "meta": {
        },
        "id": "property-orderSeparator"
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
        "owner": "Backgrid.NumberCell",
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
        "owner": "Backgrid.Cell",
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
  "linenr": 444,
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
    "Backgrid.IntegerCell",
    "Backgrid.PercentCell"
  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='docClass'>Backgrid.Cell</a><div class='subclass '><strong>Backgrid.NumberCell</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Backgrid.IntegerCell' rel='Backgrid.IntegerCell' class='docClass'>Backgrid.IntegerCell</a></div><div class='dependency'><a href='#!/api/Backgrid.PercentCell' rel='Backgrid.PercentCell' class='docClass'>Backgrid.PercentCell</a></div></pre><div class='doc-contents'><p>NumberCell is a generic cell that renders all numbers. Numbers are formatted\nusing a <a href=\"#!/api/Backgrid.NumberFormatter\" rel=\"Backgrid.NumberFormatter\" class=\"docClass\">Backgrid.NumberFormatter</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberCell'>Backgrid.NumberCell</span><br/></div><a href='#!/api/Backgrid.NumberCell-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;number-cell&quot;</code></p></div></div></div><div id='property-decimalSeparator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberCell'>Backgrid.NumberCell</span><br/></div><a href='#!/api/Backgrid.NumberCell-property-decimalSeparator' class='name expandable'>decimalSeparator</a><span> : string</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;.&#39;</code></p></div></div></div><div id='property-decimals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberCell'>Backgrid.NumberCell</span><br/></div><a href='#!/api/Backgrid.NumberCell-property-decimals' class='name expandable'>decimals</a><span> : number</span></div><div class='description'><div class='short'>Must be an integer. ...</div><div class='long'><p>Must be an integer.</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='property-editor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-editor' class='name expandable'>editor</a><span> : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></span></div><div class='description'><div class='short'>The\ndefault editor for all cell instances of this class. ...</div><div class='long'><p>The\ndefault editor for all cell instances of this class. This value must be a\nclass, it will be automatically instantiated upon entering edit mode.</p>\n\n<p>See <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></p>\n<p>Defaults to: <code>Backgrid.InputCellEditor</code></p></div></div></div><div id='property-events' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;click&quot;: &quot;enterEditMode&quot;}</code></p></div></div></div><div id='property-formatter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberCell'>Backgrid.NumberCell</span><br/></div><a href='#!/api/Backgrid.NumberCell-property-formatter' class='name expandable'>formatter</a><span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Backgrid.NumberFormatter</code></p><p>Overrides: <a href='#!/api/Backgrid.Cell-property-formatter' rel='Backgrid.Cell-property-formatter' class='docClass'>Backgrid.Cell.formatter</a></p></div></div></div><div id='property-orderSeparator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberCell'>Backgrid.NumberCell</span><br/></div><a href='#!/api/Backgrid.NumberCell-property-orderSeparator' class='name expandable'>orderSeparator</a><span> : string</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;,&#39;</code></p></div></div></div><div id='property-tagName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;td&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-enterEditMode' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-enterEditMode' class='name expandable'>enterEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters. ...</div><div class='long'><p>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters. An <code>editor</code> CSS class is added to the cell upon\nentering edit mode.</p>\n\n<p>This method triggers a Backbone <code>backgrid:edit</code> event from the model when\nthe cell is entering edit mode and an editor instance has been constructed,\nbut before it is rendered and inserted into the DOM. The cell and the\nconstructed cell editor instance are sent as event parameters when this\nevent is triggered.</p>\n\n<p>When this cell has finished switching to edit mode, a Backbone\n<code>backgrid:editing</code> event is triggered from the model. The cell and the\nconstructed cell instance are also sent as parameters in the event.</p>\n\n<p>When the model triggers a <code>backgrid:error</code> event, it means the editor is\nunable to convert the current user input to an apprpriate value for the\nmodel's column, and an <code>error</code> CSS class is added to the cell accordingly.</p>\n</div></div></div><div id='method-exitEditMode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-exitEditMode' class='name expandable'>exitEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes the editor and re-render in display mode. ...</div><div class='long'><p>Removes the editor and re-render in display mode.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.NumberCell'>Backgrid.NumberCell</span><br/></div><a href='#!/api/Backgrid.NumberCell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializes this cell and the number formatter. ...</div><div class='long'><p>Initializes this cell and the number formatter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li></ul></div></li></ul><p>Overrides: <a href='#!/api/Backgrid.Cell-method-initialize' rel='Backgrid.Cell-method-initialize' class='docClass'>Backgrid.Cell.initialize</a></p></div></div></div><div id='method-remove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clean up this cell. ...</div><div class='long'><p>Clean up this cell.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Render a text string in a table cell. ...</div><div class='long'><p>Render a text string in a table cell. The text is converted from the\nmodel's raw value for this cell's column.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-renderError' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Backgrid.Cell' rel='Backgrid.Cell' class='defined-in docClass'>Backgrid.Cell</a><br/></div><a href='#!/api/Backgrid.Cell-method-renderError' class='name expandable'>renderError</a>( <span class='pre'>model, column</span> )</div><div class='description'><div class='short'>Put an error CSS class on the table cell. ...</div><div class='long'><p>Put an <code>error</code> CSS class on the table cell.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>column</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});