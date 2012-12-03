Ext.data.JsonP.Backgrid_HeaderCell({
  "tagname": "class",
  "name": "Backgrid.HeaderCell",
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
  "id": "class-Backgrid.HeaderCell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "_direction",
        "tagname": "property",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "property-_direction"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "_idCidComparator",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
          "private": true
        },
        "id": "method-_idCidComparator"
      },
      {
        "name": "direction",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "method-direction"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "sort",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "method-sort"
      },
      {
        "name": "triggerSort",
        "tagname": "method",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "method-triggerSort"
      }
    ],
    "event": [
      {
        "name": "sort",
        "tagname": "event",
        "owner": "Backgrid.HeaderCell",
        "meta": {
        },
        "id": "event-sort"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 9,
  "files": [
    {
      "filename": "header.js",
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

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><strong>Backgrid.HeaderCell</strong></div></div></pre><div class='doc-contents'><p>HeaderCell is a special cell class that renders a column header cell. If the\ncolumn is sortable, a sorter is also rendered and will trigger a table\nrefresh after sorting.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_direction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-property-_direction' class='name not-expandable'>_direction</a><span> : null|\"ascending\"|\"descending\"</span></div><div class='description'><div class='short'><p>The current sorting\ndirection of this column.</p>\n</div><div class='long'><p>The current sorting\ndirection of this column.</p>\n</div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;click a&quot;: &quot;triggerSort&quot;}</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;th&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_idCidComparator' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-_idCidComparator' class='name expandable'>_idCidComparator</a>( <span class='pre'>left, right</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Default comparator for Backbone.Collections. ...</div><div class='long'><p>Default comparator for Backbone.Collections. Sorts ids and cids in\nascending order.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>left</span> : *<div class='sub-desc'>\n</div></li><li><span class='pre'>right</span> : *<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-direction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-direction' class='name expandable'>direction</a>( <span class='pre'>dir</span> ) : null|string</div><div class='description'><div class='short'>Gets or sets the direction of this cell. ...</div><div class='long'><p>Gets or sets the direction of this cell. If called directly without\nparameters, returns the current direction of this cell, otherwise sets\nit. If a <code>null</code> is given, sets this cell back to the default order.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dir</span> : null|\"ascending\"|\"descending\"<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>null|string</span><div class='sub-desc'><p>The current direction or the changed direction.</p>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer. If options.column or options.collection is undefined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>parent</span> : *<div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>|Object<div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If options.column or options.collection is undefined.</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders a header cell with a sorter and a label. ...</div><div class='long'><p>Renders a header cell with a sorter and a label.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-sort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-sort' class='name expandable'>sort</a>( <span class='pre'>[comparator]</span> )</div><div class='description'><div class='short'>If the underlying collection is a Backbone.Paginator.requestPager,\nsortField and sortDirection are set onto the colle...</div><div class='long'><p>If the underlying collection is a <a href=\"\">Backbone.Paginator.requestPager</a>,\n<code>sortField</code> and <code>sortDirection</code> are set onto the collection directly with\n<code>columnName</code> and <code>direction</code> and the models are refetched from the server.</p>\n\n<p>If the underlying collection is a Backbone.Collection or a\n<a href=\"\">Backbone.Paginator.clientPager</a>, and if a comparator is given, it is\nattached to the collection for sorting. If a comparator is not given, a\ndefault comparator that sorts the id and cid in ascending order is used\ninstead.</p>\n\n<p>If the underlying collection instance has a comparator defined previously,\nit is restored after sorting.</p>\n\n<p>Nothing is done if the underlying collection is not one of the three\nrecognized types.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comparator</span> : function(*, *): number (optional)<div class='sub-desc'><p>See <a href=\"http://backbonejs.org/#Collection-comparator\">Backbone.Collection#comparator</a></p>\n</div></li></ul></div></div></div><div id='method-triggerSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-method-triggerSort' class='name expandable'>triggerSort</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Event handler for the click event on the cell's anchor. ...</div><div class='long'><p>Event handler for the <code>click</code> event on the cell's anchor. If the column is\nsortable, clicking on the anchor will cycle through 3 sorting orderings -\n<code>ascending</code>, <code>descending</code>, and default. If the ordering is not default, a\nCSS class corresponding to the ordering will be applied to the header cell.</p>\n\n<p>This method will trigger a Backbone <code>sort</code> event to listeners with a custom\ncomparator. The default implementation will delegate to the underlying\ncollection to do the sorting.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-sort' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.HeaderCell'>Backgrid.HeaderCell</span><br/></div><a href='#!/api/Backgrid.HeaderCell-event-sort' class='name expandable'>sort</a>( <span class='pre'>comparator</span> )</div><div class='description'><div class='short'>Backbone event. ...</div><div class='long'><p>Backbone event. Fired when the sorter is clicked on a sortable\ncolumn.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comparator</span> : function(*, *): number<div class='sub-desc'><p>A Backbone.Collection#comparator.</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});