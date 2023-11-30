FROM node:latest
WORKDIR /app

# 依存関係をインストール
COPY package.json yarn.lock ./
RUN yarn install
RUN npx prisma generate

COPY . .

CMD ["yarn", "start"]