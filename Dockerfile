# Use the official Nginx image as the base image
FROM nginx:latest

# Copy the app files into the default Nginx web root directory
COPY index.html /usr/share/nginx/html/
COPY index.js /usr/share/nginx/html/
COPY index.css /usr/share/nginx/html/
