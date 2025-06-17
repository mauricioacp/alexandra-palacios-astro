FROM node:18-alpine AS base

WORKDIR /app

FROM base AS build

# Copy package files first for better caching
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Debug: List the contents of dist to verify build output
RUN ls -la /app/dist/ && echo "Build completed successfully"

FROM nginx:alpine AS runtime

# Copy built static files
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Debug: List nginx html directory contents
RUN ls -la /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]