const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

// connecting to mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/todos")
  .then(() => console.log("connected to mongodb"))
  .catch((error) => console.log(error));

app.get("/", async (req, res) => {
  res.send({ message: "mongoose server is running " });
});

app.listen(port, () => {
  console.log(`listening from port ${port} `);
});
