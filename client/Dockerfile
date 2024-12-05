FROM node:16
WORKDIR /usr/src/app
COPY package.json package-lock.json yarn.lock  ./
RUN yarn --ignore-engines
COPY . .
RUN npx next telemetry enable
EXPOSE 3000
CMD ["yarn", "dev"]