// In index.js
for(var i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var audio = new Audio('sounds/tom-1.mp3');        // To play a sound, when a button is clicked. In this we created new "Audio" object and assigned it to "audio" variable. Inside of "Audio" object we give path of sound file.
      audio.play();         // The "play()" method, plays sound.
    });
}

document.querySelectorAll(".drum")[i].addEventListener("click",function(){ // "this" is basically the identity of button that triggered EventListener.
    console.log(this.innerHTML);     // when, I click specific button then, text contained in that button will be logged to console.
  });

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    this.style.color="white";       // To change color of clicked button to white.
  });

// In styles.css
.w {          // To change background image of drum buttons, we use below line of code.
  background-image: url(images/tom1.png);       
}

.a {
  background-image: url(images/tom2.png);
}

.s {
  background-image: url(images/tom3.png);
}

.d {
  background-image: url(images/tom4.png);
}

.j {
  background-image: url(images/snare.png);
}

.k {
  background-image: url(images/crash.png);
}

.l {
background-image: url(images/kick.png);
}
