const mongoose = require("mongoose");
const db_Connection = () => {
  try {
  mongoose.connect(`mongodb+srv://mdsoliman:${process.env.DB_PASS}@cluster0.c0ef2cd.mongodb.net/${process.env.DB_NAME}`);
    console.log("DB Connection Success Full");
  } catch (error) {
    // throw new Error(error);
    console.log("DB Error")
  }
};
module.exports = db_Connection;