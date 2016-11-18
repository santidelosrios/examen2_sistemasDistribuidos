#create image with Nodejs and NPM
FROM node:argon
#create folder to webapp
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#Install app dependencies
COPY ./mirave/ /usr/src/app/
RUN npm install 
#expose port
EXPOSE 8090
#start the app 
CMD ["npm","start"]
#CMD node server.js
#CMD npm start
