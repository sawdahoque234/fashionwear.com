import connectDB from "../../../middleware/mongoose";

import Product from "../../../models/product";
const handler = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

export default connectDB(handler);
