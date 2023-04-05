import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hooray! server is working and deployed on render");
});

export default app;
