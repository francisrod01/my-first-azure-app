FROM node:14-alpine3.15

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

## Building code for production
RUN npm ci --only=production

COPY . .

EXPOSE 9000

CMD ["npm", "start"]
