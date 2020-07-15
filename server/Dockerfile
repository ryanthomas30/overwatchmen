FROM node:12.13.0-alpine

WORKDIR /usr/local/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn run build

EXPOSE 4000

CMD ["yarn", "serve"]
