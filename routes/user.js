const express=require('express');
const userRouter=express.Router();
const bcrypt = require('bcryptjs');
const User=require('../models/User');

userRouter.post('/signup',async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=new User ({username,password})
        await user.save();
        res.status(201).send("user saved")
    }catch(err){
        res.status(400).send(err.message)
    }
});


userRouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }); 

        if (!user) {
            return res.status(404).send("User not found");
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).send("Invalid password");
        }

        res.status(200).send(`Login successful for user: ${user.username}`);
    } catch (err) {
        res.status(400).send(err.message);
    }
});


/** 
 userRouter('/login',async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user = await User.findOne({username});

        if(!user){
            return res.status(404).send("user not found");
        }

        const validPassword =await bcrypt.compare(password,user.password);
        if(!validPassword){
            return res.status(400).send("invalid password ");

        }
        res.status(200).send("login successful");

    }catch (err){
        res.status(400).send(err.message);
    }
});
*/
module.exports=userRouter;

