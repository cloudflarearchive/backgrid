PROJECT_NAME = backgrid
PROJECT_URL = http://github.com/wyuenho/backgrid
AUTHOR = Jimmy Yuen Ho Wong

DIST_DIR = $(CURDIR)/lib


all: clean dist

FORCE:

build:
	$(MAKE) -w -C src build
	$(MAKE) -w -C src/extensions build

dist:
	mkdir -p lib
	$(MAKE) -w -C src dist
	$(MAKE) -w -C src/extensions dist

clean:
	rm -rf lib/*
	$(MAKE) -w -C src clean
	$(MAKE) -w -C src/extensions clean

extension:
	@read -p "Please specify your extension name: " extension; \
	mkdir -p src/extensions/$$extension; \
	for filename in README.md Makefile $$extension.js $$extension.css test.js index.html; do \
		touch src/extensions/$$extension/$$filename; \
	done; \
	echo "Extension directory $$extension has been created under src/extensions/$$entension"; \

.EXPORT_ALL_VARIABLES:
