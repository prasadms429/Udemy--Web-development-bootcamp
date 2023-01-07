// In dicee.html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Dicee</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster" rel="stylesheet">

  </head>
  <body>

    <div class="container">
      <h1>Refresh me</h1>

      <div class="dice">
        <p>Player 1</p>
        <img class="img1" src="images/dice6.png">     // I have written this line of code, else are used code snippet provided by instructor.
      </div>

      <div class="dice">
        <p>Player 2</p>
        <img class="img2" src="images/dice6.png">    // I have written this line of code, else are used code snippet provided by instructor.
      </div>

    </div>

  <script src="index.js" charset="utf-8"></script>    // I have written this line of code, else are used code snippet provided by instructor.
  </body>

  <footer>
    www 🎲 App Brewery 🎲 com
  </footer>
</html>



// In index.js ( Complete javascript code is written by me. )  This is the code to generate random dice number for two players and determine who is winner based on their random result.
var randomNumber1 = Math.floor(Math.random()*6)+1;      // This code will give random number between 1-6.
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");   // This code will give dice images between images/dice1.png - images/dice6.png and Another way of writting this line of code is= document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");   // Another way of writting this line of code is= document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

function winnerOfGame(){
    if(randomNumber1 < randomNumber2){
      return "Player2 wins!🚩";
    }
    else if(randomNumber1 > randomNumber2){
      return "🚩Player1 wins!";
    }
    else{
      return "draw";
    }
}

document.querySelector("h1").innerHTML = winnerOfGame();


// withought using function we can write above 44 line to 56 line of code like this as below

// if(randomNumber1 < randomNumber2){
//   document.querySelector("h1").innerHTML = "Player2 wins!🚩";
// }
// else if(randomNumber1 > randomNumber2){
//   document.querySelector("h1").innerHTML = "🚩Player1 wins!";
// }
// else{
//   document.querySelector("h1").innerHTML = "draw";
// }



// In styles.css ( This code is completly provided by instructor )
.container {
  width: 70%;
  margin: auto;
  text-align: center;
}

.dice {
  text-align: center;
  display: inline-block;

}

body {
  background-color: #393E46;
}

h1 {
  margin: 30px;
  font-family: 'Lobster', cursive;
  text-shadow: 5px 0 #232931;
  font-size: 8rem;
  color: #4ECCA3;
}

p {
  font-size: 2rem;
  color: #4ECCA3;
  font-family: 'Indie Flower', cursive;
}

img {
  width: 80%;
}

footer {
  margin-top: 5%;
  color: #EEEEEE;
  text-align: center;
  font-family: 'Indie Flower', cursive;
}
