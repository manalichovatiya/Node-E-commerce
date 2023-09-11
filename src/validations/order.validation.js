const Joi = require("joi");

/** create  */
const createOrder = {
  body: Joi.object().keys({
    ammount: Joi.number().required(),
    order_address: Joi.string().required().trim(),
    order_email: Joi.string().required().trim(),
    order_date: Joi.string().required().trim(),
    User_id: Joi.string().required(),
  }),
};

module.exports = {
    createOrder
}