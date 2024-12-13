const express = require("express");
const connectDB = require("./config/dababase");

const app = express();

app.use("/hello", (req, res) => {
  res.send("server is running ");
});

connectDB()
  .then(() => {
    console.log("Database connected succesfully");
    app.listen(3000, () => {
      console.log("server is litening on port 3000");
    });
  })
  .catch(() => {
    console.log("Database cannot be connected");
  });
