
# Production Build
# Build stage for the client
FROM node:18.0-alpine AS client-build

WORKDIR /app

COPY ./client/package*.json ./

RUN npm install

COPY ./client ./

RUN npm run build

WORKDIR /app

COPY ./server/package*.json ./

RUN npm install

COPY ./server ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]