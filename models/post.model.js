import { Schema as _Schema, model } from "mongoose";

// here we are getting access to Schema class from mongoose
const Schema = _Schema;


// TODO add all the different entities in the post model
// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const postSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true,
    minlenght: 1,
    maxlenght: 400,
  } 
  // image: String, // might store an image URL or reference to an image
  //   posts: [Schema.Types.ObjectId], // Assuming posts are referenced by ObjectId
  //   comments: [Schema.Types.ObjectId],
  //   likes: [Schema.Types.ObjectId],
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});





// post is our mongoose model class
// all posts in posts collection will share these properties
// Mongoose turns models name to a collection name (post --> posts)
export default model("post", postSchema);
