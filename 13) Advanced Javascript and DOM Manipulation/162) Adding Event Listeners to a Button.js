//index.html
<script src="index.js" charset="utf-8"></script>    // I added this line of code at the end of body section.

// In index.js
var numberOfDrumButtons = document.querySelectorAll(".drum").length;    // To get total number of drum classes.
for(var i=0;i<numberOfDrumButtons;i++){     // This code is to add click property to all buttons that contains "drum" class.
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){    // "addEventListener" is to do some function when a button is clicked. When a button is clicked then the dummy function, "function()" is get executed.
    alert("I got clicked");                                                     // In the above code "click" is the one type of Event and "function()" is listener.  
  });
}

// // Another way writinng line number 7 code.
// document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);    // we dont use paranthesis for this function "hadleClick" inside "addEventListener". Beacuse, If we use paranthesis "()" with "handleClick" inside "addEventListener", then function get executed before clicking the button and alert message showed up before clicking button.

// function handleClick(){
//     alert("I got clicked");
//   }

For more info refer = "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
