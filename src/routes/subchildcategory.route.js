const express = require("express");
const { subchildcategoryValidation } = require("../validations");
const { subchildcategoryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create subchildcategory */
router.post(
  "/create-subchildcategory",
  validate(subchildcategoryValidation.createsubchildCategory),
  subchildcategoryController.createsubchildCategory
);

/** subchildcategory list */
router.get(
  "/list",
  subchildcategoryController.getsubchildCategoryList
)

router.delete(
  "/delete/:subchildcategoryId",
  subchildcategoryController.deletesubchildCategory
)

router.put(
  "/update-subchildcategory/:subchildcategoryId",
  subchildcategoryController.updatesubchildCategory
)

module.exports = router;