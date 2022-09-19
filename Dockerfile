FROM node:latest
RUN mkdir -p /opt/api
WORKDIR /opt/api
COPY package.json .
RUN npm install -g typescript && npm i -g @nestjs/cli  && npm install
COPY . .
EXPOSE 3000
CMD npm run start