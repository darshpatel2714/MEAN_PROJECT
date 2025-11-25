const express = require("express");
const LiveScore = require("../Model/liveScore");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/", async (req, res) => {
    // res.send('Hello server')
  try {
    const ls = await LiveScore.find();
    res.status(200).json(ls);
    // console.log(ls);
  } catch (err) {
    res.status(404).json({ mesg: err.mesg });
  }
});

module.exports = router
