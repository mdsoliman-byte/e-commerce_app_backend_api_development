const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
// create single user token
const genrateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};
module.exports = { genrateToken };
