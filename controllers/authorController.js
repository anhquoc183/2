const {Author,Book} = require("../model/model")

const authorController = {
    //add 
    addAuthor : async (req,res) => {
        try {
            const  newAuthor  = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(savedAuthor);
        } catch (error) {
            res.status(500).json(err);
            
        }
    },
    getAllAuthor : async (req,res) => {
        try {
            const getAuthor = await Author.find();
            res.status(200).json(getAuthor);
        } catch (error) {
            throw new Error(err)
        }

    },
    getAnAuthor : async (req,res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);   
        } catch (error) {
            res.status(500).json(err);
        }
    },
    updateAuthor : async (req,res) => {
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({$set:req.body })
            res.status(200).json("Success")
        } catch (error) {
            res.status(200).json(err)
        }
    },
    deleteAuthor : async (req,res) => {
        try {
            await Book.updateMany({author : req.params.id},{author : null});
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete Success")
        } catch (error) {
            res.status(500).json(err);
         }
    },
}

module.exports = authorController;