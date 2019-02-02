FROM jekyll/jekyll
WORKDIR /code
COPY . /code
CMD ["jekyll", "serve"]
