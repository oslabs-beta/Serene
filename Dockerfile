# Production Build
# Build stage for the client
FROM node:18.0-alpine AS builder

WORKDIR /app

COPY ./client/package*.json ./

RUN npm install

COPY ./client ./

RUN npm install

RUN npm run build


# Stage 2: Production Build
FROM node:18.0-alpine

COPY ./server/package*.json ./

RUN npm install

COPY ./server ./

RUN npm install --only=production

COPY --from=builder /app/dist ./dist

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]