FROM node:14.18.0

WORKDIR /usr/app

COPY . .
RUN npm i --production

EXPOSE 8080

CMD ["npm", "start"]