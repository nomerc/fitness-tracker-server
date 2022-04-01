const express = require("express");
const router = express.Router();
const {
  signUp,
  logIn,
  generateAccessToken,
} = require("../controllers/usersController");

router.route("/").post(signUp);
router.route("/login").post(logIn);
router.route("/me/access-token").post(generateAccessToken);

module.exports = router;
