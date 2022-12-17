var name = "Prasad";   // In programming, Position of characters start from zero.
name.slice(4,6);      // slice is used to take only specific characters that we want from string. In this case start from 4th position and go till 6th position but not include that. It will print only "ad".

// This code is to give an alert, with only 140 characters or below. If paragraph exceds more than 140 characters, then it will cut those characters automatically and give an alert of only 140 characters.
var tweet= prompt("Compose your tweet:");   // This is to get input from user.
tweetUnder140 = tweet.slice(0,140);         // In slice, to count how many characters included, substract upper value from lower value. i.e, 140-0 = 140. In name.slice(4,6), 6-4 = 2.
alert(tweetUnder140);

//This below code is another way of writing above code.
alert(prompt("Compose your tweet:").slice(0,140));
