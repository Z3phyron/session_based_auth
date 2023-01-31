const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  street1: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = Address = mongoose.model("Address", addressSchema);
