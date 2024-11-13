import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

// Global error handler middleware
const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  // Log the error details (could be replaced with a logging service)
  console.error("Error occurred:", err);

  // Respond with error details
  return res.status(statusCode).json({
    message: err.message,
    error: {
      code: err.statusCode,
      name: err.name,
    },
    errorStack: config.env === "development" ? err.stack : "",
  });
};

export default globalErrorHandler;