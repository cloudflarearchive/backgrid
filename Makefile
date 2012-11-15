PROJECT_NAME = backgrid
PROJECT_URL = http://github.com/wyuenho/backgrid
AUTHOR = Jimmy Yuen Ho Wong
VERSION = 0.1

SRC_FILES = src/preamble.js\
			src/formatter.js \
			src/cell.js \
			src/column.js \
			src/row.js \
			src/header.js \
			src/body.js \
			src/footer.js \
			src/grid.js

EXT_FILES = src/extensions/paginator.js

UGLIFY = uglifyjs2
UGLIFY_BEAUTIFY_FLAGS = --beautify indent-level=2,indent-start=2,bracketize=true \
						--compress sequences=false,properties=false,dead-code=false,unsafe=false,conditionals=false,comparisons=false,evaluate=false,booleans=false,loops=false,unused=false,hoist-funs=false,hoist-vars=false,join-vars=false,cascade=false,warnings=true \
						--comments '/^(?!jshint|global)([.\s\S](?!@license))+$$/'
UGLIFY_MINIFY_FLAGS = --compress --comments --mangle

JS_OUTFILE = lib/$(PROJECT_NAME).core.js
JS_OUTFILE_MIN = lib/$(PROJECT_NAME).core.min.js
JS_OUTFILE_ALL = lib/$(PROJECT_NAME).all.js
JS_OUTFILE_ALL_MIN = lib/$(PROJECT_NAME).all.min.js

all: clean dist test

FORCE:

%.js: FORCE
	echo "/*\n\
	  $(PROJECT_NAME)\n\
	  $(PROJECT_URL)\n\n\
	  Copyright (c) `date +%Y` $(AUTHOR)\n\
	  Licensed under the MIT @license.\n\
	*/\n" | cat - $@ > "/tmp/`basename $@`" && mv -f "/tmp/`basename $@`" $@

test: FORCE
	phantomjs bin/qunit-runner.js test/index.html

corejs:
	@@echo "Making the core JS distro"
	$(UGLIFY) $(SRC_FILES) $(UGLIFY_BEAUTIFY_FLAGS) --output $(JS_OUTFILE)
	echo "(function (root) {\n" | cat - $(JS_OUTFILE) > /tmp/$(PROJECT_NAME).js && mv -f /tmp/$(PROJECT_NAME).js $(JS_OUTFILE)
	echo "}(this));" >> $(JS_OUTFILE)
	make $(JS_OUTFILE)

	@@echo "Making the minified core JS distro"
	$(UGLIFY) $(JS_OUTFILE) $(UGLIFY_MINIFY_FLAGS) --output $(JS_OUTFILE_MIN)

alljs:
	@@echo "Making the core + extensions JS distro"
	$(UGLIFY) $(SRC_FILES) $(EXT_FILES) $(UGLIFY_BEAUTIFY_FLAGS) --output $(JS_OUTFILE_ALL)
	echo "(function (root) {\n" | cat - $(JS_OUTFILE_ALL) > /tmp/$(PROJECT_NAME).js && mv -f /tmp/$(PROJECT_NAME).js $(JS_OUTFILE_ALL)
	echo "}(this));" >> $(JS_OUTFILE_ALL)
	make $(JS_OUTFILE_ALL)

	@@echo "Making the minified core + extensions JS distro"
	$(UGLIFY) $(JS_OUTFILE_ALL) $(UGLIFY_MINIFY_FLAGS) --output $(JS_OUTFILE_ALL_MIN)

css:
	@@echo "Copying CSS to lib"
	cp -pf src/$(PROJECT_NAME).css lib/$(PROJECT_NAME).css

	@@echo "Minifying CSS"
	cleancss -o lib/$(PROJECT_NAME).min.css src/$(PROJECT_NAME).css

dist: corejs alljs css

clean:
	rm -f lib/*.js lib/*.css
