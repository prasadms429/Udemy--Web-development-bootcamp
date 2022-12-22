// Code for Random number generation between 1 and 6. (For dice)
var n = Math.random();                // "Math.random()" function generate a value between 0 - 0.9999999999999999 ( 16 decimal place )
n = n*6;
n = Math.floor(n) + 1;    // we are adding 1 because, withought adding it, it will give values between 0 and 5. For dice we need value between 1 and 6. So, we add this.
console.log(n);

// Code to get loveScore between two person.
prompt("Enter your name:");
prompt("Enter your their name:");
var loveScore = Math.random();
loveScore = loveScore*100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is "+loveScore+"%");
