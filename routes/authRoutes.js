const express = require("express");
const router = express.Router();
const {
  createUser,
  logInUser,
  getAllUser,
  getAUser,
  deleteAUser,
} = require("../controller/userController");

router.post("/register", createUser);
router.get("/loginuser", logInUser);
router.get("/getalluser", getAllUser);
router.get("/getauser/:id", getAUser);
router.delete("/deleteauser/:id", deleteAUser);

module.exports = router;
