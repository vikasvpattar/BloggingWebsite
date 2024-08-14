const { Router } = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const { upload } = require("../middleware/multerMiddleware.js");

const {
  createPost,
  getPosts,
  getPost,
  getCatPosts,
  getUserPosts,
  editPost,
  deletePost,
} = require("../controllers/postController.js");

const router = Router();
router.post("/", authMiddleware, upload.single("thumbnail"), createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.patch("/:id", authMiddleware, upload.single("thumbnail"), editPost);
router.get("/categories/:category", getCatPosts);
router.get("/users/:id", getUserPosts);
router.delete("/:id", authMiddleware, deletePost);
module.exports = router;
