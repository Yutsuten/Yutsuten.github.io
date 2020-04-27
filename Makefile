serve:
	docker run --rm -d --name notes -p 4000:4000 -w /code -v $(CURDIR):/code jekyll/jekyll:3.8.5 sh -c 'bundle update && jekyll serve --host 0.0.0.0'

stop:
	docker stop notes
