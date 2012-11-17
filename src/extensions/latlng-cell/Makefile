PROJECT_NAME = backgrid-latlng-cell
PROJECT_URL = http://github.com/wyuenho/backgrid
AUTHOR = Jimmy Yuen Ho Wong

JS_FILE = $(PROJECT_NAME).js
CSS_FILE = $(PROJECT_NAME).css

JS_OUTFILE = $(PROJECT_NAME).min.js
CSS_OUTFILE = $(PROJECT_NAME).min.css


all: clean dist test

FORCE:

%.js %.css: FORCE
	echo "/*\n\
	  $(PROJECT_NAME)\n\
	  $(PROJECT_URL)\n\n\
	  Copyright (c) `date +%Y` $(AUTHOR)\n\
	  Licensed under the MIT @license.\n\
	*/" | cat - $@ > "/tmp/`basename $@`" && mv -f "/tmp/`basename $@`" $@

csslint:
	recess $(CSS_FILES) --noIDS --noUniversalSelectors --compile > /tmp/$(CSS_OUTFILE) && mv -f /tmp/$(CSS_OUTFILE) $(CSS_OUTFILE);

minify:
	uglifyjs2 $(JS_FILE) --compress --mangle --output $(JS_OUTFILE)
	recess $(CSS_FILES) --noIDS --noUniversalSelectors --compress > /tmp/$(CSS_OUTFILE) && mv -f /tmp/$(CSS_OUTFILE) $(CSS_OUTFILE);

build: minify
	$(MAKE) $(JS_OUTFILE)
	$(MAKE) $(CSS_OUTFILE)

dist: build
	mkdir -p $(DIST_DIR)/extensions/$(notdir $(CURDIR))
	cp -f $(JS_FILE) $(DIST_DIR)/extensions/$(notdir $(CURDIR))/$(JS_FILE)
	cp -f $(JS_OUTFILE) $(DIST_DIR)/extensions/$(notdir $(CURDIR))/$(JS_OUTFILE)
	cp -f $(CSS_FILE) $(DIST_DIR)/extensions/$(notdir $(CURDIR))/$(CSS_FILE)
	cp -f $(CSS_OUTFILE) $(DIST_DIR)/extensions/$(notdir $(CURDIR))/$(CSS_OUTFILE)

test: FORCE
	phantomjs ../../../bin/qunit-runner.js index.html

clean:
	rm -f $(JS_OUTFILE) $(CSS_OUTFILE)
