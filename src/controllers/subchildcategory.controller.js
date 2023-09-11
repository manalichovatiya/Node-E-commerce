const { subchildcategoryService } = require("../services");

/** create subchildcategory */
const createsubchildCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subchildcategory = await subchildcategoryService.createsubchildCategory(reqBody);
    if (!subchildcategory) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "subchildCategory create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get subchildcategory list */
const getsubchildCategoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { subchildCategory_name: { $regex: search, $options: "i" } },
        { subchildcategory_description : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await subchildcategoryService.getsubchildCategoryList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get subchildcategory list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete subchildcategory */
const deletesubchildCategory = async (req, res) => {
  try {
    const subchildcategoryId = req.params.subchildcategoryId;
    const subchildcategoryExists = await subchildcategoryService.getsubchildCategoryById(subchildcategoryId);
    if (!subchildcategoryExists) {
      throw new Error("subchildCategory not found!");
    }
    await subchildcategoryService.deletesubchildCategory(subchildcategoryId);

    res.status(200).json({
      success: true,
      message: "subchildCategory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update subchildcategory */
const updatesubchildCategory = async (req, res) => {
  try {
    const reqBody = req.body;
    const subchildcategoryId = req.params.busubchildcategoryId;
    const subchildcategoryExists = await subchildcategoryService.getsubchildCategoryById(subchildcategoryId);
    if (!subchildcategoryExists) {
      throw new Error("subchildCategory not found!");
    }
    await subchildcategoryService.updateDetails(subchildcategoryId,reqBody);

    res.status(200).json({
      success: true,
      message: "subchildCategory update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createsubchildCategory,
  getsubchildCategoryList,
  deletesubchildCategory,
  updatesubchildCategory
};