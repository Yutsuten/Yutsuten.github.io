bind_mount := --mount type=bind,source=$(CURDIR),target=/code
cache_mount := --mount source=notes_cache,target=/usr/local/bundle
serve_commands := bundle update && jekyll serve --host 0.0.0.0

serve:
	docker run --rm -d --name notes -p 4000:4000 -w /code ${bind_mount} ${cache_mount} jekyll/jekyll:3.8.5 sh -c '${serve_commands}'
