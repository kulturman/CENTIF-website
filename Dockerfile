FROM node:lts-alpine

WORKDIR /app

COPY ./backend/package*.json .

RUN npm install -f

COPY ./backend .

EXPOSE 1337

CMD [ "npm", "run", "develop" ]
