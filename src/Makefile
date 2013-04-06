PROJECT_NAME = backgrid
PROJECT_URL = http://github.com/wyuenho/backgrid
AUTHOR = Jimmy Yuen Ho Wong and contributors

JS_FILES = preamble.js\
	formatter.js \
	cell.js \
	column.js \
	row.js \
	header.js \
	body.js \
	footer.js \
	grid.js
JS_OUTFILE = $(PROJECT_NAME).js
JS_OUTFILE_MIN = $(PROJECT_NAME).min.js

CSS_FILES = $(PROJECT_NAME).css
CSS_OUTFILE = $(PROJECT_NAME).css
CSS_OUTFILE_MIN = $(PROJECT_NAME).min.css

UGLIFY = uglifyjs
UGLIFY_FLAGS = --compress --mangle


all: clean dist test

FORCE:

%.js %.css: FORCE
	printf "/*\n\
	  $(PROJECT_NAME)\n\
	  $(PROJECT_URL)\n\n\
	  Copyright (c) `date +%Y` $(AUTHOR)\n\
	  Licensed under the MIT @license.\n\
	*/\n" | cat - $@ > "/tmp/`basename $@`" && mv -f "/tmp/`basename $@`" $@

js:
	cat $(JS_FILES) > $(JS_OUTFILE)
	printf "(function (root, $$, _, Backbone) {\n\n  \"use strict\";\n" | cat - $(JS_OUTFILE) > /tmp/$(JS_OUTFILE) && mv -f /tmp/$(JS_OUTFILE) $(JS_OUTFILE)
	printf "}(this, jQuery, _, Backbone));" >> $(JS_OUTFILE)
	make $(JS_OUTFILE)

csslint:
	recess $(CSS_FILES) --noIDS --noUniversalSelectors --compile > /tmp/$(CSS_OUTFILE) && mv -f /tmp/$(CSS_OUTFILE) $(CSS_OUTFILE);

minify: js
	$(UGLIFY) $(JS_OUTFILE) $(UGLIFY_FLAGS) --output $(JS_OUTFILE_MIN)
	recess $(CSS_FILES) --noIDS --noUniversalSelectors --compress > /tmp/$(CSS_OUTFILE_MIN) && mv -f /tmp/$(CSS_OUTFILE_MIN) $(CSS_OUTFILE_MIN);

build: minify
	$(MAKE) $(JS_OUTFILE_MIN)
	$(MAKE) $(CSS_OUTFILE_MIN)

dist: build
	cp -f $(JS_OUTFILE) $(DIST_DIR)/$(JS_OUTFILE)
	cp -f $(JS_OUTFILE_MIN) $(DIST_DIR)/$(JS_OUTFILE_MIN)
	cp -f $(CSS_OUTFILE) $(DIST_DIR)/$(CSS_OUTFILE)
	cp -f $(CSS_OUTFILE_MIN) $(DIST_DIR)/$(CSS_OUTFILE_MIN)

clean:
	rm -rf $(JS_OUTFILE) $(JS_OUTFILE_MIN) $(CSS_OUTFILE_MIN)

.EXPORT_ALL_VARIABLES:
