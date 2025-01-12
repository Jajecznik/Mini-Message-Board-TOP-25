const indexRouter = require("./routes/index");
const messageDetails = require("./routes/message_details");
const newMessage = require("./routes/new_message");
const notFound = require("./routes/404");

const path = require("node:path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.use((req, res, next) => {
  req.messages = messages
  next();
});

app.use('/new', newMessage);
app.use('/message_details', messageDetails);
app.use('/', indexRouter);
app.use('*', notFound);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const ADDRESS = "127.0.0.1"
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at: http://${ADDRESS}:${PORT}`);
});
