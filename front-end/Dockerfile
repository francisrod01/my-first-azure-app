# Builder
FROM node:14-alpine3.15 AS build-stage
WORKDIR /opt/web

COPY package.json package-lock.json ./
RUN npm run clean
RUN npm ci --ignore-scripts
ENV PATH="./node_modules/.bin:$PATH"

COPY . ./

ARG API_BASE_URL=${API_BASE_URL:-}
RUN echo "[ARGs] API base-url: ${API_BASE_URL}"

ENV API_BASE_URL=${API_BASE_URL:-}
RUN echo "[ENVs] API base-url: ${API_BASE_URL}"

RUN npm run build:prod


# Nginx server for frontend app
FROM nginx:1.22-alpine
ENV APP_DIR=angular-basic

## Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /opt/web/dist/${APP_DIR} /usr/share/nginx/html

EXPOSE 80
