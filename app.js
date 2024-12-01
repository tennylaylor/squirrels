const express = require("express");
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Static files (CSS, images, etc.)
app.use(express.static("public"));

// Route to render the homepage
app.get("/", (req, res) => {
  res.render("index", { title: "Hello", user: { name: "Student" } });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
