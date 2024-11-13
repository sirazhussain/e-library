import { Request, Response, NextFunction } from "express";

function globalErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  // Handle the error
  res.status(500).json({ error: err.message || "Internal Server Error" });
}

export default globalErrorHandler; 