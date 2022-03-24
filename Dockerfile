FROM node:16-stretch-slim

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci

EXPOSE 3000
