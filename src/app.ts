import express from "express";
import userRouter from "./user/userRoute";
import globalErrorHandler from "../middlewares/globalErrorHandler";

const app = express();

app.use(express.json());

// Define the routes below

// HTTP methods: GET, POST, PUT, PATCH, DELETE

// Define a GET route at the root URL ("/")
app.get("/", (req, res, next) => {
  // Send a JSON response with a message
  res.json({ message: "hello msg" });
});

app.use("/api/users", userRouter);

// Global error handler

// Error handling middleware (placed at the end)
app.use(globalErrorHandler);

export default app;
