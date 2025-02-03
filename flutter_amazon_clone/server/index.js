console.log("helllo, world!");

const express = require("express");
const PORT = 3000;

const app = express();

//CREATING AN API
app.get("/hello-word", (req, res) => {
  res.json({hi: "hello world!"});
});
// GET, PUT, DELETE, UPDATE => CRUD

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connexted at port ${PORT}`);
});
