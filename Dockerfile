# Build stage
FROM node:18.14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build



# Production stage
FROM node:18.14

WORKDIR /app

COPY /app/server/package*.json ./

RUN npm install --only=production

COPY --from=build /app/dist/ ./dist

EXPOSE 3000

CMD ["npm", "start"]