const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: req.messages });
});

module.exports = router;
