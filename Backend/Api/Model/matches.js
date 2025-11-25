// const { MongoGCPError } = require("mongodb");
const mongoose = require("mongoose");

const matchesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  flag1: { type: String, require: true },
  flag2: { type: String, require: true },
  team1: { type: String, require: true },
  team2: { type: String, require: true },
  venue: { type: String, require: true },
  time: { type: String, require: true },
  date: { type: String, require: true },
});

module.exports = mongoose.model('matches' , matchesSchema)
