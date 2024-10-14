const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  postId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Like", likeSchema);
