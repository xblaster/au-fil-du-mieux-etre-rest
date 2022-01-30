FROM bitnami/node:17

# buid dependencies layer
ADD package.json /app
WORKDIR /app
RUN npm install

# add the app
ADD . /app
EXPOSE 3000
CMD npm run start