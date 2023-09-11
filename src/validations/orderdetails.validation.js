const Joi = require("joi");

/** create OrderDetails */
const createOrderDetails = {
    body: Joi.object().keys({
        price: Joi.number().required(),
        quantity: Joi.number().required(),
        product_id : Joi.string().trim(),
        Order_id : Joi.string().trim()
   }),
};

module.exports = {
    createOrderDetails
}