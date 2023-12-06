import { Router } from "express";
var router = Router();

import {
  createUser,
  getUsers,
  getUserById,
} from "../controllers/userController.js";

/* GET users listing. */
router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/create", createUser);

router.post('/login', userController.loginUser); //agrego ruta de login de usuario 

export default router;
