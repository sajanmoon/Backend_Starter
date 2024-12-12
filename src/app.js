const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("server is running gjhhn");
});

app.listen(3000, () => {
  console.log("server is litening on port 3000");
});
