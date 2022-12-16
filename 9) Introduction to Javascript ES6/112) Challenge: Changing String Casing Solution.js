// var name = "Prasad";
// name.toUpperCase();          // To convert all characters of variable to Upper case.
// name=name.toUpperCase();
// name=name.toLowerCase();


// This program is to display greeting message, by taking name from prompt and displaying first character of name in upper case and remaining characters in lower case.

//1 Create a var that stores the name that user enters via prompt.
var name = prompt("What is your name?");

//2 Capitalise the first letter of their name.

//a isolate the first char
var firstChar = name.slice(0,1);

//b Turn the first char to upper case
firstChar = firstChar.toUpperCase();

//c Isolate the rest of the name
var restChar = name.slice(1,name.length);

//d Change the rest of the name to lower case
restChar = restChar.toLowerCase();

//e concatenate the first char with the rest of the char
name= firstChar+restChar;

//3 we use the capitalised version of their name to greet the using an alert.
alert("Hello, "+name);

// Hello, Angela
