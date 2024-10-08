const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const { upload } = require("../middleware/multerMiddleware.js");
const {
  registerUser,
  loginUser,
  getUser,
  getAuthors,
  changeAvatar,
  editUser,
} = require("../controllers/userControllers.js");
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUser);
router.get("/", getAuthors);
router.post(
  "/change-avatar",
  authMiddleware,
  upload.single("avatar"),
  changeAvatar
);
router.patch("/edit-user", authMiddleware, editUser);

module.exports = router;
