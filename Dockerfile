# Build image: docker build -t cgen-cli .
# Run image  docker run --name cgen-cli-u --rm -ti cgen-cli /bin/bash
# Run lint docker run --name cgen-cli-u --rm -ti cgen-cli npm run lint
# Run test docker run --name cgen-cli-u --rm -ti cgen-cli npm run test
# Run cli docker run --name cgen-cli-u --rm -ti --net vsign-net cgen-cli ./bin/run

FROM node:11.0.0-alpine

LABEL maintainer="Evgeny Karpovsky <ekarpovsky@gmail.com>"

# Alpine does not contain bash by default,
# so install it for interact with the cli
RUN apk add --no-cache bash

# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY package.json .
RUN npm config set registry http://registry.npmjs.org

RUN npm install --no-optional && npm dedupe && npm ls

# Bundle app source
COPY . .

