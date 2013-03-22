SUBDIRS = moment-cell \
	paginator \
	select2-cell \
	text-cell \
	select-all \
	filter

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

.EXPORT_ALL_VARIABLES:
