const mongoose = require('mongoose')

const liveScoreSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    match : {type:String , require:true},
    venue : {type:String , require:true},
    team1 : {type:String , require:true},
    score1 : {type:String , require:true},
    team2 : {type:String , require:true},
    score2 : {type:String , require:true},
    toss : {type:String , require:true},
    result : {type:String , require:true}
}) 
module.exports = mongoose.model('livescore',liveScoreSchema)