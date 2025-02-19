FROM node:20-alpine AS build

# define working directory
WORKDIR /app

# copy our local package.json to the docker image
COPY package.json .

# install dependencies
RUN npm install

# install serve
RUN npm i -g serve

# copy the rest of the files
COPY . . 

# create build for our app
RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "dist"]

