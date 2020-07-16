FROM node:12.18.2-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV production

RUN npm run build

CMD ["npm", "start"]