const express = require("express");
const {
  SignUp,
  SignIn,
  SignOut,
  RefreshToken,
  GetUser,
  GetMe,
} = require("../controllers/userCtrl");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

router.route("/auth/sign-up").post(SignUp);
router.route("/auth/sign-in").post(SignIn);
router.route("/auth/sign-out").get(SignOut);
router.route("/auth/refresh").get(RefreshToken);

router.route("/info").post(GetUser);

router.use(verifyToken);

router.route("/me").get(GetMe);

module.exports = router;
