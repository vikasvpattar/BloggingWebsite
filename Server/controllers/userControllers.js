const bcrypt = require("bcryptjs");
const HttpError = require("../models/errorModel");
const User = require("../models/userModel.js");

// POST: api/users/register
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password || !password2) {
      return next(new HttpError("Fill in all fields.", 422));
    }
    const newEmail = email.toLowerCase();
    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return next(new HttpError("Email already exists.", 422));
    }
    if (password.trim().length < 6) {
      return next(
        new HttpError("Password should be atleast 6 characters.", 422)
      );
    }
    if (password != password2) {
      return next(new HttpError("Password do not match.", 422));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    return next(new HttpError("User registration failed.", 422));
  }
};

// POST: api/users/login
const loginUser = async (req, res) => {
  res.json("login user");
};

// get api/users/:id
// Protected
const getUser = async (req, res, next) => {
  res.json("User profile");
};

// get api/users/change_avatar
// Protected
const changeAvatar = async (req, res, next) => {
  res.json("Change user avatar");
};

// get api/users/edit-user
// Protected
const editUser = async (req, res, next) => {
  res.json("Edit user details");
};

// get api/users/authors
//Un Protected
const getAuthors = async (req, res, next) => {
  res.json("get all authors");
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  getAuthors,
  changeAvatar,
  editUser,
};
