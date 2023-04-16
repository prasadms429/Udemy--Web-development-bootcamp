// In hyper
touch index.html

// In atom index.html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Calculator</title>
  </head>
  <body>
    <h1>Calculator</h1>
    <form action="index.html" method="post">
      <input type="text" name="num1" placeholder="First Number">      // "placeholder" is used to uniquely identify input.
      <input type="text" name="num2" placeholder="Second Number">
      <button type="submit" name="submit">Calculate</button>
    </form>
  </body>
</html>

// In atom calculator.js
// This is used to send full html form into our browser, when it is requested.
app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");    // "__dirname" gives location of current file, irrespective of whether it is hosted on cloud or it is on different computer or Remote location.
});                                           // If someone else use my website then for them file location differs. So, we use this methodology.

// In hyper
nodemon calculator.js

// For more info refer this
https://expressjs.com/en/5x/api.html#res.send
(go to "API Reference")
