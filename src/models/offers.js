const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = Offer = mongoose.model("Offer", offerSchema);
