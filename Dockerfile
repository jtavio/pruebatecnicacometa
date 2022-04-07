FROM node:16.14.2-alpine
WORKDIR /app
COPY . .

RUN yarn install

EXPOSE 3000
CMD yarn start