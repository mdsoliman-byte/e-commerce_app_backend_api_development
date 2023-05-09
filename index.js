const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db_Connection = require("./config/db_Connection");
dotenv.config();
const PORT = process.env.PORT;
db_Connection()
app.use("/", (req, res) => {
  res.send("Hello im from server ");
});

app.listen(PORT, () => {
  console.log(`Server iS Running ${PORT}`);
});
 
