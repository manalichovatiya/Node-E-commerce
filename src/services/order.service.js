const { Order } = require("../models");

// Create Order
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

// Get Order list
const getOrderList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  return Order.find().populate("User_id");
  // return Order.find({$or:[{is_active:false}]});
};

// Get Order details by id
const getOrderById = async (orderId) => {
  return Order.findById(orderId);
};

// Delete Order
const deleteOrder = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
};

// Update Order
const updateOrder = async (orderId,reqBody) => {
  return Order.findByIdAndUpdate(orderId,{$set:reqBody});
};
module.exports = {
    createOrder,
    getOrderList,
    getOrderById,
    deleteOrder,
    updateOrder
};