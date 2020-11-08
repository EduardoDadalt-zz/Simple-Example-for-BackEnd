const express = require("express");
const app = express();
const fileSystem = require("fs");
app.use(express.static("public"));
app.use(express.json());
app.post("/send", (req, res) => {
  console.log(req.body);
  fileSystem.writeFileSync("./db.json", JSON.stringify(req.body));
  res.send("OK");
});
app.listen(3000, () => {
  console.log("Tá online");
});
