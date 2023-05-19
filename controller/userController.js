const { genrateToken } = require("../config/jwtToken");
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
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: genrateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid User Email Or Password ");
  }
});
// get all user
const getAllUser = asyncHandler(async (req, res) => {
  try {
    const getuser = await User.find();
    res.send(getuser);
  } catch (error) {
    throw new Error("User Not Found ");
  }
});
// get a singel user
const getAUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findAUser = await User.findById(id);
    res.json({
      firstname: findAUser?.firstname,
      lastname: findAUser?.lastname,
      email: findAUser?.email,
      mobile: findAUser?.mobile,
    });
  } catch (error) {
    throw new Error("User Not Found ");
  }
});
// delete a single user
const deleteAUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletUser = await User.findByIdAndDelete(id);
    if (!deletUser) {
      res.json({
        message: "User NOT Exist",
      });
    } else {
      res.json({
        firstname: deletUser?.firstname,
        lastname: deletUser?.lastname,
        email: deletUser?.email,
        mobile: deletUser?.mobile,
      });
    }
  } catch (error) {
    throw new Error("User Not Found ");
  }
});
const updateAUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // const aUser = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        firstname: req.body?.firstname,
        lastname: req.body?.lastname,
        email: req.body?.email,
        mobile: req.body?.mobile,
      },
      { new: true }
    );
    res.json({
      firstname: req.body?.firstname,
      lastname: req.body?.lastname,
      email: req.body?.email,
      mobile: req.body?.mobile,
    });
  } catch (error) {
    throw new Error("User Not Found ");
  }
});
module.exports = {
  createUser,
  logInUser,
  getAllUser,
  getAUser,
  deleteAUser,
  updateAUser,
};
