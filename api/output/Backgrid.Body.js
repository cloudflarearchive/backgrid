Ext.data.JsonP.Backgrid_Body({
  "tagname": "class",
  "name": "Backgrid.Body",
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
  "id": "class-Backgrid.Body",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Body",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Body",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "insertRow",
        "tagname": "method",
        "owner": "Backgrid.Body",
        "meta": {
        },
        "id": "method-insertRow"
      },
      {
        "name": "refresh",
        "tagname": "method",
        "owner": "Backgrid.Body",
        "meta": {
          "chainable": true
        },
        "id": "method-refresh"
      },
      {
        "name": "remove",
        "tagname": "method",
        "owner": "Backgrid.Body",
        "meta": {
          "chainable": true
        },
        "id": "method-remove"
      },
      {
        "name": "removeRow",
        "tagname": "method",
        "owner": "Backgrid.Body",
        "meta": {
        },
        "id": "method-removeRow"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Body",
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
  "linenr": 9,
  "files": [
    {
      "filename": "body.js",
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
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><strong>Backgrid.Body</strong></div></div></pre><div class='doc-contents'><p>Body is the table body which contains the rows inside a table. Body is\nresponsible for refreshing the rows after sorting, insertion and removal.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-tagName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Body'>Backgrid.Body</span><br/></div><a href='#!/api/Backgrid.Body-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;tbody&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Body'>Backgrid.Body</span><br/></div><a href='#!/api/Backgrid.Body-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'></div></li><li><span class='pre'>columns</span> : Backbone.Collection.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;<a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a>&gt;|Array.&lt;Object&gt;<div class='sub-desc'><p>Column metadata</p>\n</div></li><li><span class='pre'>row</span> : <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a> (optional)<div class='sub-desc'><p>The Row class to use.</p>\n<p>Defaults to: <code>Backgrid.Row</code></p></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If options.columns or options.collection is undefined.</p>\n\n<p>See <a href=\"#!/api/Backgrid.Row\" rel=\"Backgrid.Row\" class=\"docClass\">Backgrid.Row</a>.</p>\n</div></li></ul></div></div></div><div id='method-insertRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Body'>Backgrid.Body</span><br/></div><a href='#!/api/Backgrid.Body-method-insertRow' class='name expandable'>insertRow</a>( <span class='pre'>model, collection, options</span> )</div><div class='description'><div class='short'>This method can be called either directly or as a callback to a\nBackbone.Collecton#add event. ...</div><div class='long'><p>This method can be called either directly or as a callback to a\n<a href=\"http://backbonejs.org/#Collection-add\">Backbone.Collecton#add</a> event.</p>\n\n<p>When called directly, it accepts a model or an array of models and an\noption hash just like\n<a href=\"http://backbonejs.org/#Collection-add\">Backbone.Collection#add</a> and\ndelegates to it. Once the model is added, a new row is inserted into the\nbody and automatically rendered.</p>\n\n<p>When called as a callback of an <code>add</code> event, splices a new row into the\nbody and renders it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>The model to render as a row.</p>\n</div></li><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'><p>When called directly, this\nparameter is actually the options to\n<a href=\"http://backbonejs.org/#Collection-add\">Backbone.Collection#add</a>.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>When called directly, this must be null.</p>\n\n<p>See:</p>\n\n<ul>\n<li><a href=\"http://backbonejs.org/#Collection-add\">Backbone.Collection#add</a></li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Body'>Backgrid.Body</span><br/></div><a href='#!/api/Backgrid.Body-method-refresh' class='name expandable'>refresh</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Reinitialize all the rows inside the body and re-render them. ...</div><div class='long'><p>Reinitialize all the rows inside the body and re-render them.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Body'>Backgrid.Body</span><br/></div><a href='#!/api/Backgrid.Body-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clean up this body and it's rows. ...</div><div class='long'><p>Clean up this body and it's rows.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Body'>Backgrid.Body</span><br/></div><a href='#!/api/Backgrid.Body-method-removeRow' class='name expandable'>removeRow</a>( <span class='pre'>model, collection, options</span> )</div><div class='description'><div class='short'>The method can be called either directly or as a callback to a\nBackbone.Collection#remove\nevent. ...</div><div class='long'><p>The method can be called either directly or as a callback to a\n<a href=\"http://backbonejs.org/#Collection-remove\">Backbone.Collection#remove</a>\nevent.</p>\n\n<p>When called directly, it accepts a model or an array of models and an\noption hash just like\n<a href=\"http://backbonejs.org/#Collection-remove\">Backbone.Collection#remove</a> and\ndelegates to it. Once the model is removed, a corresponding row is removed\nfrom the body.</p>\n\n<p>When called as a callback of a <code>remove</code> event, splices into the rows and\nremoves the row responsible for rendering the model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'><p>The model to remove from the body.</p>\n</div></li><li><span class='pre'>collection</span> : Backbone.Collection<div class='sub-desc'><p>When called directly, this\nparameter is actually the options to\n<a href=\"http://backbonejs.org/#Collection-remove\">Backbone.Collection#remove</a>.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>When called directly, this must be null.</p>\n\n<p>See:</p>\n\n<ul>\n<li><a href=\"http://backbonejs.org/#Collection-remove\">Backbone.Collection#remove</a></li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Body'>Backgrid.Body</span><br/></div><a href='#!/api/Backgrid.Body-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Renders all the rows inside this body. ...</div><div class='long'><p>Renders all the rows inside this body.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Body\" rel=\"Backgrid.Body\" class=\"docClass\">Backgrid.Body</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});