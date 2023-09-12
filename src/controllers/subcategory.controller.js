const { subcategoryService } = require("../services");

/** create subcategory */
const createsubCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subcategory = await subcategoryService.createsubCategory(reqBody);
    if (!subcategory) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "subCategory create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get subcategory list */
const getsubCategoryList = async (req, res) => {
  try {
    const getList = await subcategoryService.getsubCategoryList();

    res.status(200).json({
      success: true,
      message: "Get subcategory list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete subcategory */
const deletesubCategory = async (req, res) => {
  try {
    const subcategoryId = req.params.subcategoryId;
    const subcategoryExists = await subcategoryService.getsubCategoryById(subcategoryId);
    if (!subcategoryExists) {
      throw new Error("subCategory not found!");
    }
    await subcategoryService.deletesubCategory(subcategoryId);

    res.status(200).json({
      success: true,
      message: "subCategory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update subcategory */
const updatesubCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subcategoryId = req.params.busubcategoryId;
    const subcategoryExists = await subcategoryService.getsubCategoryById(subcategoryId);
    if (!subcategoryExists) {
      throw new Error("subCategory not found!");
    }
    await subcategoryService.updateDetails(subcategoryId,reqBody);

    res.status(200).json({
      success: true,
      message: "subCategory update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createsubCategory,
  getsubCategoryList,
  deletesubCategory,
  updatesubCategory
};