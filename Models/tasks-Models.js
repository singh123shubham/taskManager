const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[50,'name con not be more than 20 character']
    },
    completed:{
        type:Boolean,
        default:false
    }
})


 module.exports = mongoose.model('Task',TaskSchema)