var name = "Prasad";
name.length;              // To count number of characters inside variable, we use this "length" keyword.


// This is twitter code, to count number of characters that we typed and remaing characters length to type.
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written "+tweetCount+" characters, you have "+ (140-tweetCount) + " characters left.");
