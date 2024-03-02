const mongoose = require('mongoose')
const userShema=mongoose.Schema ({
    username:{
        type:String,
        required:true,

    },

    password:{
        type:String,
        required:true,
    }
})

module.exports = User = mongoose.model('User',userShema)