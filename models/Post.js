
const mongoose = require('mongoose')

const postShema =mongoose.Schema({
    contenu:{
        type:String,
        required:true,
    },

    addedAt:{
        type:Date,
        required:true,
    }
});

module.exports = Post = mongoose.model('Post',postShema)