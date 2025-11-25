const bodyParser = require("body-parser");
const express = require("express");
const crypto = require('crypto')
const { default: mongoose } = require("mongoose");
const userLogin = require("../Model/userLogin");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require('path')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router();

const dirName = `${__dirname}/cb1.png`;
const svgData = fs.readFileSync(dirName);

router.get("/", async (req, res) => {
  try {
    const usersLogin = await userLogin.find();
    res.status(200).json(usersLogin);
  } catch (err) {
    res.status(404).json({
      mesg: err.mesg,
    });
  }
});

router.post("/signup", async (req, res) => {
  const {name , email , password} = req.body
  try {
    const existingUser = await userLogin.findOne({email})
    if(existingUser){
      return res.status(400).json({message : "User already exists"})
    }
    
    const newUser = new userLogin({
      name,
      email,
      password
    })
    await newUser.save()
    res.status(201).json({message : 'User created successfully.'})
    
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }

  let htmlContent = ` <html>
      <head>
        <style>
        body {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  .header {
    background-color: #009270;
    padding: 20px;
    text-align: center;
  }
  .content {
    padding: 20px;
  }
  .footer {
    background-color: #f8f8f8;
    padding: 10px;
    text-align: center;
  }
  img.header-image {
    width: 100%;
    max-width: 100px;
    height: auto;
    filter: brightness(0) invert(1);
  }
  i{
    font-family:'Trebuchet MS', sans-serif;
  }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="cid:cricbuzzImage" class="header-image" alt="Header Image">
        </div>
        <div class="content">
          <b>Hello ${req.body.name} ,</b><br>
          <br>
          You have successfully signed up...!<br>
          <i>Welcome to Cricubuzz web and enjoy the websites looks and features.</i>
        </div>
        <div class="footer">
          <p>This is Created by Author : &copy; <i>Aesha Bhavsar❤️</i> 2025🌴</p>
        </div>
      </body>
    </html>`

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
    port: 465,
    auth: {
      user: "yashbhavsar1530@gmail.com",
      pass: "yztcnlnnwrxrwkta",
    },
  });
  
  var info = transporter.sendMail({
    from:'"Cricbuzz 🏏🤾"<yashbhavsar1530@gmail.com>',
    to: req.body.email,
    subject: "Successfully Signup Confirmation Cricbuzz.",
    html: htmlContent,
    attachments: [
      {
        filename: "cb1.png",
        content: svgData,
        contentType: "image/svg+xml",
        cid: "cricbuzzImage",
      },
    ],
  });
  console.log(
    `From Submitted successfully..! Please check ${(await info).messageId}`
  );

});

router.post('/login' , async (req,res)=>{
  const {email,password} = req.body;

  try{
    const user = await userLogin.findOne({email})
    
    if(!user){
      return res.status(400).json({message : 'User not found'})
    }
    // console.log(password,'Enter password');
    // console.log(user.password,'Original DB password');
    
    if(password == user.password){
        res.status(200).json({ msg: "Login success" })
    }else{
      return res.status(401).json({ msg: "Password not match" })
    }

  }
  catch(err){
    res.status(500).json({ message: 'Server error' });
  }
})


module.exports = router;

