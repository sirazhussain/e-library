import Express from "express";

const app = Express();

// Define the routes below

// HTTP methods: GET, POST, PUT, PATCH, DELETE

// Define a GET route at the root URL ("/")
app.get("/", (req, res, next) => {
  // Send a JSON response with a message
  res.json({ message: "hello msg" });
});

// Export the app instance to be used in other files
export default app;
