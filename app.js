const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");
// setup static and middleware

app.use(express.static("./public"));
// static assets are files the browser doesn't need to change

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("Resource not found");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
