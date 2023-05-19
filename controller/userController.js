const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
// create user controller
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
// login user controller
const logInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.send({
      firstname: findUser.firstname,
      lastname: findUser.lastname,
      email: findUser.email,
      mobile: findUser.mobile,
    });
  } else {
    throw new Error("Invalid User Email Or Password ");
  }
});
module.exports = { createUser, logInUser };
