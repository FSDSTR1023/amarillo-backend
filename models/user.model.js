import { Schema as _Schema, model } from "mongoose";

// here we are getting access to Schema class from mongoose
const Schema = _Schema;

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const userSchema = new Schema({
  first_name: String,
  last_name: String,
  handle: String,
  email: String,
  //   password: {
  //     type: String,
  //     required: true,
  //     select: false, // Hide password by default when querying
  //     // set: (password) => hashSync(password, 10) // Use bcrypt to hash passwords
  //   },

  // image: String, // might store an image URL or reference to an image
  //   posts: [Schema.Types.ObjectId], // Assuming posts are referenced by ObjectId
  //   comments: [Schema.Types.ObjectId],
  //   likes: [Schema.Types.ObjectId],
  //   followers: [Schema.Types.ObjectId],
  //   following: [Schema.Types.ObjectId],
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

// Hash the password before saving to the database so there isn't a security issue
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

// User is our mongoose model class
// all Users in Users collection will share these properties
// Mongoose turns models name to a collection name (User --> Users)
export default model("User", userSchema);
