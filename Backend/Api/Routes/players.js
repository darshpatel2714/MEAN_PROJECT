const express = require("express");
const Players = require("../Model/players_data");
const { default: mongoose } = require("mongoose");

const router = express.Router();

// GET Request All Players data
router.get("/", async (req, res) => {
  try {
    const data = await Players.find();
    res.json(data);
    // console.log(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

});

// POST new record in database
router.post('/', async (req,res)=>{
  const playerData = new Players({
    _id : new mongoose.Types.ObjectId(),
    name : req.body.name,
    role : req.body.role,
    totalRun : req.body.totalRun,
    totalMatch : req.body.totalMatch,
    photo : req.body.photo,
    totalWickets : req.body.totalWickets,
  })
  try{
    const data = await playerData.save()
    res.status(201).json(data)
  }catch(err){
    res.status(500).json({message : err.message})
  }
})

//GET SingleID Data
router.get('/:id',async(req,res)=>{
  const id = req.params.id
  // console.log(id,'player id single');
  
  try{
    const singleData = await Players.findById(id)
    res.status(200).json(singleData)
    
  }catch(err){
    res.status(400).json({message:err.message})
  }
})

// PUT (Update) the record in database.
router.put('/:id', async(req,res)=>{
  const id = req.params.id
  // console.log(id , 'players id');
  try{
    const data = await Players.findByIdAndUpdate(id,req.body)
    res.status(200).json(data)
  }catch(err){
    res.status(404).json({
      message:err.message
    })
  }
})

// Delete ID data
router.delete('/:id' , async(req,res)=>{
  try{
    const deleteId = await Players.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteId)
  }catch(err){
    res.status(401).json({message:err.message})
  }

})

module.exports = router;
