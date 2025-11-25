const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, require: true},
  email: { type: String, require: true ,unique:true },
  password: { type: String, require: true },
});
module.exports = mongoose.model("userLogin", userLoginSchema);
