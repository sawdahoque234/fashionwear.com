import connectDB from "../../../middleware/mongoose";
import Product from "../../../models/product";

const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
      await p.save();
    }
    res.status(200).json({ success: "true" });
  } else {
    res.status(400).json({ error: "Something Went Wrong!!!" });
  }
};

export default connectDB(handler);
