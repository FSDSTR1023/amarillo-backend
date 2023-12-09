import Post from "../models/post.model.js";

async function createPost(req, res) {
  Post.create(req.body)
    .then((postDocs) => console.log(`post create worked well: ${postDocs}`))
    .catch((error) => {
      console.log(`Creating a new post went wrong! Try again 😞 ${error}`);
      res.status(400).json(error);
    });
  res.send("finished");
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

export { createPost, getPosts };
