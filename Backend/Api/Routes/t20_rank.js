const bodyParser = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
const t20_rank = require('../Model/t20_rank');
const router = express.Router()


router.get('/' , async(req,res)=>{
    try{
        const t20 = await t20_rank.find()
        res.status(200).json(t20)
    }catch(err){
        res.status(404).json({
            mesg : err.mesg
        })
    }
})

module.exports = router
 