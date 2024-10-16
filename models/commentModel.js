const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
  postId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
