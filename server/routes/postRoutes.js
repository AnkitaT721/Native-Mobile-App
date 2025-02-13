const express = require("express");
const { requireSignIn } = require("../controllers/userController");
const { createPostController, getAllPostsController, getUserPostsController, deletePostController, updatePostController } = require("../controllers/postController");

//router object
const router = express.Router();

//Create post 
router.post("/create-post", requireSignIn, createPostController)

//Get all posts
router.get("/get-all-posts", getAllPostsController)

//Get user posts
router.get("/get-user-posts", requireSignIn, getUserPostsController)

//delete post
router.delete("/delete-post/:id", requireSignIn, deletePostController)

//update post
router.put("/update-post/:id", requireSignIn, updatePostController)

//export
module.exports = router;