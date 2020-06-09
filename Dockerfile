FROM node:dubnium

WORKDIR /usr/src/app
COPY . .
RUN yarn install && npm run build

CMD ["npm", "run", "serve"]
