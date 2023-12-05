import User from "../models/user.model.js";

async function createUser(req, res) {
  User.create({
    first_name: "Toni",
    last_name: "Morales",
    handle: "tonebone",
    email: "tonifcb@gmail.com",
  })
    .then((userDoc) => console.log(`user create worked well: ${userDoc}`))
    .catch((error) =>
      console.log(`Creating a new user went wrong! Try again 😞 ${err}`)
    );
  res.send("finished");
}

export { createUser };
