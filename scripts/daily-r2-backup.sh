#!/bin/bash
set -e

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
DOWNLOAD_DIR="/var/backups/downloads"
UPLOADS_HOST_DIR="/opt/www/uploads"
LOG_FILE="/var/log/cares-r2-backup.log"

mkdir -p "$DOWNLOAD_DIR"
mkdir -p "$UPLOADS_HOST_DIR"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "============================================================"
log "🚀 Starting Cares Bangladesh Nightly R2 Cloud Backup"
log "⏰ Timestamp: ${TIMESTAMP}"
log "============================================================"

DB_BACKUP_FILE="cares-db-backup-${TIMESTAMP}.gz"
LOCAL_DB_PATH="${DOWNLOAD_DIR}/${DB_BACKUP_FILE}"
CONTAINER_TEMP_DB="/app/uploads/temp-db-backup-${TIMESTAMP}.gz"
HOST_TEMP_DB="${UPLOADS_HOST_DIR}/temp-db-backup-${TIMESTAMP}.gz"

log "📦 [1/3] Dumping live MongoDB database from cares-mongodb container..."
docker exec cares-mongodb mongodump --archive --gzip > "${LOCAL_DB_PATH}"

log "☁️ [2/3] Uploading database snapshot to Cloudflare R2 (database/${DB_BACKUP_FILE})..."
cp "${LOCAL_DB_PATH}" "${HOST_TEMP_DB}"
docker exec cares-server node src/scripts/r2BackupCli.js upload-db "${CONTAINER_TEMP_DB}" "${DB_BACKUP_FILE}" || log "⚠️ Warning: Database R2 upload failed"
rm -f "${HOST_TEMP_DB}"

log "📁 [3/3] Performing differential uploads sync to Cloudflare R2 (uploads/)..."
docker exec cares-server node src/scripts/r2BackupCli.js sync-uploads || log "⚠️ Warning: Uploads R2 sync failed"

log "🧹 Purging local database backups older than 7 days..."
find "${DOWNLOAD_DIR}" -name "cares-db-backup-*.gz" -mtime +7 -delete || true

log "✅ Nightly R2 Cloud Backup completed successfully!"
log "============================================================"
