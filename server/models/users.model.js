const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSChema = new Schema({
  email: String,
  password: String,
});
const User = mongoose.model("user", UsersSChema);

module.exports = User;
