import { Router } from "express";
var router = Router();  //esto no deberia ser -->var router = express.Router();  ???

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Express" });
});

export default router;
