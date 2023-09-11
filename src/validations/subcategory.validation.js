const Joi = require("joi");

/** create subcategory */
const createsubCategory = {
  body: Joi.object().keys({
    sub_category_name: Joi.string().required().trim(),
    sub_category_desc: Joi.string().required().trim(),
    category: Joi.string().required().trim(),
  }),
};

module.exports = {
    createsubCategory
}