// call express
const express = require("express");

// call .env
const dotenv = require("dotenv");
const dotenvConfig = dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/bdapp");

// set welcome api
app.get("/", (req, res) => {
  res.status(200).json({
    statusText: "Success",
    message: "Welcome to bdApp API",
  });
});

// set wrong routes
app.all("*", (req, res) => {
  res.status(404).json({
    statusText: "Not Found",
    message: "Sorry, Route doesn't exist in our server. Please check your route and try again.",
  });
});

// connection
app.listen(process.env.PORT, () => {
  console.log(`Connected on port ${process.env.PORT}`);
});
