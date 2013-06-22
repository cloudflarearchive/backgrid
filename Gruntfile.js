'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //
        // This is equivalent to the clean target in the Makefile
        //
        clean: {
            options: {
                force: true
            },
            default: [
                'api/**/*',
                'lib/**/*',
                'src/backgrid.js',
                'src/backgrid.min.js',
                'src/backgrid.min.css',
                'src/extensions/**/*.min.js',
                'src/extensions/**/*.min.css'
            ]
        },
        concat: {
            backgrid: {
                options:{
                    banner:'/*! <%= pkg.name %> \n '+
                        '<%= pkg.repository.url %> \n' +
                        'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +' ' +
                        'Licensed under the MIT @license.\n' +
                        '*/\n\n' +
                        '(function (root, $, _, Backbone) {\n\n  \"use strict\";\n',
                    footer:"}(this, jQuery, _, Backbone));"
                },
                src: [
                    'src/preamble.js',
                    'src/formatter.js',
                    'src/cell.js',
                    'src/column.js',
                    'src/row.js',
                    'src/header.js',
                    'src/body.js',
                    'src/footer.js',
                    'src/grid.js'
                ],
                dest: 'lib/backgrid.js'
            },
            filter:{
                src:['src/extensions/filter/*.js'],
                dest:'lib/extensions/filter/backgrid-filter.js'
            },
            "moment-cell":{
                src:['src/extensions/moment-cell/*.js'],
                dest:'lib/extensions/moment-cell/backgrid-moment-cell.js'
            },
            'paginator':{
                src:['src/extensions/paginator/*.js'],
                dest:'lib/extensions/paginator/backgrid-paginator.js'
            },
            "select2-cell":{
                src:['src/extensions/select2-cell/*.js'],
                dest:'lib/extensions/select2-cell/backgrid-select2-cell.js'
            },
            "select-all":{
                src:['src/extensions/select-all/*.js'],
                dest:'lib/extensions/select-all/backgrid-select-all.js'
            },
            "text-cell":{
                src:['src/extensions/text-cell/*.js'],
                dest:'lib/extensions/text-cell/backgrid-text-cell.js'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    keepalive:true
                }
            }
        },
        jasmine: {
            test: {
                version:'1.3.1',
                src:[
                    'lib/backgrid.js'
                ],
                options: {
                    specs: 'test/header.js',
                    helpers:'assets/js/jasmine-html.js',
                    vendor:[
                        'assets/js/jquery.js',
                        'assets/js/underscore.js',
                        'assets/js/backbone.js',
                        'assets/js/backbone-pageable.js',
                        'assets/js/bootstrap.js',
                        'assets/js/moment/moment.js',
                        'assets/js/moment/lang/zh-tw.js',
                        'assets/js/moment/lang/fr.js',
                        'assets/js/select2.js',
                        'assets/js/lunr.js'
                    ]
                }
            }
        },
        jsduck: {
            main: {
                // source paths with your code
                src: [
                    'src'
                ],
                // docs output dir
                dest: 'api',
                // extra options
                options: {
                    'external':['Backbone.Model,Backbone.Collection,Backbone.View,ReferenceError,TypeError,RangeError'],
                    'title':'Backgrid.js',
                    'no-source':true,
                    'categories':'categories.json',
                    'warnings':'-no_doc',
                    'pretty-json':true,
                    'builtin-classes': true,
                    'body-html':"<script type='text/javascript'>"+
                        ' var _gaq = _gaq || [];'+
                        "_gaq.push(['_setAccount', 'UA-36403214-1']);"+
                        "_gaq.push(['_setDomainName', 'backgridjs.com']);"+
                        "_gaq.push(['_setAllowLinker', true]);"+
                        "_gaq.push(['_trackPageview']);"+
                        "(function() {"+
                            "var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;"+
                            "ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"+
                            "var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);"+
                        "})();"+
                        "</script>"
                }
            }
        },
        recess: {
            csslint: {
                options: {
                    compile: true
                },
                files: {
                    'lib/backgrid.css': ['src/backgrid.css'],
                    'lib/extensions/filter/backgrid-filter.css':['src/extensions/filter/*.css'],
                    'lib/extensions/moment-cell/backgrid-moment-cell.css':['src/extensions/moment-cell/*.css'],
                    'lib/extensions/paginator/backgrid-paginator.css':['src/extensions/paginator/*.css'],
                    'lib/extensions/select2-cell/backgrid-select2-cell.css':['src/extensions/select2-cell/*.css'],
                    'lib/extensions/select-all/backgrid-select-all.css':['src/extensions/select-all/*.css'],
                    'lib/extensions/text-cell/backgrid-text-cell.css':['src/extensions/text-cell/*.css']
                }
            },
            default: {
                options: {
                    compress:true
                },
                files: {
                    'lib/backgrid.min.css': ['src/backgrid.css'],
                    'lib/extensions/filter/backgrid-filter.min.css':['src/extensions/filter/*.css'],
                    'lib/extensions/moment-cell/backgrid-moment-cell.min.css':['src/extensions/moment-cell/*.css'],
                    'lib/extensions/paginator/backgrid-paginator.min.css':['src/extensions/paginator/*.css'],
                    'lib/extensions/seletct2-cell/backgrid-select2-cell.min.css':['src/extensions/select2-cell/*.css'],
                    'lib/extensions/select-all/backgrid-select-all.min.css':['src/extensions/select-all/*.css'],
                    'lib/extensions/text-cell/backgrid-text-cell.min.css':['src/extensions/text-cell/*.css']
                }
            }
        },
        uglify:{
            options: {
                mangle: true,
                compress:true
            },
            default:{
                files: {
                    'lib/backgrid.min.js': ['./lib/backgrid.js'],
                    'lib/extensions/filter/backgrid-filter.min.js':['src/extensions/filter/*.js'],
                    'lib/extensions/moment-cell/backgrid-moment-cell.min.js':['src/extensions/moment-cell/*.js'],
                    'lib/extensions/paginator/backgrid-paginator.min.js':['src/extensions/paginator/*.js'],
                    'lib/extensions/select2-cell/backgrid-select2-cell.min.js':['src/extensions/select2-cell/*.js'],
                    'lib/extensions/select-all/backgrid-select-all.js':['src/extensions/select-all/*.js'],
                    'lib/extensions/text-cell/backgrid-text-cell.js':['src/extensions/text-cell/*.js']
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-jsduck');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');

    //
    // this is equivalent to doc in Makefile
    //
    grunt.registerTask('doc', [ 'jsduck' ]);

    //
    // this is equivalent to dist in Makefile
    //
    grunt.registerTask('dist', [ 'concat', 'uglify', 'recess' ]);

    //
    // the default task will be equivalent to all in Makefile
    //
    grunt.registerTask('default', ['clean', 'jsduck', 'concat', 'uglify', 'recess' ]);
};