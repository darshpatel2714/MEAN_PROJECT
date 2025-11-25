const express = require("express");
const { default: mongoose } = require("mongoose");
const matches = require("../Model/matches");

const router = express.Router();

router.get("/", async (req, res) => {
    // res.send('Hello server 2 ')
  try {
    const ls = await matches.find();
    res.status(200).json(ls);
  } catch (err) {
    res.status(404).json({ mesg: err.mesg });
  }
});

module.exports = router
