PROJECT_NAME = backgrid
PROJECT_URL = http://github.com/wyuenho/backgrid
AUTHOR = Jimmy Yuen Ho Wong and contributors

FORCE:

%.js: FORCE
	printf "/*\n\
	  $(PROJECT_NAME)\n\
	  $(PROJECT_URL)\n\n\
	  Copyright (c) `date +%Y` $(AUTHOR)\n\
	  Licensed under the MIT @license.\n\
	*/\n" | cat - $@ > "/tmp/`basename $@`" && mv -f "/tmp/`basename $@`" $@
