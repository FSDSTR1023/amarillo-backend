import User from "../models/user.model.js";

async function createUser(req, res) {
  User.create(req.body)
    .then((userDoc) => console.log(`user create worked well: ${userDoc}`))
    .catch((error) => {
      console.log(`Creating a new user went wrong! Try again 😞 ${error}`);
      res.status(400).json(error);
    });
  res.send("finished");
}

async function loginUser(req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      if (!req.body.password || user.password !== req.body.password) {
        return res.status(403).json({ msg: "Forbidden" });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err, " <---- error try again something went wrong");
      res.status(400).json(err);
    });
}

async function updateUser(req, res) {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    }
  )
    .then((updatedUser) => {
      console.log("updated user: ", updatedUser);
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      console.log(("error updating student: ", err));
      res.status(400).json(err);
    });
}

async function deleteUser(req, res) {
  User.findByIdAndDelete(req.params.id)
    .then((deletedUser) => {
      console.log(`Deleted user with id: ${deletedUser.id}`);
      res.status(200).json(deletedUser);
    })
    .catch((err) => {
      console.log("Error while deleting user: ", err);
      res.status(400).json(err);
    });
}

async function getUsers(req, res) {
  User.find({
    // add filters for searching specific users
  })
    .then((userDocs) => {
      console.log("Found this: ", userDocs);
      res.status(200).json(userDocs);
    })
    .catch((err) => console.log("Error while getting the users: ", err));
}

async function getUserById(req, res) {
  User.findById(req.params.id)
    .then((userDocs) => {
      console.log("Found this user by their ID: ", userDocs);
      res.status(200).json(userDocs);
    })
    .catch((err) => {
      console.log("Error while getting the user: ", err);
      res.status(400).json(err);
    });
}

export { createUser, getUsers, getUserById, loginUser, deleteUser, updateUser };
