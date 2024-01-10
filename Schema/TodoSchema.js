const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: "String",
    require: true,
  },
  description: {
    type: "string",
  },
  status: {
    type: "string",
    enum: ["active", "inactive"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User", // model name
  },
});

todoSchema.methods = {
  findInactive: () => {
    return mongoose.model("Todo").find({ status: "inactive" });
  },
};

module.exports = todoSchema;
