// To play different sounds for different buttons, I have used "switch" statement.
for(var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;  // "this.innerHTML" gives text inside clicked button.
    switch (buttonInnerHTML) {      // "switch" statement works as railway switch to change track.  same as it takes the code to different track depending on the value of variable. Inside paranthesis of switch statement we may take experession or thing that we going to switch on.
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default:        // If anything is clicked other than w,a,s,d,j,k,l then this code will execute.
        console.log(buttonInnerHTML);
    }
  });
}
