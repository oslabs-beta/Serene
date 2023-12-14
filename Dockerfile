# # Production Build
# # Build stage for the client
# FROM node:18.0-alpine 

# WORKDIR /app

# COPY ./client/package*.json ./

# COPY . .

# RUN npm install

# COPY ./client ./

# RUN npm run build

# # WORKDIR /app

# COPY ./server/package*.json ./

# RUN npm install

# COPY ./server ./

# RUN npm install

# EXPOSE 3000

# CMD ["npm", "start"]


# //////////////////////////////////////////

# Build stage for the client
FROM node:18.0-alpine AS builder

WORKDIR /app

COPY ./client/package*.json ./

RUN npm install

COPY ./client ./

RUN npm run build


# Stage 2: Production Build
FROM node:18.0-alpine

COPY ./server/package*.json ./

RUN npm install

COPY ./server ./

RUN npm install --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]