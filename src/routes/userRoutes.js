const express = require("express");
const {
  register,
  login,
  addSelectedCrypto,
  removeSelectedCrypto,
} = require("../controllers/userController");
const authenticate = require("../middleware/authenticate.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.post("/addSelectedCrypto/:userId", authenticate, addSelectedCrypto);
router.post(
  "/removeSelectedCrypto/:userId",
  authenticate,
  removeSelectedCrypto
);

module.exports = router;
