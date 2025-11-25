const express = require('express')
const mongoose = require('mongoose')
const pointTable = require('../Model/pointTable')
const router = express.Router()

router.get('/' , async(req,res)=>{
    try{
        const pointT = await pointTable.find()
        res.status(200).json(pointT)
    }catch(err){
        res.status(404).json({mesg : err.mesg})
    }
})

module.exports = router