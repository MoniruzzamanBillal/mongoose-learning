const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const TodoSchema = require("../Schema/TodoSchema");

const Todo = new mongoose.model("Todo", TodoSchema);

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
  try {
    const postData = new Todo(req.body);

    const response = await postData.save();

    res.send({ message: "data added successfully" });
  } catch (error) {
    res.send({ message: error });
  }
});

// delete a todo
router.delete("/todo/delete/:id", async (req, res) => {
  res.send({ message: "delete single todo " });
});

module.exports = router;
