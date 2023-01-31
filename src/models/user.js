const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const HttpError = require("http-errors");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  profile_pic: {
    type: String,
  },
  addresses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  wishlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw HttpError.Conflict("Error: incorrect password");
  }
};

module.exports = User = mongoose.model("User", userSchema);
