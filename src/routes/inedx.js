const express = require("express");
const bookRoute = require("./book.route");
const mobileRoute = require("./mobile.route");
const categoryRoute = require("./category.route");
const orderRoute = require("./order.route");
const orderdetailsRoute = require("./orderdetails.route");
const productRoute = require("./product.route");
const userRoute = require("./user.route");

const router = express.Router();

router.use("/book" , bookRoute);
router.use("/mobile" , mobileRoute);
router.use("/category" , categoryRoute);
router.use("/order" , orderRoute);
router.use("/orderdetails" , orderdetailsRoute);
router.use("/product" , productRoute);
router.use("/user" , userRoute);

module.exports = router;