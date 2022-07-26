#### Stage 1: Build the angular application
FROM node as build

# Configure the main working directory inside the docker image.
# This is the base directory used in any further RUN, COPY, and ENTRYPOINT
# commands.
WORKDIR /app

# Copy the package.json as well as the package-lock.json and install
# the dependencies. This is a separate step so the dependencies
# will be cached unless changes to one of those two files
# are made.
COPY package*.json ./
RUN npm install

# Copy the main application
COPY . ./

# Arguments
ARG configuration=production

# Build the application
RUN npm run build -- --outputPath=./dist/nds-front --configuration $configuration

#### Stage 2, use the compiled app, ready for production with Nginx
FROM nginx

# Copy the angular build from Stage 1
COPY --from=build /app/dist/nds-front /usr/share/nginx/html

# Copy our custom nginx config
COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf


# Expose port 80 to the Docker host, so we can access it
# from the outside.
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]


##"DONT DELTE THIS BELOW vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv"
#### STAGE 1:BUILD ###
## Defining a node image to be used as giving it an alias of "build"
## Which version of Node image to use depends on project dependencies
## This is needed to build and compile our code
## while generating the docker image
#FROM node:16.10-alpine AS build
## Create a Virtual directory inside the docker image
#WORKDIR /app
#
##RUN apk add vim nano htop
## Copy files to virtual directory
## COPY package.json package-lock123456789.json ./
## Run command in Virtual directory
##RUN #npm cache clean --force
#
## Copy files from local machine to virtual directory in docker image
#
#COPY . .
#RUN npm install -g npm@8.12.2
#RUN npm install chart.js --save --legacy-peer-deps
#RUN npm install -g @angular/cli
#
#RUN npm install --legacy-peer-deps --force
#RUN npm run build --production
#
#
#### STAGE 2:RUN ###
## Defining nginx image to be used-
#FROM nginx:1.17.1-alpine AS ngi
## Copying compiled code and nginx config to different folder
## NOTE: This path may change according to your project's output folder
#COPY --from=build /app/dist/nds-front /usr/share/nginx/html
##COPY /nginx-custom.conf /etc/nginx/conf.d/nginx-custom.conf
## Exposing a port, here it means that inside the container
## the app will be using Port 80 while running
##EXPOSE 4200
##ENTRYPOINT ["nginx","-g","daemon off;"]
