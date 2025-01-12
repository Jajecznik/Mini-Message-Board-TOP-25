const { Router } = require("express");

const router = Router();

router.get("/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = req.messages[messageId];

  res.render("message_details", { message });
});

module.exports = router;
