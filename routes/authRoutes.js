const express = require("express");
const { createUser, logInUser } = require("../controller/userController");

const router = express.Router();
router.post("/register", createUser);
router.get("/loginuser", logInUser);

module.exports = router;
