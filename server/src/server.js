import { createApp } from "./app.js";
// [MISSING] // import { connectMySQL } from "./database/mysql.js";
import { connectDatabase } from "./database/index.js";
import { env } from "./config/env.js";
import { logger } from "./config/logger.js";
// [MISSING] import { createShutdownHandler } from "./helper/sutdownHelper.js";
// [MISSING] import { initWebSocketServer } from "./websocket.js";
// [MISSING] import { initMediaSchedulers, stopMediaSchedulers } from "./schedulers/mediaScheduler.js";
// [MISSING] import { initHeartbeatScheduler, stopHeartbeatScheduler } from "./schedulers/heartbeat.scheduler.js";

// Bootstraps backend server, database connections, and background schedulers
const bootstrap = async () => {
  // await connectMySQL();
  await connectDatabase();

  const app = await createApp();
  const port = Number.parseInt(env.PORT ?? process.env.PORT ?? process.env.BACKEND_PORT ?? "5092", 10);

  const server = app.listen(port, "0.0.0.0", () => {
    logger.info({ port, environment: env.NODE_ENV }, "Server listening");
  });

  if (env.IMAP_SYNC_ENABLED) {
    import("./services/imapSync.service.js")
      .then(({ startImapIdleListener }) => {
        startImapIdleListener().catch((err) => {
          logger.error({ err }, "Failed to start IMAP IDLE listener");
        });
      })
      .catch((err) => {
        logger.error({ err }, "Could not load IMAP service");
      });
  }

  if (env.R2_SYNC_ENABLED) {
    import("./schedulers/dailyR2Sync.scheduler.js")
      .then(({ scheduleNextDailySync }) => {
        scheduleNextDailySync();
      })
      .catch((err) => {
        logger.error({ err }, "Could not initialize Cloudflare R2 sync scheduler");
      });
  }

  const shutdown = (signal) => {
    logger.info({ signal }, "Graceful shutdown initiated");
    server.close(() => {
      logger.info("HTTP server closed");
      process.exit(0);
    });
  };

  process.on("SIGINT", () => void shutdown("SIGINT"));
  process.on("SIGTERM", () => void shutdown("SIGTERM"));
  process.on("uncaughtException", (error) => {
    logger.fatal({ err: error }, "Uncaught exception");
    void shutdown("uncaughtException");
  });
  process.on("unhandledRejection", (reason) => {
    logger.fatal({ err: reason }, "Unhandled rejection");
    void shutdown("unhandledRejection");
  });
};

void bootstrap();

