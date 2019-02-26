FROM node:alpine

WORKDIR /usr/src/app/

RUN yarn global add concurrently typescript ts-node

COPY package*.json ./

RUN yarn install

COPY . .

RUN tsc

WORKDIR /usr/src/app/dist

EXPOSE 3000

# CMD [ "node", "server.js" ]
