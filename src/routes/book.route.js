const express = require("express");
const router = express.Router()
const validate = require("../middlewares/validate")
const { bookValidation } = require("../validations")
const { bookController } = require("../controllers")
router.post(
    "/create-book",
    validate(bookValidation.createBookList),
    bookController.createBooklist
    )
router.get(
    "/list",
    bookController.getBookList
)
module.exports = router;