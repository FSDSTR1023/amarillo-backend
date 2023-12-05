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

export { createUser, getUsers, getUserById };
