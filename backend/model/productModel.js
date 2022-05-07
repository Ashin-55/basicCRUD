const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: String },
    quantity: { type: String },
    category: { type: String },
  },
  { timestamps: true, collection: "productCollection" }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
