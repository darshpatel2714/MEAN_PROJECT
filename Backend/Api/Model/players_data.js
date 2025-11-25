const mongoose = require("mongoose");

const playersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, require: true },
  role: { type: String, require: true },
  totalRun: { type: Number, require: true },
  totalMatch: { type: Number, require: true },
  photo: { type: String, require: true },
  totalWickets: { type: String },
});

module.exports = mongoose.model("player",playersSchema)
