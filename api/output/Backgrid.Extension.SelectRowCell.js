Ext.data.JsonP.Backgrid_Extension_SelectRowCell({
  "tagname": "class",
  "name": "Backgrid.Extension.SelectRowCell",
  "extends": "Backbone.View",
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
  "id": "class-Backgrid.Extension.SelectRowCell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "className",
        "tagname": "property",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "property-className"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "enterEditMode",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "method-enterEditMode"
      },
      {
        "name": "exitEditMode",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "method-exitEditMode"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "onChange",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "method-onChange"
      },
      {
        "name": "onKeydown",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
        },
        "id": "method-onKeydown"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Extension.SelectRowCell",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 10,
  "files": [
    {
      "filename": "backgrid-select-all.js",
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
    "Backbone.View"
  ],
  "subclasses": [
    "Backgrid.Extension.SelectAllHeaderCell"
  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><strong>Backgrid.Extension.SelectRowCell</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Backgrid.Extension.SelectAllHeaderCell' rel='Backgrid.Extension.SelectAllHeaderCell' class='docClass'>Backgrid.Extension.SelectAllHeaderCell</a></div></pre><div class='doc-contents'><p>Renders a checkbox for row selection.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-className' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectRowCell'>Backgrid.Extension.SelectRowCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;select-row-cell&quot;</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectRowCell'>Backgrid.Extension.SelectRowCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;keydown :checkbox&quot;: &quot;onKeydown&quot;, &quot;change :checkbox&quot;: &quot;onChange&quot;, &quot;click :checkbox&quot;: &quot;enterEditMode&quot;}</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectRowCell'>Backgrid.Extension.SelectRowCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;td&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-enterEditMode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectRowCell'>Backgrid.Extension.SelectRowCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-enterEditMode' class='name expandable'>enterEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Focuses the checkbox. ...</div><div class='long'><p>Focuses the checkbox.</p>\n</div></div></div><div id='method-exitEditMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectRowCell'>Backgrid.Extension.SelectRowCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-exitEditMode' class='name expandable'>exitEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unfocuses the checkbox. ...</div><div class='long'><p>Unfocuses the checkbox.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectRowCell'>Backgrid.Extension.SelectRowCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer. If the underlying model triggers a <code>select</code> event, this cell\nwill change its checked value according to the event's <code>selected</code> value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li></ul></div></li></ul></div></div></div><div id='method-onChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectRowCell'>Backgrid.Extension.SelectRowCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-onChange' class='name expandable'>onChange</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>When the checkbox's value changes, this method will trigger a Backbone\nbackgrid:selected event with a reference of th...</div><div class='long'><p>When the checkbox's value changes, this method will trigger a Backbone\n<code>backgrid:selected</code> event with a reference of the model and the\ncheckbox's <code>checked</code> value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onKeydown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectRowCell'>Backgrid.Extension.SelectRowCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-onKeydown' class='name expandable'>onKeydown</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Process keyboard navigation. ...</div><div class='long'><p>Process keyboard navigation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Extension.SelectRowCell'>Backgrid.Extension.SelectRowCell</span><br/></div><a href='#!/api/Backgrid.Extension.SelectRowCell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Extension.SelectRowCell\" rel=\"Backgrid.Extension.SelectRowCell\" class=\"docClass\">Backgrid.Extension.SelectRowCell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a checkbox in a table cell. ...</div><div class='long'><p>Renders a checkbox in a table cell.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Extension.SelectRowCell\" rel=\"Backgrid.Extension.SelectRowCell\" class=\"docClass\">Backgrid.Extension.SelectRowCell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});