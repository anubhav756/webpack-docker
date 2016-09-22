# webpack-docker

This repo is a replication of an issue which has been found with webpack-dev-server while running under a docker container.

A simple webpack-dev-server is intended to be serving a simple react app from within a docker container, but due to an issue, the server cannot be accessed from outside the container.

Follow the given steps to replicate this issue:

### Install dependencies
`npm install`

### Build docker image
`docker build -t <something> .`

### Run docker image
`docker run -p 80:8080 <something>`

### ...and the winner is...
[http://localhost](http://localhost)

... no one :(
