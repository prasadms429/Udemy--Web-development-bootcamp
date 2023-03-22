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
