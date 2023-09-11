const Joi = require("joi");

/** create subchildcategory */
const createsubchildCategory = {
  body: Joi.object().keys({
    sub_child_category_name: Joi.string().required().trim(),
    sub_child_category_desc: Joi.string().required().trim(),
    Subcategory: Joi.string().required().trim(),
  }),
};

module.exports = {
    createsubchildCategory
}