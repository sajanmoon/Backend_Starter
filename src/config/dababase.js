const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/devTinderPractice"
    // "mongodb+srv://sajanmoon123:hbPzKeDAY7xEMvVH@helloworld.40uw0.mongodb.net/"
  );
};

module.exports = connectDB;
