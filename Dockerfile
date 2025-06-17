FROM node:18-alpine AS base

WORKDIR /app

FROM base AS deps
COPY package*.json ./

RUN npm ci --only=production

FROM base AS build

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]