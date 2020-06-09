FROM node:dubnium

WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

CMD ["npm", "run", "serve"]
