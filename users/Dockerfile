FROM node:18.15.0-slim as users-build
WORKDIR /tmp
COPY package.json yarn.lock /tmp/
RUN yarn
COPY . .
RUN yarn prisma generate

FROM node:18.15.0-slim
WORKDIR /app
RUN apt-get update && apt-get install -y procps
COPY  --from=users-build /tmp/ /app/
RUN rm -rf .dockerignore