#!/bin/bash
set -e

SCRIPT_PATH="/opt/live/scripts/daily-r2-backup.sh"
if [ ! -f "$SCRIPT_PATH" ]; then
  SCRIPT_PATH="/root/Cares-Bangladesh/scripts/daily-r2-backup.sh"
fi

chmod +x "$SCRIPT_PATH" 2>/dev/null || true

CRON_JOB="15 3 * * * /bin/bash ${SCRIPT_PATH} >> /var/log/cares-r2-backup.log 2>&1"

if crontab -l 2>/dev/null | grep -Fq "daily-r2-backup.sh"; then
  echo "ℹ️ Nightly backup cron job already exists in crontab."
else
  (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
  echo "✅ Nightly R2 backup cron scheduled for 03:15 AM."
fi

echo "--- Current Crontab ---"
crontab -l
