const Post = require("../models/postModel");

const createPostController = async (req, res) => {
  try {
    const { title, description } = req.body;
    //validate
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const post = await Post.create({
      title,
      description,
      postedBy: req.auth._id,
    });
    return res.status(201).send({
      success: true,
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create post api",
      error,
    });
  }
};

//Get all posts
const getAllPostsController = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("postedBy", "_id name")
      .sort({ createdAt: -1 }); //the most recent post will come on top
    res.status(200).send({
      success: true,
      message: "All post data",
      posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GETALLPOSTS API",
      error,
    });
  }
};

//Get user posts
const getUserPostsController = async (req, res) => {
  try {
    const userPosts = await Post.find({ postedBy: req.auth._id });
    res.status(200).send({
      success: true,
      message: "user posts",
      userPosts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GETUSERPOSTS API",
      error,
    });
  }
};

//delete post
const deletePostController = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete({ _id: id });
    res.status(200).send({
      success: true,
      message: "Your post has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in DELETEPOST API",
      error,
    });
  }
};

//update post
const updatePostController = async (req, res) => {
  try {
    const { title, description } = req.body;
    //find post
    const post = await Post.findById({ _id: req.params.id });
    //validation
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "Please provide post title or description",
      });
    }
    const updatedPost = await Post.findByIdAndUpdate({_id: req.params.id},{
      title: title || post?.title,
      description: description || post?.description
    }, {new: true});

    res.status(200).send({
      success: true,
      message: "Post updated successfully",
      updatedPost
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in UPDATEPOST API",
      error,
    });
  }
};

module.exports = {
  createPostController,
  getAllPostsController,
  getUserPostsController,
  deletePostController,
  updatePostController,
};
