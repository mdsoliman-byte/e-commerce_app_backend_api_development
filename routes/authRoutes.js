const express = require("express");
const {
  createUser,
  logInUser,
  getAllUser,
  getAUser,
} = require("../controller/userController");

const router = express.Router();
router.post("/register", createUser);
router.get("/loginuser", logInUser);
router.get("/getalluser", getAllUser);
router.get("/getauser", getAUser);

module.exports = router;
