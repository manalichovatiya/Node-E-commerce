const { OrderDetails } = require("../models");

// Create OrderDetails
const createOrderdetails = async (reqBody) => {
  return OrderDetails.create(reqBody);
};

// Get OrderDetails list
const getOrderdetailsList = async (filter, options) => {
  return OrderDetails.find().populate("Order_id");
  // return OrderDetails.find({$or:[{is_active:false}]});
};

// Get OrderDetails details by id
const getOrderdetailsById = async (orderdetailsId) => {
  return OrderDetails.findById(orderdetailsId);
};

// Delete OrderDetails
const deleteOrderdetails = async (orderdetailsId) => {
  return OrderDetails.findByIdAndDelete(orderdetailsId);
};

// Update OrderDetails
const updateOrderdetails = async (orderdetailsId,reqBody) => {
  return OrderDetails.findByIdAndUpdate(orderdetailsId,{$set:reqBody});
};
module.exports = {
    createOrderdetails,
    getOrderdetailsList,
    getOrderdetailsById,
    deleteOrderdetails,
    updateOrderdetails
};