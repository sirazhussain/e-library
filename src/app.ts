import express from "express";

const app = express();

// Define the routes below

// HTTP methods: GET, POST, PUT, PATCH, DELETE

// Define a GET route at the root URL ("/")
app.get("/", (req, res, next) => {
  // Send a JSON response with a message
  res.json({ message: "hello msg" });
});

// Global error handler
// app.use(globalErrorHandler);

export default app;
