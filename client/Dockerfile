# Stage 1 - the build process
FROM node:13.12.0-alpine as builder

ARG REACT_APP_API_HOSTNAME
ARG REACT_APP_API_PORT

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
