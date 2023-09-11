const mongoose = require("mongoose");

 const bookSchema = new mongoose.Schema(
    {
        book_name:{
            type: String,
            trim: true
        },
        book_author:{
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const Book = mongoose.model("Book",bookSchema);
module.exports = Book;