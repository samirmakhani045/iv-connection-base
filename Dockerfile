FROM node:lts-alpine

# install simple http server for serving static content
RUN yarn global add serve

# make the 'playground' folder the current working directory
WORKDIR /playground

# copy project files and folders to the current working directory
COPY . .

# install project dependencies
RUN yarn install

# build app for production with minification, and output to 'build' folder
RUN yarn build

# serve static 'build' folder
EXPOSE 3000
EXPOSE 8000
CMD ["serve", "-s", "-l", "tcp://0.0.0.0:8000", "build"]
