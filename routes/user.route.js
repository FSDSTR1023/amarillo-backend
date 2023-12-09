import { Router } from "express";
const router = Router();

import {
  createUser,
  getUsers,
  getUserById,
} from "../controllers/userController.js";

/* GET users listing. */

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

// TODO - add functions for these routes
router.post("/login" /*logInUser function*/);

router.post("user/verify/:token" /*verifyUser function*/);

router.patch("/logout" /*logOutUser function*/);

router.put("/user/update" /*editProfileUser function*/);

export default router;
