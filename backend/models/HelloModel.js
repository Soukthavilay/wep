const mongoose = require('mongoose');
const helloModel = new mongoose.Schema({
    name:{
        type:String
    }
})


module.exports = mongoose.model("Hello",helloModel);