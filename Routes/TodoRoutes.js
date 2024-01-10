const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const TodoSchema = require("../Schema/TodoSchema");

const Todo = new mongoose.model("Todo", TodoSchema);

// ! using instance method
// get in active todo
router.get("/todos/inactive", async (req, res) => {
  const todo = new Todo();
  const data = await todo.findInactive();
  res.send({ data });
});

// get all todo
router.get("/todos", async (req, res) => {
  try {
    const result = await Todo.find({})
      .populate("user", "name userName -_id") // 1st parameter , collection name , 2nd parameter , what we need from db
      .select({
        _id: 0,
        __v: 0,
      });

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
  try {
    const result = await Todo.find({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.send({ message: error });
  }
});

// post single todo
router.post("/todo/post", async (req, res) => {
  try {
    const newTodo = {
      ...req.body,
      user: req.userId,
    };

    const postData = new Todo(newTodo);

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
  try {
    const result = await Todo.deleteOne({ _id: req.params.id });
    res.send({ message: "item deleteed successfully" });
  } catch (error) {
    res.send({ message: error });
  }
});

module.exports = router;
