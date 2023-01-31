const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  priceDiscount: {
    type: Number,
    required: true,
  },
  taxFee: {
    type: Number,
    required: true,
  },
  rating: {
    rate: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  reviews: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
    },
  ],
  offer: {
    type: Schema.Types.ObjectId,
    ref: "Offer",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

// const fs = require("fs");

// function generateProductsJSON() {
//   const products = [];
//   const categories = ["Electronics", "Fashion", "Home", "Outdoors", "Toys"];
//   const adjectives = [
//     "Stylish",
//     "Comfortable",
//     "Durable",
//     "Lightweight",
//     "Affordable",
//   ];
//   const nouns = ["Backpack", "Shirt", "Pants", "Jacket", "Shoes"];

//   for (let i = 1; i <= 50; i++) {
//     const title = `${
//       adjectives[Math.floor(Math.random() * adjectives.length)]
//     } ${nouns[Math.floor(Math.random() * nouns.length)]}`;
//     const price = Math.floor(Math.random() * 100) + 1;
//     const category = categories[Math.floor(Math.random() * categories.length)];
//     const description = `This is a high-quality ${title} for everyday use.`;
//     const image = `https://via.placeholder.com/150x150?text=${title}`;
//     const slug = title.toLowerCase().replace(/ /g, "-");
//     const priceDiscount = Math.floor(Math.random() * (price - 1) + 1);
//     const taxFee = price * 0.08;
//     const rating = {
//       rate: (Math.random() * (5 - 1) + 1).toFixed(1),
//       count: Math.floor(Math.random() * 500) + 1,
//     };
//     const reviews = [];
//     for (let j = 1; j <= rating.count; j++) {
//       reviews.push({
//         id: j,
//         name: `Reviewer ${j}`,
//         comment: `This is a great ${title}. I highly recommend it!`,
//         rating: Math.floor(Math.random() * 5) + 1,
//       });
//     }
//     const offers = [
//       {
//         id: 1,
//         title: "Free Shipping",
//         description: "Get free shipping on all orders above $50",
//       },
//       {
//         id: 2,
//         title: "10% off",
//         description: "Get 10% off on your first purchase",
//       },
//     ];

//     products.push({
//       id: i,
//       title,
//       price,
//       category,
//       description,
//       image,
//       slug,
//       priceDiscount,
//       taxFee,
//       rating,
//       reviews,
//       offers,
//     });
//   }

//   const jsonData = JSON.stringify(products);
//   fs.writeFileSync("products.json", jsonData);
//   console.log("products.json file created successfully!");
// }

// generateProductsJSON();
