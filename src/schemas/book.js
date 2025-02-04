const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  refId : {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Book", bookSchema);
