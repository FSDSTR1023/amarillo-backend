import { Router } from "express";
var router = Router();

// TODO - add functions for these routes

router.get("/" /*getPosts function */);

router.get("/:id" /*getPostById function */);

router.post("/create" /*createPost function */);

router.patch("/logout" /*updatePost (e.g. likes, comments) function*/);

router.put("/user/update" /*editPost (content of post) function*/);

export default router;
