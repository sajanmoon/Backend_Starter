const express = require("express");
const connectDB = require("./config/dababase");

const app = express();

// Middleware to convert the request data into JSON format
app.use(express.json());

// Import the routes
const authRouter = require("./routes/auth");

// main routes for indivisual routes to direct to our route file
app.use("/", authRouter);

// Setting a PORT and a Database
connectDB()
  .then(() => {
    console.log("Database connected succesfully");
    app.listen(3000, () => {
      console.log("server is litening on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected", err);
  });
