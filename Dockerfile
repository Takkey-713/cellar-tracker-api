FROM node:latest
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npx prisma generate --schema=src/prisma/schema.prisma

CMD ["yarn", "start"]
