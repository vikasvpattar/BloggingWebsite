// POST: api/users/register
const registerUser = async (req, res) => {
  res.json("Register user");
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
