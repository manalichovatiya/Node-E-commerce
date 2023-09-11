const mongoose = require("mongoose");
const orderDetailsSchema = new mongoose.Schema(
    {
        price : {
            type : Number,
            trim : true,
        },
        quantity : {
            type : Number,
            trim : true,
        },
       // 2 ref order id , product id
        product_id : {
            type : mongoose.Types.ObjectId,
            ref : "Product"
        },
        Order_id : {
            type : mongoose.Types.ObjectId,
            ref : "Order"
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);
const OrderDetails = mongoose.model("OrderDetails",orderDetailsSchema);
module.exports = OrderDetails;