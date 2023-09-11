const bookService = require("../services/book.service");

const createBooklist = async (req,res) => {
    try {
        const reqBody = req.body;

        const book = await bookService.createBook(reqBody);

        res.status(200).json({
          success: true,
          message: "Book list create successfully!",
          data: { book },
        });
      } catch (error) {
        res.status(400).json({ success: false, message:  error.message});
      }
};

const getBookList = async (req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};
            const bookList = await bookService.getbooklist(filter,options);
            res.status(200).json({
              success: true,
              message: "Book list dispatch successfully!",
              data:bookList
            });
        } catch (error) {
          res.status(400).json({ success: false, message:  error.message});
        }
};

module.exports = {
    createBooklist,
    getBookList
}