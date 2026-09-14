import path from "path";
import fs from "fs";
import { syncUploadsToR2, uploadDatabaseDumpToR2 } from "../services/r2Sync.service.js";
import { logger } from "../config/logger.js";

// Parses command line arguments and executes requested R2 backup operation
const run = async () => {
  const command = process.argv[2];

  if (command === "upload-db") {
    const filePath = process.argv[3];
    const customName = process.argv[4];

    if (!filePath || !fs.existsSync(filePath)) {
      logger.error({ filePath }, "Database dump file not found for R2 upload");
      process.exit(1);
    }

    try {
      logger.info({ filePath, customName }, "Uploading database dump to Cloudflare R2");
      const result = await uploadDatabaseDumpToR2(filePath, customName);
      logger.info({ result }, "Database dump successfully uploaded to R2");
      process.exit(0);
    } catch (error) {
      logger.error({ err: error }, "Failed to upload database dump to R2");
      process.exit(1);
    }
  }

  if (command === "sync-uploads") {
    try {
      logger.info("Starting differential uploads sync to Cloudflare R2");
      const result = await syncUploadsToR2("R2_BACKUP_CLI");
      logger.info({ result }, "Differential uploads sync completed");
      process.exit(0);
    } catch (error) {
      logger.error({ err: error }, "Differential uploads sync failed");
      process.exit(1);
    }
  }

  logger.error("Usage: node src/scripts/r2BackupCli.js [upload-db <filePath> <customName> | sync-uploads]");
  process.exit(1);
};

void run();
