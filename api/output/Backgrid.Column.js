Ext.data.JsonP.Backgrid_Column({
  "tagname": "class",
  "name": "Backgrid.Column",
  "extends": "Backbone.Model",
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
  "id": "class-Backgrid.Column",
  "members": {
    "cfg": [
      {
        "name": "defaults",
        "tagname": "cfg",
        "owner": "Backgrid.Column",
        "meta": {
        },
        "id": "cfg-defaults"
      }
    ],
    "property": [

    ],
    "method": [
      {
        "name": "editable",
        "tagname": "method",
        "owner": "Backgrid.Column",
        "meta": {
          "protected": true
        },
        "id": "method-editable"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Column",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "renderable",
        "tagname": "method",
        "owner": "Backgrid.Column",
        "meta": {
          "protected": true
        },
        "id": "method-renderable"
      },
      {
        "name": "sortValue",
        "tagname": "method",
        "owner": "Backgrid.Column",
        "meta": {
        },
        "id": "method-sortValue"
      },
      {
        "name": "sortable",
        "tagname": "method",
        "owner": "Backgrid.Column",
        "meta": {
          "protected": true
        },
        "id": "method-sortable"
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
      "filename": "column.js",
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
    "Backbone.Model"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.Model<div class='subclass '><strong>Backgrid.Column</strong></div></div></pre><div class='doc-contents'><p>A Column is a placeholder for column metadata.</p>\n\n<p>You usually don't need to create an instance of this class yourself as a\ncollection of column instances will be created for you from a list of column\nattributes in the Backgrid.js view class constructors.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaults' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Column'>Backgrid.Column</span><br/></div><a href='#!/api/Backgrid.Column-cfg-defaults' class='name expandable'>defaults</a><span> : Object</span></div><div class='description'><div class='short'>Column defaults. ...</div><div class='long'><p>Column defaults. To override any of these default\nvalues, you can either change the prototype directly to override\nColumn.defaults globally or extend Column and supply the custom class to\n<a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a>:</p>\n\n<pre><code>// Override Column defaults globally\nColumn.prototype.defaults.sortable = false;\n\n// Override Column defaults locally\nvar MyColumn = Column.extend({\n  defaults: _.defaults({\n    editable: false\n  }, Column.prototype.defaults)\n});\n\nvar grid = new <a href=\"#!/api/Backgrid.Grid\" rel=\"Backgrid.Grid\" class=\"docClass\">Backgrid.Grid</a>(columns: new Columns([{...}, {...}], {\n  model: MyColumn\n}));\n</code></pre>\n<ul><li><span class='pre'>name</span> : string (optional)<div class='sub-desc'><p>The default name of the model attribute.</p>\n</div></li><li><span class='pre'>label</span> : string (optional)<div class='sub-desc'><p>The default label to show in the header.</p>\n</div></li><li><span class='pre'>cell</span> : string|<a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a> (optional)<div class='sub-desc'><p>The default cell type. If this\nis a string, the capitalized form will be used to look up a cell class in\nBackbone, i.e.: string => StringCell. If a Cell subclass is supplied, it is\ninitialized with a hash of parameters. If a Cell instance is supplied, it\nis used directly.</p>\n</div></li><li><span class='pre'>headerCell</span> : string|<a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a> (optional)<div class='sub-desc'><p>The default header\ncell type.</p>\n</div></li><li><span class='pre'>sortable</span> : boolean|string|function(): boolean (optional)<div class='sub-desc'><p>Whether\nthis column is sortable. If the value is a string, a method will the same\nname will be looked up from the column instance to determine whether the\ncolumn should be sortable. The method's signature must be <code>function\n(Backbone.Model): boolean</code>. The function's context is the column instance.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>editable</span> : boolean|string|function(): boolean (optional)<div class='sub-desc'><p>Whether\nthis column is editable. If the value is a string, a method will the same\nname will be looked up from the column instance to determine whether the\ncolumn should be editable. The method's signature must be <code>function\n(Backbone.Model): boolean</code>. The function's context is the column instance.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>renderable</span> : boolean|string|function(): boolean (optional)<div class='sub-desc'><p>Whether this column is renderable. If the value is a string, a method will\nthe same name will be looked up from the column instance to determine\nwhether the column should be renderable. The method's signature must be\n<code>function (Backbone.Model): boolean</code>. The function's context is the column\ninstance.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a> | Object | string (optional)<div class='sub-desc'><p>The\nformatter to use to convert between raw model values and user input.</p>\n</div></li><li><span class='pre'>sortType</span> : \"toggle\"|\"cycle\" (optional)<div class='sub-desc'><p>Whether sorting will\ntoggle between ascending and descending order, or cycle between insertion\norder, ascending and descending order.</p>\n<p>Defaults to: <code>&quot;cycle&quot;</code></p></div></li><li><span class='pre'>sortValue</span> : (function(Backbone.Model, string): *) | string (optional)<div class='sub-desc'><p>The function to use to extract a value from the model for comparison during\nsorting. If this value is a string, a method with the same name will be\nlooked up from the column instance.</p>\n</div></li><li><span class='pre'>direction</span> : \"ascending\"|\"descending\"|null (optional)<div class='sub-desc'><p>The initial\nsorting direction for this column. The default is ordered by\nBackbone.Model.cid, which usually means the collection is ordered by\ninsertion order.</p>\n<p>Defaults to: <code>null</code></p></div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-editable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Column'>Backgrid.Column</span><br/></div><a href='#!/api/Backgrid.Column-method-editable' class='name expandable'>editable</a>( <span class='pre'></span> ) : function(Backbone.Model): boolean | boolean<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>If you cannot always determine whether a column should be editable before\nthe grid get initialized, you can override ...</div><div class='long'><p>If you cannot always determine whether a column should be editable before\nthe grid get initialized, you can override this method.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>function(Backbone.Model): boolean | boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Column'>Backgrid.Column</span><br/></div><a href='#!/api/Backgrid.Column-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>attrs</span> )</div><div class='description'><div class='short'>Initializes this Column instance. ...</div><div class='long'><p>Initializes this Column instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrs</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>name</span> : string<div class='sub-desc'><p>The model attribute this column is responsible\nfor.</p>\n</div></li><li><span class='pre'>cell</span> : string|<a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><div class='sub-desc'><p>The cell type to use to render\nthis column.</p>\n</div></li><li><span class='pre'>label</span> : string (optional)<div class='sub-desc'></div></li><li><span class='pre'>headerCell</span> : string|<a href=\"#!/api/Backgrid.HeaderCell\" rel=\"Backgrid.HeaderCell\" class=\"docClass\">Backgrid.HeaderCell</a> (optional)<div class='sub-desc'></div></li><li><span class='pre'>sortable</span> : boolean|string|function(): boolean (optional)<div class='sub-desc'><p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>editable</span> : boolean|string|function(): boolean (optional)<div class='sub-desc'><p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>renderable</span> : boolean|string|function(): boolean (optional)<div class='sub-desc'><p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>formatter</span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a> | Object | string (optional)<div class='sub-desc'></div></li><li><span class='pre'>sortType</span> : \"toggle\"|\"cycle\" (optional)<div class='sub-desc'><p>Defaults to: <code>&quot;cycle&quot;</code></p></div></li><li><span class='pre'>sortValue</span> : (function(Backbone.Model, string): *) | string (optional)<div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>TypeError</span><div class='sub-desc'><p>If attrs.cell or attrs.options are not supplied.</p>\n</div></li><li><span class='pre'>ReferenceError</span><div class='sub-desc'><p>If formatter is a string but a formatter class of\nsaid name cannot be found in the Backgrid module.</p>\n\n<p>See:</p>\n\n<ul>\n<li><a href=\"#!/api/Backgrid.Column-cfg-defaults\" rel=\"Backgrid.Column-cfg-defaults\" class=\"docClass\">Backgrid.Column.defaults</a></li>\n<li><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></li>\n<li><a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a></li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-renderable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Column'>Backgrid.Column</span><br/></div><a href='#!/api/Backgrid.Column-method-renderable' class='name expandable'>renderable</a>( <span class='pre'></span> ) : function(Backbone.Model): boolean | boolean<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>If you cannot always determine whether a column should be renderable before\nthe grid get initialized, you can overrid...</div><div class='long'><p>If you cannot always determine whether a column should be renderable before\nthe grid get initialized, you can override this method.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>function(Backbone.Model): boolean | boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sortValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Column'>Backgrid.Column</span><br/></div><a href='#!/api/Backgrid.Column-method-sortValue' class='name expandable'>sortValue</a>( <span class='pre'></span> ) : function(Backbone.Model, string): *</div><div class='description'><div class='short'>Returns an appropriate value extraction function from a model for sorting. ...</div><div class='long'><p>Returns an appropriate value extraction function from a model for sorting.</p>\n\n<p>If the column model contains an attribute <code>sortValue</code>, if it is a string, a\nmethod from the column instance identifified by the <code>sortValue</code> string is\nreturned. If it is a function, it it returned as is. If <code>sortValue</code> isn't\nfound from the column model's attributes, a default value extraction\nfunction is returned which will compare according to the natural order of\nthe value's type.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>function(Backbone.Model, string): *</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sortable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Column'>Backgrid.Column</span><br/></div><a href='#!/api/Backgrid.Column-method-sortable' class='name expandable'>sortable</a>( <span class='pre'></span> ) : function(Backbone.Model): boolean | boolean<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>If you cannot always determine whether a column should be sortable before\nthe grid get initialized, you can override ...</div><div class='long'><p>If you cannot always determine whether a column should be sortable before\nthe grid get initialized, you can override this method.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>function(Backbone.Model): boolean | boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});