import { Router } from "express";
var router = Router();   //xpress.Router();  ??

/* GET posts listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a post");
});

export default router;
