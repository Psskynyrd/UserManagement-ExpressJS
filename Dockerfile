# FROM node:14 AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run Build

FROM node:14-alpine
WORKDIR /app
# COPY --from=build /app/package*.json ./
COPY package*.json ./
# RUN npm install bebel
RUN npm i 
# COPY --from=build /app/dist ./dist
COPY . .
ENV NODE_ENV=production
EXPOSE 5000
# CMD ["node", "dist/index.js"]
CMD ["node", "index.js"]