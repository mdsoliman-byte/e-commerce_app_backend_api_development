const express = require("express");
const router = express.Router();
const {
  createUser,
  logInUser,
  getAllUser,
  getAUser,
  deleteAUser,
  updateAUser,
} = require("../controller/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");
// User Api SECTION Start ===================
router.post("/register", createUser);
router.get("/loginuser", logInUser);
router.get("/getalluser", getAllUser);
router.get("/getauser/:id", authMiddleware, getAUser);
router.delete("/deleteauser/:id", deleteAUser);
router.put("/updateauser/:id", updateAUser);
module.exports = router;
