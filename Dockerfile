
FROM nginx:1.17.1-alpine
COPY projectcoconut/dist/projectcoconut /usr/share/nginx/html

EXPOSE 80