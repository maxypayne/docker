FROM node:16
WORKDIR /app
COPY package.json .
# RUN npm install

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY . ./
ENV PORT=3000
# EXPOSE 3000
EXPOSE $PORT
# CMD ["nodemon", "index.js"]
# CMD ["npm", "run", "dev"]
CMD ["node", "index.js"]
