PROJECT_NAME = backgrid
PROJECT_URL = http://github.com/wyuenho/backgrid
AUTHOR = Jimmy Yuen Ho Wong

DIST_DIR = $(CURDIR)/lib


all: clean dist

FORCE:

build:
	$(MAKE) -w -C src build
	$(MAKE) -w -C src/extensions build

dist: build
	mkdir -p lib
	$(MAKE) -w -C src dist
	$(MAKE) -w -C src/extensions dist

clean:
	rm -rf lib/*
	$(MAKE) -w -C src clean
	$(MAKE) -w -C src/extensions clean

.EXPORT_ALL_VARIABLES:
