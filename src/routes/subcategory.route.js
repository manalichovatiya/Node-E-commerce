const express = require("express");
const { subcategoryValidation } = require("../validations");
const { subcategoryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create subcategory */
router.post(
  "/create-subcategory",
  validate(subcategoryValidation.createsubCategory),
  subcategoryController.createsubCategory
);

/** subcategory list */
router.get(
  "/list",
  subcategoryController.getsubCategoryList
)

router.delete(
  "/delete/:subcategoryId",
  subcategoryController.deletesubCategory
)

router.put(
  "/update-subcategory/:subcategoryId",
  subcategoryController.updatesubCategory
)

module.exports = router;