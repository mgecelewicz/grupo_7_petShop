const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.resolve(dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => console.log("servidor funcionando en puerto 3000"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(dirname, "./views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(dirname, "./views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(dirname, "./views/login.html"));
});

app.get("/producto", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/producto.html"));
});