const { Subcategory } = require("../models");

// subcategory
const createsubCategory = async (reqBody) => {
  return Subcategory.create(reqBody);
};

// Get subcategory list
const getsubCategoryList = async () => {
    return Subcategory.find().populate("category");
};

// Get subCategory by name
const getsubCategoryByName = async (subcategory_name) => {
  return Subcategory.findOne({ subcategory_name });
};

// Get subCategory details by id
const getsubCategoryById = async (subcategoryId) => {
  return Subcategory.findById(subcategoryId);
};

// update subCategory
const updateDetails = async (subcategoryId, reqBody) => {
  return Subcategory.findByIdAndUpdate(subcategoryId, { $set: reqBody });
};

// Delete user
const deletesubCategory = async (subcategoryId) => {
  return Subcategory.findByIdAndDelete(subcategoryId);
};

module.exports = {
    createsubCategory,
    getsubCategoryList,
    getsubCategoryByName,
    getsubCategoryById,
    updateDetails,
    deletesubCategory
}