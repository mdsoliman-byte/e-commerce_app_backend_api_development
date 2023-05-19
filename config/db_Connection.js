const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const db_Connection = async () => {
  try {
    await mongoose.connect(`mongodb://0.0.0.0/${process.env.DB_NAME}`);
    console.log("DB Connection Success Full");
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};
module.exports = db_Connection;
