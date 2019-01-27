FROM node
WORKDIR /code
COPY . /code
RUN yarn
CMD ["npx", "webpack", "--watch"]
