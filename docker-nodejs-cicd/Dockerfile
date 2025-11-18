FROM node:22-alpine

WORKDIR ./app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]

# Handle env -e during run
# Sh into alpine image
# push image to docker hub