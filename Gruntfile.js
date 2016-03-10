/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT license.
*/

// jshint globalstrict:true, node:true

"use strict";

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    clean: {
      options: {
        force: true
      },
      lib: [
        "lib/*.js",
        "lib/*.css"
      ],
      api: [
        "api/**/*"
      ],
      default: [
        "api/**/*",
        "lib/*.js",
        "lib/*.css"
      ]
    },

    concat: {
      backgrid: {
        options: {
          banner: '/*!\n  <%= pkg.name %> <%= pkg.version %>\n' +
            '  <%= pkg.repository.url %>\n\n' +
            '  Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            '  Licensed under the MIT license.\n' +
            '*/\n\n' +
            '(function (root, factory) {\n\n' +
            '  if (typeof define === "function" && define.amd) {\n' +
            '    // AMD (+ global for extensions)\n' +
            '    define(["underscore", "backbone"], function (_, Backbone) {\n' +
            '      return (root.Backgrid = factory(_, Backbone));\n' +
            '    });\n' +
            '  } else if (typeof exports === "object") {\n' +
            '    // CommonJS\n' +
            '    var Backbone = require("backbone");\n' +
            '    Backbone.$ = Backbone.$ || require("jquery");\n' +
            '    module.exports = factory(require("underscore"), Backbone);\n' +
            '  } else {\n' +
            '    // Browser\n' +
            '    root.Backgrid = factory(root._, root.Backbone);\n' +
            '  }' +
            '}(this, function (_, Backbone) {\n\n  "use strict";\n\n',
          footer: '  return Backgrid;\n' +
            '}));'
        },
        src: [
          "src/preamble.js",
          "src/formatter.js",
          "src/cell.js",
          "src/column.js",
          "src/row.js",
          "src/header.js",
          "src/body.js",
          "src/footer.js",
          "src/grid.js"
        ],
        dest: "lib/backgrid.js"
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true,
        singleRun: true
      }
    },

    jsduck: {
      main: {
        src: ["src"],
        dest: "api",
        options: {
          "external": ["Backbone.Model,Backbone.Collection,Backbone.View"],
          "title": "Backgrid.js",
          "no-source": true,
          "categories": "categories.json",
          "warnings": "-no_doc",
          "pretty-json": true,
          "body-html": '<script type="text/javascript">\n' +
            '  var _gaq = _gaq || [];\n' +
            '  _gaq.push(["_setAccount", "UA-36403214-1"]);\n' +
            '  _gaq.push(["_setDomainName", "backgridjs.com"]);\n' +
            '  _gaq.push(["_setAllowLinker", true]);\n' +
            '  _gaq.push(["_trackPageview"]);\n' +
            '  (function() {\n' +
            '    var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;\n' +
            '    ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";\n' +
            '    var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);\n' +
            '  })();\n' +
          '</script>'
        }
      }
    },

    recess: {
      csslint: {
        options: {
          compile: true
        },
        files: {
          "lib/backgrid.css": ["src/backgrid.css"]
        }
      },
      default: {
        options: {
          compress: true
        },
        files: {
          "lib/backgrid.min.css": ["src/backgrid.css"]
        }
      }
    },

    uglify: {
      options: {
        mangle: true,
        compress: true,
        preserveComments: "some"
      },
      default: {
        files: {
          "lib/backgrid.min.js": ["./lib/backgrid.js"]
        }
      }
    },

    watch: {
      default: {
        files: ["src/**/*.*"],
        tasks: ["dist"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-recess");
  grunt.loadNpmTasks("grunt-jsduck");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-karma");

  grunt.registerTask("doc", ["clean:api", "jsduck"]);
  grunt.registerTask("dist", ["concat", "uglify", "recess"]);
  grunt.registerTask("test", ["concat", "karma"]);
  grunt.registerTask("default", ["clean", "doc", "dist", "karma"]);
};
