const  express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyPaser = require("body-parser")
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book")

app.use(bodyPaser.json({limit : "50mb"}));
app.use(cors());
app.use(morgan("common"));

app.get("/api",(req,res) =>{
    res.status(200).json("hello word")
})

try {
    mongoose.connect('mongodb://127.0.0.1:27017/test')
    console.log("success");
} catch (error) {
    console.log("errror");
    
}
//routes
app.use("/v2/book",bookRoute);
app.use("/v1/author",authorRoute);
app.listen(8000,() =>{
    console.log("Server is running");
})