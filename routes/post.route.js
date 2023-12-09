import { Router } from "express";
var router = Router();

import { getPosts, createPost } from "../controllers/postController.js";

// TODO - add functions for these routes

router.get("/", getPosts);

router.get("/:id" /*getPostById function */);

router.post("/", createPost);

router.patch("/logout" /*updatePost (e.g. likes, comments) function*/);

router.put("/user/update" /*editPost (content of post) function*/);

export default router;
