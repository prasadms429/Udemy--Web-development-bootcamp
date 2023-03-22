// In index.js
$("h1").click(function(){           // when I click on h1 element of website, then h1 color will change to purple.
  $("h1").css("color","purple");
})

for (var i=0; i<5; i++) {       // This block of code to change color of all buttons in a website to purple, when we click on any button. This block of code is basic javascript code, without jquery.
  document.querySelectorAll("button")[i].addEventListner("click",function(){
    document.querySelector("h1").style.color = "purple";
  })
}

$("button").click(function(){       // By using jquery, above block of code is written as simple as this, for same purpose. When I click on any button on website, then it will change color of h1 element to purple.
  $("h1").css("color","purple");
})


// In index.html
<input type="text" name="" value="">      // To add rectangle type box in a website, to receive inputs.

  
// In index.js
$("input").keypress(function(event){    // This will log the key pressed on input into console.
  console.log(event.key);
})

$(document).keypress(function(event){   // If we press key anywhere in the website, also it will log into console.
  console.log(event.key);
})

$(document).keypress(function(event){   // This is to change h1 text to the keypressed on the keyboard.
  $("h1").text(event.key);
})

$("h1").on("mouseover",function(){      // when I take my mouse or cursor on h1, then color of h1 change to purple. "on" method also works same as keypress or click, but it takes two inputs, one is event and another is function.
  $("h1").css("color","purple");
})

// Link to different event's for "on" method
https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
