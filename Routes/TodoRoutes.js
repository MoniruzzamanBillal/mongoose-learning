const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// get all todo
router.get("/todos", async (req, res) => {
  res.send({ message: "get all todos " });
});

// get single todo
router.get("/todo/:id", async (req, res) => {
  res.send({ message: "get single todo " });
});

// post single todo
router.post("/todo/post", async (req, res) => {
  res.send({ message: "add single todo " });
});

// delete a todo
router.delete("/todo/delete/:id", async (req, res) => {
  res.send({ message: "delete single todo " });
});

module.exports = router;
