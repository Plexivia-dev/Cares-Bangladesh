#!/bin/bash
set -e

BACKUP_TYPE="${1:-full}"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
DOWNLOAD_DIR="/var/backups/downloads"
mkdir -p "$DOWNLOAD_DIR"

echo "============================================================"
echo "🚀 Starting Cares Bangladesh Backup Generator [Type: ${BACKUP_TYPE}]"
echo "⏰ Timestamp: ${TIMESTAMP}"
echo "============================================================"

# Detect available asset directories
ASSET_DIRS="uploads"
if [ -d "/var/www/documents" ]; then
    ASSET_DIRS="uploads documents"
fi

if [ "$BACKUP_TYPE" = "db" ]; then
    FILENAME="cares-db-backup-${TIMESTAMP}.gz"
    OUT_FILE="${DOWNLOAD_DIR}/${FILENAME}"
    echo "📦 [1/2] Exporting MongoDB dump from live container..."
    docker exec cares-mongodb mongodump --archive --gzip > "${OUT_FILE}"
    echo "✅ [2/2] MongoDB dump completed successfully!"
    echo "FILE_READY:${FILENAME}"

elif [ "$BACKUP_TYPE" = "uploads" ]; then
    FILENAME="cares-uploads-backup-${TIMESTAMP}.tar.gz"
    OUT_FILE="${DOWNLOAD_DIR}/${FILENAME}"
    echo "📁 [1/2] Compressing asset directories (/var/www/${ASSET_DIRS})..."
    tar -czf "${OUT_FILE}" -C /var/www ${ASSET_DIRS}
    echo "✅ [2/2] Uploads archive completed successfully!"
    echo "FILE_READY:${FILENAME}"

else
    # Full backup: DB + Uploads
    FILENAME="cares-full-backup-${TIMESTAMP}.tar.gz"
    OUT_FILE="${DOWNLOAD_DIR}/${FILENAME}"
    STAGE_DIR="/tmp/cares-backup-${TIMESTAMP}"
    mkdir -p "$STAGE_DIR"
    
    echo "🗄️ [1/3] Dumping MongoDB live database..."
    docker exec cares-mongodb mongodump --archive --gzip > "${STAGE_DIR}/database.gz"
    
    echo "📦 [2/3] Packaging database + assets into tar.gz..."
    tar -czf "${OUT_FILE}" -C "${STAGE_DIR}" database.gz -C /var/www ${ASSET_DIRS}
    rm -rf "${STAGE_DIR}"
    
    echo "✅ [3/3] Full backup created successfully!"
    echo "FILE_READY:${FILENAME}"
fi

echo "------------------------------------------------------------"
ls -lh "${OUT_FILE}"
echo "------------------------------------------------------------"
echo "🎉 Backup ready for download via Ops cPanel."
