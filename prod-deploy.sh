#!/bin/bash
set -e

echo "🚀 Starting Cares Bangladesh Production Deployment..."

PROJECT_DIR="/opt/cares-bangladesh"
cd $PROJECT_DIR

echo "📥 Pulling latest code from GitHub..."
git fetch --all
git reset --hard origin/master

echo "📁 Ensuring upload and asset directories..."
mkdir -p /var/www/uploads
chmod -R 777 /var/www/uploads

echo "🌐 Updating Nginx configuration..."
if [ -f "nginx/cares.conf" ]; then
    cp nginx/cares.conf /etc/nginx/sites-available/cares.conf
    ln -sf /etc/nginx/sites-available/cares.conf /etc/nginx/sites-enabled/cares.conf
    rm -f /etc/nginx/sites-enabled/default
    nginx -t && systemctl reload nginx
fi

echo "🐳 Building and starting Docker containers..."
docker compose up -d --build --remove-orphans

echo "🧹 Cleaning up dangling images..."
docker image prune -f

echo "📊 Checking container health..."
docker compose ps

echo "✅ Cares Bangladesh Deployment Completed Successfully!"
