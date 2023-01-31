const User = require("../models/user");
const { sendCookie } = require("../utils/sendCookie");
const asyncHandler = require("express-async-handler");
const { validateSignUp, validateSignIn } = require("../helpers/userValidator");

const SignUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  // Validate data before creating a user
  const { error } = validateSignUp(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res
      .status(400)
      .json({ error: `Error: user with email ${email} already exists!!!` });
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    phone,
  });

  sendCookie(user, req, res);
});

const SignIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate data before logging in
  const { error } = validateSignIn(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  }

  const user = await User.findOne({ email });

  if (!user) {
    res
      .status(400)
      .json({ error: `Error: no user with email ${email} found!!!` });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    res.status(400).json({ error: "Error: incorrect password" });
  }

  sendCookie(user, req, res);
});

// @desc    Refresh user token
// @route   POST /api/auth/refresh
// @access  Public
const RefreshToken = asyncHandler(async (req, res, next) => {
  console.log(req.cookies.jwt);
  const refreshToken = req.cookies.jwt;
  try {
    // const { refreshToken } = req.cookie;
    if (!refreshToken) throw createHttpError.BadRequest();
    const userId = await verifyRefreshToken(refreshToken);
    const accToken = await signAccessToken(userId);
    const refToken = await signRefreshToken(userId);

    // res.send({ accToken, refToken });
    res.send({
      accessToken: accToken,
    });
  } catch (error) {
    next(error);
  }
});

// @desc    get preloaded user info
// @route   POST /api/auth/info
// @access  Public
const GetUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  console.log(email);

  try {
    let user = await User.findOne({ email: email }).select(
      "-password -__v -createdAt -updatedAt"
    );
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

// @desc    get user info
// @route   GET /api/auth/me
// @access  Private
const GetMe = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  // console.log(userId)

  try {
    let user = await User.findById(userId).select(
      "-password -__v -createdAt -updatedAt"
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const isAuth = asyncHandler(async (req, res) => {
  const { user } = req.session;

  if (user) {
    res.status(200).json({
      auth: true,
      message: "signed in!!!",
      user,
    });
  } else {
    res.status(401).json({
      auth: false,
      message: "not signed in!!!",
    });
  }
});

const SignOut = asyncHandler(async (req, res) => {
  res.clearCookie("refreshToken");
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Failed to logout",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfully logged out",
      });
    }
  });
});

module.exports = {
  SignUp,
  SignIn,
  GetMe,
  GetUser,
  RefreshToken,
  SignOut,
};
