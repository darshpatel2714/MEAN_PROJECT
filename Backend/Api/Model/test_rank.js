const mongoose = require('mongoose')

const Test_Rank = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    position : {type:Number , require:true},
    photo : {type:String , require:true},
    pName : {type:String , require:true},
    country : {type:String , require:true},
    rating : {type:Number , require:true},
})

module.exports = mongoose.model('test',Test_Rank)