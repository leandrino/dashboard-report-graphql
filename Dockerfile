FROM node:latest

WORKDIR /usr/src/app/

RUN yarn global add concurrently typescript ts-node

COPY package*.json ./

RUN yarn install

COPY . .

RUN ls -al

CMD [ "ts-node", "./src/server.ts" ]
