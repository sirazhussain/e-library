import Express from "express";

const app = Express();

//routes

//http methods :- get, post, put, patch, delete

app.get("/", (req, res, next) => {
  res.json({ message: "hello msg" });
});

export default app;
