// Created file called bmiCalculator.html inside calculattor folder
// In hyper
touch bmiCalculator.html

// In bmiCalculator.html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>BMI Calculator</title>
  </head>
  <body>
    <h1>BMI Calculator</h1>
    <form action="/bmicalculator" method="post">
      <input type="text" name="w" placeholder="Weight for BMI">
      <input type="text" name="h" placeholder="Height for BMI">
      <button type="submit" name="submit">Calulate BMI</button>
    </form>

  </body>
</html>

// In calculator.js
app.get('/bmicalculator',function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post('/bmicalculator',function(req,res){
  var weight = Number(req.body.w);
  var height = Number(req.body.h);
  var BMI = weight / (height*height);
  res.send("Your BMI is " + BMI);
})

// In hyper
nodemon calculator.js

// In chrome browser search bar type
localhost:3000/bmicalculator
