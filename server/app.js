const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    return console.log(`Server can't listen on  port ${port}.`, err);
  }
  console.log(`server is listening on port ${port}`);
});

// Use middleware to set the default Content-Type
app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  next();
});

app.get("/posts", (req, res) => {
  const postsFile = JSON.parse(fs.readFileSync("posts.json").toString());
  res.send(JSON.stringify(postsFile));
});
