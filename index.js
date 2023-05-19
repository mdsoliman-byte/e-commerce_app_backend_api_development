const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db_Connection = require("./config/db_Connection");
dotenv.config();
const PORT = process.env.PORT;
db_Connection();
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// rOUTING
app.use("/api/user", authRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server iS Running ${PORT}`);
});
