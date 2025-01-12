const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("The page was not found!");
});

module.exports = router;
