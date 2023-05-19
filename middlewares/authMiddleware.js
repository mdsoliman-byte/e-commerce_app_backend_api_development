const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    // get JWT token from your header
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        // Decode JWT Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const users = await User.findById(decoded?.id);
        res.send(users);
        next();
      }
    } catch (error) {
      throw new Error("Not Authorize Token Expired , Please Login Again ");
    }
  } else {
    throw new Error("There Is No Token Attatched ");
  }
});
module.exports = { authMiddleware };
