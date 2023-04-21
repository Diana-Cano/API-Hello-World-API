// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

const languageSchema = new Schema({
    name:{type:String, required},
    greeting:{type: String},
    panagram:{type:String},
    filler:{type:String}
})






const Language = mongoose.model('Language', languageSchema)
module.exports=Language




