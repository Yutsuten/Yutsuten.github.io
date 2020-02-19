all: serve

serve:
	docker run -d --name notes --restart=always -p 4000:4000 -w /code -v $(CURDIR):/code \
		jekyll/jekyll:3.8.5 /bin/bash -c 'bundle update && jekyll serve --host 0.0.0.0'

stop:
	docker stop notes

down: stop
	docker rm notes
