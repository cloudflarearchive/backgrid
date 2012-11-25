Building
========

The Backgrid.js build system is designed to be used in a UNIX-like
environment. Backgrid.js uses [gmake](http://www.gnu.org/software/make/),
[uglifyjs](https://github.com/mishoo/UglifyJS2) and
[recess](https://github.com/twitter/recess) and
[JSDuck](https://github.com/senchalabs/jsduck).

### Note:

You need to install [node.js and npm](http://nodejs.org) first before you can
install uglifyjs and recess.

Once you have everything installed, you can do this to trigger a distribution
build:

```shell
$ cd backgrid
# Recursively builds the core, extensions and put the output into lib
$ make dist
```

If you are contributing a new extension, there's a convenient command for you:

```shell
$ make extension
Please specify your extension name: google-earth-body
```

A directory named `src/extensions/google-earth-body` should have been created
for you.

Due to laziness, the current implementation of `make extension` only creates a
blank directory filled with a bunch of blank files for you. You should take a
look at other extensions to copy what you need. e.g. Makefile, .gitignore.

When you are ready to make your awesome extension available to the world, don't
forget to add your extension to the `SUBDIRS` variable in
`src/extensions/Makefile`.

Code Style
==========

Javascript
----------

Please be aware that Backgrid.js uses 2 spaces for indentation. This project has
a [.jshintrc](.jshintrc) file defined, which is handy if you use
[jshint](http://www.jshint.com). In general, you should follow the
[Google Javascript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml). Backgrid.js's
code follows this coding style extremely closely, with 2 exceptions:

- `else` should be on its own line instead of the same line of the close `}` of
  the previous `if` block.
- " is preferred over ' in string literals because the project owner is cursed
   by C.

CSS
---

Please make sure you use recess to lint your CSS files before you submit a pull
request. There's a make rule is put in every Makefile for this purpose.

```shell
$ make csslint
```

Documentation
=============

If you make any changes to the documentation, since Backgrid.js uses
[Github Pages](http://pages.github.com), please do so in your `gh-pages` branch
and submit a pull request from that branch.

If you change any Javascript comment documentation, you should rebuild the API
document. There is also a make rule for this purpose, but make sure you have
installed [JSDuck](https://github.com/senchalabs/jsduck) first.

```shell
$ make doc
```

Changes that come with tests are more equal than others.

Pull requests that follow the above guidelines will get merged quicker than
others.

### Note:

Don't forget to keep your tree in sync with upstream before you submit a
pull request. Usage of git-rebase is optional but encouraged.
