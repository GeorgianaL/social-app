const express = require("express");
const fs = require("fs");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const firebase = require("./firebaseInit");

const app = express();
const port = process.env.PORT || 3000;

//add other middleware
const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200, // For legacy browser support
  methods: "GET, PUT, POST, DELETE",
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  res.send("Social app API");
});

app.get("/posts", (req, res) => {
  const file = JSON.parse(fs.readFileSync("posts.json").toString());
  res.send(JSON.stringify(file));
});

app.get("/messages", (req, res) => {
  const data = JSON.parse(fs.readFileSync("messages.json").toString());
  res.send(JSON.stringify(data.messages));
});

app.post("/messages", (req, res) => {
  const rawData = fs.readFileSync("messages.json");
  const data = JSON.parse(rawData);
  const newMessages = { messages: [...data.messages, req.body] };

  try {
    fs.writeFileSync("messages.json", JSON.stringify(newMessages));
  } catch (err) {
    console.error(`Error while writing messages file: ${err}`);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end();
  }

  // return all messages on response
  res.writeHead(200, "OK", { "Content-Type": "text/plain" });
  res.end(JSON.stringify(newMessages.messages));
});

// console.log(firebase.messaging);
