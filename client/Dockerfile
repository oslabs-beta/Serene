# Base image
FROM node:18.14
# Make folder to put our files in
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/client
# Set working directory so that all
# subsequent command runs in this folder
WORKDIR /usr/src/app/client
# Copy package json and install dependencies
COPY package*.json ./
RUN npm install
# Copy our app
COPY . .
# Expose port to access server
EXPOSE 3000
# Command to run our app
CMD [ "npm", "run", "dev" ]