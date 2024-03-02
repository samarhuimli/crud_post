const express =require ('express');
const mongoose=require("mongoose");
const dotenv=require("dotenv")
const User=require('./routes/user')
const post=require('./routes/post')
const app=express();
dotenv.config();

const URL_MongoDb=process.env.URL_MONGOOSE;
const PORT = process.env.PORT || 3000;


mongoose.connect(URL_MongoDb).then(()=>{
    console.log('connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`server is running on PORT : ${PORT}`)
    })
}).catch((err)=>{
    console.log('Error connecting to mongodb',err.message)
})

    app.listen("8020",()=>{
        console.log("listening on port 8020");
    })

    