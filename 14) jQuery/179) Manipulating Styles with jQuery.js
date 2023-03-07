// In index.js of "jQuery" folder

// $("h1").css("color","green");      // To manipulate css style with html element. This code will change color of h1 element to green.

// console.log($("h1").css("color"));     // To know the color property of h1 element, we use this line of code.
console.log($("h1").css("font-size"));

$("h1").css("font-size","5rem");          // To change font-size of h1 to 5rem.

$("h1").addClass("big-title margin-50");    // This will add class property to h1 element.

// $("h1").removeClass("big-title");    // To remove class property from h1 element.


// In styles.css
.big-title{
  font-size: 10rem;
  color: yellow;
  font-family: cursive;
}

.margin-50{
  margin: 50px;
}


// In command line
$("h1").hasClass("big-title");    // To know whether, h1 has this class or not.
true
