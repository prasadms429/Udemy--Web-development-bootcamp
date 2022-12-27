// fizzbuzz game :
// This program prints sequence of numbers from 1. Also this Program prints "fizz", when a number is divisible by 3 and It prints "buzz", when number is divisible by 5.
// When a number is divisible by both 3 and 5, then it prints "fizzBuzz".

var output = [];
var num = 1;

function fizzBuzz() {
    if(num%3===0 && num%5===0){
        output.push("fizzBuzz");
    }
    else if(num%3===0){
        output.push("fizz");
    }
    else if (num%5===0) {
        output.push("buzz");
    }
    else{
        output.push(num);
    }
    
    num=num+1;

    console.log(output);
}


// Run code and In console enter:
fizzBuzz();
// each time enter this value to get new values.
fizzBuzz();

