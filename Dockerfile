# Use Node.js to build React app
FROM node:18 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Use Nginx to serve the React app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .   

# Copy the Nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
