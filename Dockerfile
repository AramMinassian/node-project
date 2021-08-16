FROM node:current

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./public  /app/public
COPY ./src /app/src

CMD npm run dev
