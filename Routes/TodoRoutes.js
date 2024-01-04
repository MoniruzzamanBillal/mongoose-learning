const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const TodoSchema = require("../Schema/TodoSchema");

const Todo = new mongoose.model("Todo", TodoSchema);

// get all todo
router.get("/todos", async (req, res) => {
  try {
    const result = await Todo.find({});

    res.send({ result });

    console.log(result);
  } catch (error) {
    res.send({
      message: error,
    });
  }
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

// update a document
router.put("/todo/update/:id", async (req, res) => {
  try {
    // await Todo.updateOne(
    const result = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: "updated by mongoose 2 ",
        },
      },
      {
        new: true,
      }
    );
    console.log(result);
    res.send({ messsage: "data was updated successfully" });
  } catch (error) {
    res.send({ error: error });
  }
});

// delete a todo
router.delete("/todo/delete/:id", async (req, res) => {
  res.send({ message: "delete single todo " });
});

module.exports = router;
