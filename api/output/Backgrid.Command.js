Ext.data.JsonP.Backgrid_Command({
  "tagname": "class",
  "name": "Backgrid.Command",
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
  "id": "class-Backgrid.Command",
  "members": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [
      {
        "name": "constructor",
        "tagname": "method",
        "owner": "Backgrid.Command",
        "meta": {
        },
        "id": "method-constructor"
      },
      {
        "name": "cancel",
        "tagname": "method",
        "owner": "Backgrid.Command",
        "meta": {
        },
        "id": "method-cancel"
      },
      {
        "name": "moveDown",
        "tagname": "method",
        "owner": "Backgrid.Command",
        "meta": {
        },
        "id": "method-moveDown"
      },
      {
        "name": "moveLeft",
        "tagname": "method",
        "owner": "Backgrid.Command",
        "meta": {
        },
        "id": "method-moveLeft"
      },
      {
        "name": "moveRight",
        "tagname": "method",
        "owner": "Backgrid.Command",
        "meta": {
        },
        "id": "method-moveRight"
      },
      {
        "name": "moveUp",
        "tagname": "method",
        "owner": "Backgrid.Command",
        "meta": {
        },
        "id": "method-moveUp"
      },
      {
        "name": "passThru",
        "tagname": "method",
        "owner": "Backgrid.Command",
        "meta": {
        },
        "id": "method-passThru"
      },
      {
        "name": "save",
        "tagname": "method",
        "owner": "Backgrid.Command",
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
  "linenr": 75,
  "files": [
    {
      "filename": "preamble.js",
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
  "html": "<div><div class='doc-contents'><p>Command translates a DOM Event into commands that Backgrid\nrecognizes. Interested parties can listen on selected Backgrid events that\ncome with an instance of this class and act on the commands.</p>\n\n<p>It is also possible to globally rebind the keyboard shortcuts by replacing\nthe methods in this class' prototype.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Command'>Backgrid.Command</span><br/></div><strong class='new-keyword'>new</strong><a href='#!/api/Backgrid.Command-method-constructor' class='name expandable'>Backgrid.Command</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Command\" rel=\"Backgrid.Command\" class=\"docClass\">Backgrid.Command</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Command\" rel=\"Backgrid.Command\" class=\"docClass\">Backgrid.Command</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-cancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Command'>Backgrid.Command</span><br/></div><a href='#!/api/Backgrid.Command-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Esc ...</div><div class='long'><p>Esc</p>\n</div></div></div><div id='method-moveDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Command'>Backgrid.Command</span><br/></div><a href='#!/api/Backgrid.Command-method-moveDown' class='name expandable'>moveDown</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Down Arrow ...</div><div class='long'><p>Down Arrow</p>\n</div></div></div><div id='method-moveLeft' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Command'>Backgrid.Command</span><br/></div><a href='#!/api/Backgrid.Command-method-moveLeft' class='name expandable'>moveLeft</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Shift Tab ...</div><div class='long'><p>Shift Tab</p>\n</div></div></div><div id='method-moveRight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Command'>Backgrid.Command</span><br/></div><a href='#!/api/Backgrid.Command-method-moveRight' class='name expandable'>moveRight</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Tab ...</div><div class='long'><p>Tab</p>\n</div></div></div><div id='method-moveUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Command'>Backgrid.Command</span><br/></div><a href='#!/api/Backgrid.Command-method-moveUp' class='name expandable'>moveUp</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Up Arrow ...</div><div class='long'><p>Up Arrow</p>\n</div></div></div><div id='method-passThru' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Command'>Backgrid.Command</span><br/></div><a href='#!/api/Backgrid.Command-method-passThru' class='name expandable'>passThru</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>None of the above. ...</div><div class='long'><p>None of the above.</p>\n</div></div></div><div id='method-save' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Command'>Backgrid.Command</span><br/></div><a href='#!/api/Backgrid.Command-method-save' class='name expandable'>save</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enter ...</div><div class='long'><p>Enter</p>\n</div></div></div></div></div></div></div>"
});