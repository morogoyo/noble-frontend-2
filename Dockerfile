### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
# Which version of Node image to use depends on project dependencies
# This is needed to build and compile our code
# while generating the docker image
FROM node:16.10-alpine AS build
# Create a Virtual directory inside the docker image
WORKDIR /app

#RUN apk add vim nano htop
# Copy files to virtual directory
# COPY package.json package-lock123456789.json ./
# Run command in Virtual directory
#RUN #npm cache clean --force

# Copy files from local machine to virtual directory in docker image

COPY . .
RUN npm install -g npm@8.12.2
RUN npm install chart.js --save --legacy-peer-deps
RUN npm install -g @angular/cli

RUN npm install --legacy-peer-deps --force
RUN npm run build --prod


### STAGE 2:RUN ###
# Defining nginx image to be used-
FROM nginx:1.17.1-alpine AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder
COPY --from=build /app/dist/nds-front /usr/share/nginx/htmld
#COPY /nginx-custom.conf /etc/nginx/conf.d/nginx.conf
# Exposing a port, here it means that inside the container
# the app will be using Port 80 while running
#EXPOSE 4200
#ENTRYPOINT ["nginx","-g","daemon off;"]
