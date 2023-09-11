const { orderdetailsService } = require("../services");

/** create orderdetails */
const createOrderdetails = async (req, res) => {
  try {
    const reqBody = req.body;
    const orderdetails = await orderdetailsService.createOrderdetails(reqBody);
    if (!orderdetails) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "orderdetails create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get orderdetails list */
const getOrderdetailsList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { price: { $regex: search, $options: "i" } },
        { quantity : { $regex: search, $options: "i" } },
      ];
    }
    const getList = await orderdetailsService.getOrderdetailsList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get orderdetails list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete orderdetails */
const deleteOrderdetails = async (req, res) => {
  try {
    const orderdetailsId = req.params.orderdetailsId;
    const orderdetailsExists = await orderdetailsService.getOrderdetailsById(orderdetailsId);
    if (!orderdetailsExists) {
      throw new Error("orderdetails not found!");
    }
    await orderdetailsService.deleteOrderdetails(orderdetailsId);

    res.status(200).json({
      success: true,
      message: "orderdetails delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Update orderdetails */
const updateOrderdetails = async (req, res) => {
  try {
    const reqBody = req.body;
    const orderdetailsId = req.params.buorderdetailsId;
    const orderdetailsExists = await orderdetailsService.getOrderdetailsById(orderdetailsId);
    if (!orderdetailsExists) {
      throw new Error("orderdetails not found!");
    }
    await orderdetailsService.updateDetails(orderdetailsId,reqBody);

    res.status(200).json({
      success: true,
      message: "orderdetails update successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createOrderdetails,
  getOrderdetailsList,
  deleteOrderdetails,
  updateOrderdetails
};