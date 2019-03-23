## build base environment
#FROM node:9.6.1 as builder
## Set working directory
#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
#COPY package.json /usr/src/app/package.json
#RUN npm install --silent
#RUN npm install react-scripts@2.1.5 -g --silent
#RUN rm -rf node_modules
#COPY . /usr/src/app
#RUN npm uninstall babel-loader@7.1.5
#RUN npm run build
#
## Running environment
#FROM nginx:1.13.9-alpine
#COPY --from=builder /usr/src/app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN rm -rf node_modules
RUN rm -rf package-lock.json
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@2.1.8 -g --silent

COPY . /usr/src/app

# start app
CMD ["npm", "start"]