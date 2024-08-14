const Post = require("../models/postModel.js");
const User = require("../models/userModel.js");
const HttpError = require("../models/errorModel.js");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
// POST: api/posts
// Protected

const createPost = async (req, res, next) => {
  try {
    const { title, category, description } = req.body;
    if (!title || !category || !description || !req.file) {
      return next(
        new HttpError("Fill in all fields and choose thumbnail.", 422)
      );
    }

    const thumbnailLocalPath = req.file?.path;
    if (!thumbnailLocalPath) {
      return next(new HttpError("Thumbnail is required", 422));
    }

    const cloudinaryResult = await uploadOnCloudinary(thumbnailLocalPath);
    if (!cloudinaryResult) {
      return next(new HttpError("Thumbnail upload failed", 422));
    }

    const thumbnail = cloudinaryResult.secure_url || cloudinaryResult.url;

    const newPost = await Post.create({
      title,
      category,
      description,
      thumbnail,
      creator: req.user.id,
    });

    if (!newPost) {
      return next(new HttpError("Post couldn't be created.", 422));
    }

    const currentUser = await User.findById(req.user.id);
    const userPostcount = currentUser.posts + 1;
    await User.findByIdAndUpdate(req.user.id, { posts: userPostcount });

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error in createPost:", error);
    return next(new HttpError(error.message, 500));
  }
};

// get: api/posts
//Unprotected
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ updatedAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error));
  }
};
// get: api/posts/:id
//Unprotected
const getPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return next(new HttpError("Post not found", 422));
    }
    res.status(200).json(post);
  } catch (error) {
    return next(new HttpError(error));
  }
};
// get: api/posts/categories/:category
//Unprotected
const getCatPosts = async (req, res, next) => {
  try {
    const { category } = req.params;
    const catPosts = await Post.find({ category }).sort({ createdAt: -1 });
    res.status(200).json(catPosts);
  } catch (error) {
    return next(new HttpError(error));
  }
};
// get: api/posts/users/:id
//Unprotected
const getUserPosts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await Post.find({ creator: id }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error));
  }
};
// patch: api/posts/:id
//protected
const editPost = async (req, res, next) => {
  try {
    let fileName;
    let newFileName;
    let updatedPost;
    const postId = req.params.id;
    let { title, category, description } = req.body;
    if (!title || !category || description.length < 12) {
      return next(new HttpError("Fill in all fileds", 422));
    }
    // get old post from DB
    const oldPost = await Post.findById(postId);
    if (req.user.id == oldPost.creator) {
      if (!req.files) {
        updatedPost = await Post.findByIdAndUpdate(
          postId,
          {
            title,
            category,
            description,
          },
          { new: true }
        );
      } else {
        // delete old thumbnail
        fs.unlink(
          path.join(__dirname, "..", "uploads", oldPost.thumbnail),
          async (err) => {
            if (err) {
              return next(new HttpError(err));
            }
          }
        );
        const { thumbnail } = req.files;
        if (thumbnail.size > 2000000) {
          return next(
            new HttpError("Thumbnail is too big, it should be less than 2mb")
          );
        }
        fileName = thumbnail.name;
        let splittedFilename = fileName.split(".");
        newFileName =
          splittedFilename[0] +
          uuid() +
          "." +
          splittedFilename[splittedFilename.length - 1];
        thumbnail.mv(
          path.join(__dirname, "..", "uploads", newFileName),
          async (err) => {
            if (err) {
              return next(new HttpError(err));
            }
          }
        );
        updatedPost = await Post.findByIdAndUpdate(
          postId,
          {
            title,
            category,
            thumbnail: newFileName,
            description,
          },
          { new: true }
        );
        if (!updatedPost) {
          return next(new HttpError("Couldn't update the post", 400));
        }
        res.status(200).json(updatedPost);
      }
    }
    if (!updatedPost) {
      return next(new HttpError("Couldn't update the post.", 422));
    }
  } catch (error) {
    return next(new HttpError(error));
  }
};
// delete: api/posts/:id
//protected
const deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    if (!postId) {
      return next(new HttpError("post is unavailable.", 400));
    }
    await Post.findByIdAndDelete(postId);
    const currentUser = await User.findById(req.user.id);
    if (currentUser) {
      const userPostCount = currentUser.posts > 0 ? currentUser.posts - 1 : 0;
      await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });
    }

    res.status(200).json({ message: `Post ${postId} deleted successfully` });
  } catch (error) {
    return next(new HttpError(error));
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  getCatPosts,
  getUserPosts,
  editPost,
  deletePost,
};
