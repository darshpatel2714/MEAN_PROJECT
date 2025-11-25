const bodyParser = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
const odi_rank = require('../Model/odi_rank');
const router = express.Router()


router.get('/' , async(req,res)=>{
    try{
        const t20 = await odi_rank.find()
        res.status(200).json(t20)
        // console.log(t20);
    }catch(err){
        res.status(404).json({
            mesg : err.mesg
        })
    }
})

module.exports = router
 