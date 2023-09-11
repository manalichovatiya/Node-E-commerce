const express = require("express");
const { orderdetailsValidation } = require("../validations");
const { orderdetailsController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create orderdetails */
router.post(
  "/create-orderdetails",
  validate(orderdetailsValidation.createOrderDetails),
  orderdetailsController.createOrderdetails
);

/** orderdetails list */
router.get(
  "/list",
  orderdetailsController.getOrderdetailsList
)

router.delete(
  "/delete/:orderdetailsId",
  orderdetailsController.deleteOrderdetails
)

router.put(
  "/update-orderdetails/:orderdetailsId",
  orderdetailsController.updateOrderdetails
)

module.exports = router;