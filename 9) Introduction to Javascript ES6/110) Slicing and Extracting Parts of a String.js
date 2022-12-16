var name = "Prasad";
name.slice(4,6);      // slice is used to take only specific characters that we want from string.

// This code is to give an alert, with only 140 characters or below. If paragraph exceds more than 140 characters, then it will cut those characters automatically and display only 140 characters.
var tweet= prompt("Compose your tweet:");   // This is to get input from user.
tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

//This below code is another way of writing above code.
alert(prompt("Compose your tweet:").slice(0,140));
