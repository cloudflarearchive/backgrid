PROJECT_NAME = backgrid
PROJECT_URL = http://github.com/wyuenho/backgrid
AUTHOR = Jimmy Yuen Ho Wong

DIST_DIR = $(CURDIR)/lib


all: clean doc dist test

FORCE:

build:
	$(MAKE) -w -C src build
	$(MAKE) -w -C src/extensions build

dist:
	mkdir -p lib
	$(MAKE) -w -C src dist
	$(MAKE) -w -C src/extensions dist

clean:
	rm -rf api/*
	rm -rf lib/*
	$(MAKE) -w -C src clean
	$(MAKE) -w -C src/extensions clean

extension:
	@read -p "Please specify your extension name: " extension; \
	mkdir -p src/extensions/$$extension; \
	for filename in .gitignore README.md Makefile backgrid-$$extension.js backgrid-$$extension.css; do \
		touch src/extensions/$$extension/$$filename; \
	done; \
	echo "Extension directory $$extension has been created under src/extensions/$$extension ."; \
	touch test/extensions/$$extension.js; \
	echo "Test for $$extension has been created in test/$$extension.js .";

doc:
	jsduck src/ \
		--external=Backbone.Model,Backbone.Collection,Backbone.View,ReferenceError,TypeError,RangeError \
		--title=Backgrid.js \
		--no-source \
		--categories=categories.json \
		--warnings=-no_doc \
		--pretty-json \
		--output api \
		--body-html="<script type='text/javascript'>\
  var _gaq = _gaq || [];\
  _gaq.push(['_setAccount', 'UA-36403214-1']);\
  _gaq.push(['_setDomainName', 'backgridjs.com']);\
  _gaq.push(['_setAllowLinker', true]);\
  _gaq.push(['_trackPageview']);\
 (function() {\
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\
 })();\
</script>"


test: FORCE
	phantomjs bin/run-jasmine.js test/index.html

.EXPORT_ALL_VARIABLES:

