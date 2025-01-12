const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", (req, res) => {
  const message = req.body.message;
  const username = req.body.username;

  req.messages.push({ text: message, user: username, added: new Date() });
  res.redirect("/");
});

module.exports = router;
