const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    year : {
        type : Number,
        required : true
    },
    books : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Book"
        },
    ]
})

const bookSchema = new mongoose.Schema({
    name :{
        type: String,
        require:true
    },
    publishedDate : {
        type : String,
    },
    genres : {
        type : [String]
    },
    //_id : 111111
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Author"
    },
});

let Author = mongoose.model("Author",authorSchema);
let Book  = mongoose.model("Book" , bookSchema);
module.exports = {Book,Author};

