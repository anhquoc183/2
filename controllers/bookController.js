const {Author,Book} = require("../model/model")

const bookController = {

    addBook :  async(req,res) => {
        try {
            const newBook = new Book (req.body);
            const saveBook = await newBook.save();
            if (req.body.author){
                const author = Author.findById(req.body.author);
            console.log("rqq: ", req.body.author);
                console.log("author",author);
                await author.updateOne({$push: {books : saveBook._id}});
            }
            res.status(200).json(saveBook)
        } catch (error) {
            res.status(500).json(err);
          
        }
    },
    getABook : async(req,res) => {
        try {
            const getBook = await Book.find();
            res.status(200).json(getBook);
        } catch (error) {
            res.status(500).json(err);
        }

    },
    getOneBook : async(req,res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        } catch (error) {
            res.status(200).json(err)
            
        }
    },
    updateBook : async(req,res) => {
        try {
        const book = await Book.findById(req.params.id);
        await book.updateOne({$set : req.body});     
        res.status(200).json("Succes");
        } catch (error) {
            res.status(500).json(err)
        }
    },
    deleteBook : async (req,res) => {
        try {
            await Author.updateMany({books : req.params.id},{$pull : {books: req.params.id}})
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Success")
        } catch (error) {
            res.status(500).json(err);
         }
    },

}

module.exports = bookController;