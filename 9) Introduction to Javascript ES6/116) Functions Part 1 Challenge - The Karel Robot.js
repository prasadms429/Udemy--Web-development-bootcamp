// open "http://stanford.edu/~cpiech/karel/ide.html" this website to instruct robot to do some actions. Select world 5x5, and Reference to know more about different commands.

// This is the code to move robot to top right corner from bottom left corner.
function main(){
   moveFourTimes();
   turnLeft();
   moveFourTimes();
}

function moveFourTimes(){
   move();
   move();
   move();
   move();
}


// This program is to get diagonal boxes.
function main(){
   moveDiagonal();
   moveDiagonal();
   moveDiagonal();
   moveDiagonal();
   putBeeper();
}

function moveDiagonal(){
   putBeeper();
   turnLeft();
   move();
   turnRight();
   move();
}


// This program is to get Chess box type interface.
function main(){
   //your code here
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
   beepersRight();
}

function beepersRight(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function beepersLeft(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

function goUpTurnLeft(){
   turnLeft();
   move();
   turnLeft();
}

function goUpTurnRight(){
   turnRight();
   move();
   turnRight();
}

// By using functions, I have reduced repeated lines of code and I'm able to reuse code.
