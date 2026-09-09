import { logger } from "../config/logger.js";

export const errorHandler = (err, req, res, next) => {
  logger.error(err, err.message || "Internal Server Error");

  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    status: "error",
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
};
