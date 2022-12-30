var output = [];
function fizzBuzz() {
    for(var count = 1;count<=100;count++){    // conversion of previous "while" loop into "for" loop.
        if(count%3===0 && count%5===0){
        output.push("fizzBuzz");
    }
    else if(count%3===0){
        output.push("fizz");
    }
    else if (count%5===0) {
        output.push("buzz");
    }
    else{
        output.push(count);
    }   
    }
    console.log(output);
}


// For Loops

for(i=0; i<2; i++)  { // In this "i=0" is starting point. "i<2" is ending point. "i++" is the change that we want to make (It may be i++ or i--).
  //Do something      // In for loop it first go to starting point, then checks condition for whether it is true or false. 
}                     // If it is true then it executes code and go till flower brackets and again go to "change" that we included in for loop and executes it.
                      // From second time it wil not go to starting point, i.e initialization i=0. rather than it starts from end condition and checks for condition and executes code, and come back for "change".
                      //  If "end" condition false, then it terminate for loop and go to next part of code.


// When to use "while" and "for" loop
while (something is true) {     // When based on "State", whether it is true or false. Then we use while loop.
  //Do something
}

for (i=0; i<2; i++) {     // When we want to "Iterate" for some values, and do some action for particular times, then we use "for" loop.
  //Do something
}
