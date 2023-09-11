const mongoose = require("mongoose");
const subchildcategorySchema = new mongoose.Schema(
    {
        sub_child_category_name : {
            type : String,
            trim : true
        },
        sub_child_category_desc : {
            type : String,
            trim : true
        },
        Subcategory : {
            type : mongoose.Types.ObjectId,
            ref : "Subcategory"
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

const Subchildcategory = mongoose.model("Subchildcategory" , subchildcategorySchema);
module.exports = Subchildcategory;