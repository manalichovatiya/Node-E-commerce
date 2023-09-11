const { Subchildcategory } = require("../models");

// subchildcategory
const createsubchildCategory = async (reqBody) => {
  return Subchildcategory.create(reqBody);
};

// Get subchildcategory list
const getsubchildCategoryList = async (filter,options) => {
    return Subchildcategory.find().populate("Subcategory");
};

// Get subchildCategory by name
const getsubchildCategoryByName = async (subchildcategory_name) => {
  return Subchildcategory.findOne({ subchildcategory_name });
};

// Get subchildCategory details by id
const getsubchildCategoryById = async (subchildcategoryId) => {
  return Subchildcategory.findById(subchildcategoryId);
};

// update subchildCategory
const updateDetails = async (subchildcategoryId, reqBody) => {
  return Subchildcategory.findByIdAndUpdate(subchildcategoryId, { $set: reqBody });
};

// Delete user
const deletesubchildCategory = async (subchildcategoryId) => {
  return Subchildcategory.findByIdAndDelete(subchildcategoryId);
};

module.exports = {
    createsubchildCategory,
    getsubchildCategoryList,
    getsubchildCategoryByName,
    getsubchildCategoryById,
    updateDetails,
    deletesubchildCategory
}