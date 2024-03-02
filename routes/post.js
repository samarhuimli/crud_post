const express=require('express');
const mongoose = require('mongoose');
const postRouter = express.Router();
const post =require('../models/Post');
const userRouter = require('./user');



postRouter.get('/posts',async(req,res)=>{
    try{
        const posts =await post.find();
        res.status(200).send(posts);
    }catch(err){
        res.status(400).send(err.message)
    }
});

userRouter.post('/add', async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});


userRouter.put('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});
userRouter.delete('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = postRouter;