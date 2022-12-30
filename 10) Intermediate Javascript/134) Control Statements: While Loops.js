var output = [];
var count = 1;

function fizzBuzz() {
    while(count<=100){                      // To automatically print fizzbuzz for 100 sequence, we use while loop. Otherwise we have to call fizzBuzz() function, each time to add 1 more to sequence.
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
    
    count++;
    }
    
    console.log(output);
}


// This is the program to print song game.
var count = 99;
function beer() {
    while(count>0){       // while loop run untill condition becomes false.
        console.log(count+" bottles of beer on the wall, "+count+" bottles of beer.");
        console.log("Take one down and pass it around, "+(count-1)+" bottles of beer on the wall.");
        count--;
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to store and buy some or more, 99 bottles of beer on the wall.");    
}
