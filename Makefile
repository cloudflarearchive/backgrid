PROJECT_NAME = backgrid
PROJECT_URL = http://github.com/wyuenho/backgrid
AUTHOR = Jimmy Yuen Ho Wong
VERSION = 0.1

SRC_FILES = src/preamble.js \
			src/column.js \
			src/formatter.js \
			src/cell.js \
			src/row.js \
			src/header.js \
			src/body.js \
			src/footer.js \
			src/grid.js

%.js: FORCE
	echo "/*\n\
	  $(PROJECT_NAME)\n\
	  $(PROJECT_URL)\n\n\
	  Copyright (c) `date +%Y` $(AUTHOR)\n\
	  Licensed under the MIT @license.\n\
	*/\n" | cat - $@ > "/tmp/`basename $@`" && mv -f "/tmp/`basename $@`" $@

FORCE:

test: FORCE
	phantomjs bin/qunit-runner.js test/qunit/index.html

dist:
	uglifyjs2 $(SRC_FILES)\
		--beautify indent-level=2,indent-start=2,bracketize=true\
		--compress sequences=false,properties=false,dead-code=false,unsafe=false,conditionals=false,comparisons=false,evaluate=false,booleans=false,loops=false,unused=false,hoist-funs=false,hoist-vars=false,join-vars=false,cascade=false,warnings=true\
		--comments '/^(?!jshint|globals)([.\s\S](?!@license))+$$/'\
		--output lib/$(PROJECT_NAME).js
	echo "(function (root) {\n" | cat - lib/$(PROJECT_NAME).js > /tmp/$(PROJECT_NAME).js && mv -f /tmp/$(PROJECT_NAME).js lib/$(PROJECT_NAME).js
	echo "}(this));" >> lib/$(PROJECT_NAME).js
	make lib/$(PROJECT_NAME).js
	uglifyjs2 lib/$(PROJECT_NAME).js --compress --comments --mangle --output lib/$(PROJECT_NAME).min.js

clean:
	rm -f lib/*.js lib/extensions/*.js

all: clean dist test
