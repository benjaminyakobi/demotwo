FROM node:18

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

## EXPOSE [Port mentioned in the vite.config file]
EXPOSE 5173

CMD ["yarn", "run", "dev"]