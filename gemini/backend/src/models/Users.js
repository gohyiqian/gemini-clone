const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const usersModel = mongoose.model("Users", usersSchema);

module.exports = usersModel;
