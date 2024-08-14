const { Schema, model } = require("mongoose");

const userScema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/vikasvpattar18/image/upload/v1723609119/avatar.jpg",
  },
  posts: { type: Number, default: 0 },
});

module.exports = model("User", userScema);
