# Dockerfile
FROM node:current-alpine

# create destination directory
RUN mkdir -p /usr/src/qmt
WORKDIR /usr/src/qmt

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/qmt/
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
