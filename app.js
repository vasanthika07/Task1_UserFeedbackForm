const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { message: null });
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  res.render("index", { message: `Thank you ${name}, we received your response!` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
