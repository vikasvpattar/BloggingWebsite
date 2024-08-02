const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
  res.json("this is the posts route");
});
module.exports = router;
