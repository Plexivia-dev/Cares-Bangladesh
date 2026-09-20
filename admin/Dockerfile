# ==========================================
# Cares Bangladesh Admin Dashboard - Vite + Nginx
# ==========================================

# Stage 1: Build stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG VITE_API_BASE_URL=https://api.caresbangladesh.com
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

RUN npm run build

# Stage 2: Production runner
FROM nginx:alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8005
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
