const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // create new user
    const newUser = await User.create(req.body);
    res.send({ success: true, message: "User Create Success" });
  } else {
    // user already exist
    throw new Error("USER Already Exist");
  }
});

module.exports = { createUser };
 