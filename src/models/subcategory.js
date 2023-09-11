const mongoose = require("mongoose");
const subcategorySchema = new mongoose.Schema(
    {
        sub_category_name : {
            type : String,
            trim : true
        },
        sub_category_desc : {
            type : String,
            trim : true
        },
        category : {
            type : mongoose.Types.ObjectId,
            ref : "Category"
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

const Subcategory = mongoose.model("Subcategory" , subcategorySchema);
module.exports = Subcategory;