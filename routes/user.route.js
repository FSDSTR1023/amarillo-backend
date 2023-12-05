import { Router } from "express";
var router = Router();

import { createUser } from "../controllers/userController.js";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a user");
});

router.post("/create", createUser);

export default router;
