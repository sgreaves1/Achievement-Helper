FROM node:dubnium-alpine
ADD ./ /app
WORKDIR /app
EXPOSE 4420

USER nobody

ENTRYPOINT ["npm", "start"]