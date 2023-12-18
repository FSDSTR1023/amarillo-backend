import Post from "../models/post.model.js";
import User from "../models/user.model.js";

async function createPost(req, res) {
  try {
    // Create the post
    const newPost = await Post.create(req.body);

    // Find the user who created the post and update their posts array
    const updatedUser = await User.findByIdAndUpdate(
      req.body.createdBy,
      { $push: { posts: newPost._id } }, // Push the newly created post's ID to the user's posts array
      { new: true }
    );

    // If the user is not found or other issues arise during the update, handle it
    if (!updatedUser) {
      throw new Error("User not found or unable to update user's posts array.");
    }

    console.log(`Post created and linked to user successfully.`);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    res.status(400).json({ error: "Failed to create post." });
  }
}

async function getPosts(req, res) {
  Post.find({
    // add filters for searching specific posts
  })
    .then((postDocs) => {
      console.log("Found this: ", postDocs);
      res.status(200).json(postDocs);
    })
    .catch((err) => console.log("Error while getting the posts: ", err));
}

async function getPostById(req, res) {
  Post.findById(req.params.id)
    .then((postDocs) => {
      console.log("Found this post by their ID: ", postDocs);
      res.status(200).json(postDocs);
    })
    .catch((err) => {
      console.log("Error while getting the post: ", err);
      res.status(400).json(err);
    });
}

async function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then((deletedPost) => {
      console.log(`Deleted post with id: ${deletedPost.id}`);
      res.status(200).json(deletedPost);
    })
    .catch((err) => {
      console.log("Error while deleting post: ", err);
      res.status(400).json(err);
    });
}

async function updatePost(req, res) {
  Post.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    }
  )
    .then((updatedPost) => {
      console.log(updatedPost + "successfully updated");
      console.log(req.body);
      res.status(200).json(updatedPost);
    })
    .catch((err) => {
      console.log("Error while updatng post: ", err);
      res.status(400).json(err);
    });
}

export { createPost, getPosts, getPostById, deletePost, updatePost };
