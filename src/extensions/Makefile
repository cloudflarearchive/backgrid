SUBDIRS = bignum-cell \
	kalendae-cell \
	latlng-cell \
	paginator \
	select2-cell \
	text-cell

all:
	for subdir in $(SUBDIRS);\
		do $(MAKE) -w -C $$subdir all;\
	done

build:
	for subdir in $(SUBDIRS);\
		do $(MAKE) -w -C $$subdir build;\
	done

clean:
	for subdir in $(SUBDIRS);\
		do $(MAKE) -w -C $$subdir clean;\
	done

csslint:
	for subdir in $(SUBDIRS);\
		do $(MAKE) -w -C $$subdir csslint;\
	done

dist:
	for subdir in $(SUBDIRS);\
		do $(MAKE) -w -C $$subdir dist;\
	done

test:
	for subdir in $(SUBDIRS);\
		do $(MAKE) -w -C $$subdir test;\
	done

.EXPORT_ALL_VARIABLES:
