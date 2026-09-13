#!/bin/bash
set -e

echo "=== 1. Updating APT and installing prerequisites ==="
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y curl wget git htop ufw fail2ban nginx certbot python3-certbot-nginx ca-certificates gnupg

echo "=== 2. Installing Docker ==="
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o /tmp/get-docker.sh
    sh /tmp/get-docker.sh
    rm -f /tmp/get-docker.sh
fi

systemctl enable docker
systemctl start docker

echo "=== 3. Configuring Firewall (UFW) ==="
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
echo "y" | ufw enable || true

echo "=== 4. Creating deployment directories ==="
mkdir -p /opt/cares-bangladesh
mkdir -p /var/www/uploads
chmod -R 777 /var/www/uploads

echo "=== 5. Verification ==="
docker --version
docker compose version
ufw status
nginx -v
echo "=== VPS BASE SETUP COMPLETE ==="
