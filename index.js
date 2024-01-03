const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send({ message: "mongoose server is running " });
});

app.listen(port, () => {
  console.log(`listening from port ${port} `);
});
