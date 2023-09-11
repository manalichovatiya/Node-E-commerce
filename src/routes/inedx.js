const express = require("express");
const categoryRoute = require("./category.route");
const subcategoryRoute = require("./subcategory.route");
const subchildcategoryRoute = require("./subchildcategory.route");
const cartRoute = require("./cart.route");
const orderRoute = require("./order.route");
const orderdetailsRoute = require("./orderdetails.route");
const productRoute = require("./product.route");
const userRoute = require("./user.route");

const router = express.Router();

router.use("/category" , categoryRoute);
router.use("/subcategory" , subcategoryRoute);
router.use("/subchildcategory" , subchildcategoryRoute);
router.use("/cart" , cartRoute);
router.use("/order" , orderRoute);
router.use("/orderdetails" , orderdetailsRoute);
router.use("/product" , productRoute);
router.use("/user" , userRoute);

module.exports = router;