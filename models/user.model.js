import { Schema as _Schema, model } from "mongoose";

// here we are getting access to Schema class from mongoose
const Schema = _Schema;

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const userSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 40,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 40,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 40,
  },
  password: {
    type: String,
    required: true,
    select: false, // Hide password by default when querying
    trim: true,
    minLength: 3,
    maxLength: 40,
  },
  handle: {
    type: String,
    required: true,
    unique: true,
  },

  // image: String, // might store an image URL or reference to an image
  posts: [Schema.Types.ObjectId],
  followers: [Schema.Types.ObjectId],
  following: [Schema.Types.ObjectId],
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

// User is our mongoose model class
// all Users in Users collection will share these properties
// Mongoose turns models name to a collection name (User --> Users)
export default model("User", userSchema);
