const mongoose = require("mongoose");

const viewSchema = new mongoose.Schema({
  postId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("View", viewSchema);
