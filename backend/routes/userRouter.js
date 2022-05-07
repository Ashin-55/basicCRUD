const router = require("express").Router();

const User = require("../model/userModel");
const Product = require("../model/productModel");


router.get("/allProducts", async (req, res) => {
  try {
    const produts = await Product.find();
    console.log(produts);
    res.status(200).json(produts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (user) {
      if (user.password == password) {
        console.log("login successfull");
        res.status(200).json({ message: "login sccessfull",userInfo:user._id });
      } else {
        console.log("invalid password");
        res.status(401).json({ message: "password is incorrect" });
      }
    } else {
      console.log("user Not found");
      res.status(400).json({ message: "user not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
});

router.post("/register", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const userExists = await User.findOne({ email: data.email });
    if (userExists) {
      console.log("email id used");
      res.status(400).json({ message: "Email id allready used" });
    } else {
      const result = await User.create(data);
      if (result) {
        console.log("user Created");
        res
          .status(201)
          .json({ message: "Registration is successfull", status: "ok" });
      } else {
        res.status(500).json({ message: "internal server error ",status:"ok" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "user not created check the server " });
  }
});

router.post("/addProduct", async (req, res) => {
  const { name, price, quantity, category } = req.body;
  try {
    const productPresent = await Product.findOne({ name });
    if (productPresent) {
      console.log("product present");
      res.status(400).json({ message: "product is present" });
    } else {
      const result = await Product.create(req.body);
      console.log(result)
      res.status(200).json({ message: "product is created", status: "ok" });
    }
  } catch (error) {
    console.log(error);
    rmSync.status(500).json({ message: "internal server error" });
  }
});

module.exports = router;
