const mongoose = require("mongoose");

const pointTable = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  logo: { type: String, require: true },
  country: { type: String, require: true },
  won: { type: String, require: true },
  lost: { type: String, require: true },
  nrr: { type: String, require: true },
  points: { type: String, require: true },
  rp: { type: String, require: true },
  results: [
    { type: String, require: true },
    { type: String, require: true },
    { type: String, require: true },
    { type: String, require: true },
    { type: String, require: true },
  ],
});

module.exports = mongoose.model('pointTable' , pointTable)