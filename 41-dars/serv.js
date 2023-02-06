const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());

app.use("/users", (req, res) => {
  res.json({ name: "webbrain" });
});
app.use("/category", (req, res) => {
  res.json({ name: "webbrain" });
});

app.listen(8080, () => {
  console.log(`server running on 8080`);
});
