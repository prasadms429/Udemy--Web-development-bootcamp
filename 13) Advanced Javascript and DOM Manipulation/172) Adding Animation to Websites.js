// In console of chrome developer tool.
document.querySelector(".w");
<button class=​"w drum">​w​</button>​

document.querySelector(".k");
<button class=​"k drum">​k​</button>​

document.querySelector("h1").classList;
DOMTokenList [value: '']length: 0value: ""[[Prototype]]: DOMTokenList
document.querySelector("h1").classList.add("pressed");
undefined


// In index.js of atom
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){var buttonInnerHTML = this.innerHTML;
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);   // I have added this line of code in this function.
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);           // I have added this line of code in this function.
});

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);   // To select key that is pressed on keyboard or button that is clicked and store it in variable.
  activeButton.classList.add("pressed");    // This is to add "pressed" class to activeButton. "pressed" is defined in css style sheet.

// In google search, "timeout function javascript"
  setTimeout(function(){    // This setTimeout function is to execute input function, after defined time limit. For more info refer "https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout".
    activeButton.classList.remove("pressed");
  },100);     // In this function will execute after 100 miliseconds. To get view of button click animation from above line of code 31 to 32 and button click animation off from line 35 to 38.
}

// In styles.css
.pressed {
  box-shadow: 0 3px 4px 0 #DBEDF3;		// It adds shadow.
  opacity: 0.5;		// "opacity" adds transperancy.
}
