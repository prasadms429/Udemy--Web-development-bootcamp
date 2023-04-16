// Always follow this steps, while creating server for website.
// In hyper
cd "E:\Web development"
mkdir Calculator
cd Calculator
touch calculator.js
npm init
atom .
npm install express

// In atom
const express = require('express');
const app = express();

app.get('/',function(req,res){
  res.send("Hello world");
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});

// In hyper
nodemon calculator.js  // nodemon full form is node monitor.
