bind_mount := --mount type=bind,source=$(CURDIR),target=/usr/src/app

serve:
	docker run --rm -d --name yutsuten -p 4000:4000 ${bind_mount} starefossen/github-pages
