const User = require("../models/userModel");
const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // create new user
    const newUser = await User.create(req.body );
    res.send({success: true , message : "User Create Success"});
  } else {
    // user already exist
    res.json({
      msg: "User Already Exist ",
      success: false,
    });
  }
};

module.exports = { createUser };
