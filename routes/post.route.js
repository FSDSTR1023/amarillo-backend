import { Router } from "express";
var router = Router();

import {
  getPosts,
  createPost,
  getPostById,
  deletePost,
  updatePost,
} from "../controllers/postController.js";

// TODO - add functions for these routes

router.get("/", getPosts);

router.get("/:id", getPostById);

router.post("/", createPost);

router.delete("/:id", deletePost);

router.put("/:id", updatePost);

router.put("/user/update" /*editPost (content of post) function*/);

export default router;
