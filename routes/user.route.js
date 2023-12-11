import { Router } from "express";
const router = Router();

import {
  createUser,
  getUsers,
  getUserById,
  loginUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

/* GET users listing. */

router.get("/", getUsers);

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

router.post("/", createUser);

router.post("/login", loginUser);

// TODO - add functions for these routes

router.post("user/verify/:token" /*verifyUser function*/);

router.patch("/logout" /*logOutUser function*/);

router.put("/:id", updateUser);

export default router;
