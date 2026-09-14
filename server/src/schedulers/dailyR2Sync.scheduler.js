import { syncUploadsToR2 } from "../services/r2Sync.service.js";
import { logger } from "../config/logger.js";

let timerId = null;

// Calculates milliseconds remaining until next scheduled run at 03:30 AM BST
const getMsUntilNextRun = (targetHour = 3, targetMinute = 30) => {
  const now = new Date();
  const bstOffsetMs = 6 * 60 * 60 * 1000;
  const nowBst = new Date(now.getTime() + bstOffsetMs);
  const targetBst = new Date(nowBst);
  targetBst.setUTCHours(targetHour, targetMinute, 0, 0);

  if (targetBst.getTime() <= nowBst.getTime()) {
    targetBst.setUTCDate(targetBst.getUTCDate() + 1);
  }

  return targetBst.getTime() - nowBst.getTime();
};

// Executes differential sync and schedules next daily cycle
const executeAndReschedule = async () => {
  try {
    logger.info("[R2Scheduler] Starting daily differential uploads sync (post-3 AM)");
    await syncUploadsToR2("DAILY_3AM_SCHEDULER");
  } catch (error) {
    logger.error({ err: error }, "[R2Scheduler] Daily uploads sync failed");
  } finally {
    scheduleNextDailySync();
  }
};

// Schedules the next recurring uploads synchronization job
export const scheduleNextDailySync = () => {
  if (timerId) {
    clearTimeout(timerId);
  }

  const delayMs = getMsUntilNextRun(3, 30);
  const nextRunDate = new Date(Date.now() + delayMs);

  logger.info(
    { nextRun: nextRunDate.toISOString(), delayHours: (delayMs / (1000 * 60 * 60)).toFixed(2) },
    "[R2Scheduler] Next daily Cloudflare R2 uploads sync scheduled"
  );

  timerId = setTimeout(executeAndReschedule, delayMs);
};

// Halts the active daily synchronization scheduler
export const stopDailySyncScheduler = () => {
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
    logger.info("[R2Scheduler] Cloudflare R2 daily sync scheduler stopped");
  }
};
