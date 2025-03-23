const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  refId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
