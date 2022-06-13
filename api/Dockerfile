FROM node:15-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

## Building code for production
RUN npm ci --only=production

COPY . .

EXPOSE 80

CMD ["npm", "start"]
