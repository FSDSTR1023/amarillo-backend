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

// Agrego la funcion de login de usuario 

async function loginUser(req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      if (!req.body.password || user.password !== req.body.password) {
        return res.status(403).json({ msg: 'Forbidden' });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log(err, ' <---- error try again something went wrong');
      res.status(400).json(err);
    });
}

export { createUser, getUsers, getUserById, loginUser };
