PROJECT_NAME = backgrid-$(notdir $(CURDIR))
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
	recess $(CSS_FILE) --noIDS --noUniversalSelectors --compile > /tmp/$(CSS_FILE) && mv -f /tmp/$(CSS_FILE) $(CSS_FILE);

minify:
	uglifyjs $(JS_FILE) --compress --mangle --output $(JS_OUTFILE)
	recess $(CSS_FILE) --noIDS --noUniversalSelectors --compress > /tmp/$(CSS_OUTFILE) && mv -f /tmp/$(CSS_OUTFILE) $(CSS_OUTFILE);

build: minify
	$(MAKE) $(JS_OUTFILE)
	$(MAKE) $(CSS_OUTFILE)

dist: build
	mkdir -p $(DIST_DIR)/extensions/$(notdir $(CURDIR))
	cp -f $(JS_FILE) $(DIST_DIR)/extensions/$(notdir $(CURDIR))/$(JS_FILE)
	cp -f $(JS_OUTFILE) $(DIST_DIR)/extensions/$(notdir $(CURDIR))/$(JS_OUTFILE)
	cp -f $(CSS_FILE) $(DIST_DIR)/extensions/$(notdir $(CURDIR))/$(CSS_FILE)
	cp -f $(CSS_OUTFILE) $(DIST_DIR)/extensions/$(notdir $(CURDIR))/$(CSS_OUTFILE)

clean:
	rm -f $(JS_OUTFILE) $(CSS_OUTFILE)
