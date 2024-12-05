FROM node:16
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn 
COPY . .
RUN yarn seed
EXPOSE 1337
CMD ["yarn", "develop"]