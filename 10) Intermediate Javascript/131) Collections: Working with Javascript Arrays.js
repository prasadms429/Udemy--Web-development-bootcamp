var a = "Angela";     // We can store only one data inside one variable or We can store similar group of data inside one variable, using an array.
var b = "Jack";

var guestList = ["Angela","Jack","Pam","James","Lara","Jason"];   // This is array, that stores names.
console.log(guestList);         // It will display names.
console.log(guestList.length);  // It will display total number of elements, inside array. That is 6 in this case.
guestList[0];     // It will display, element at position 0. That is "Angela".


// This is the program to allow only the people, who are invited to party. ( In entrance they have to enter their name )
var guestList = ["Angela","Jack","Pam","James","Lara","Jason"];
var guestName=prompt("What is your name:");
if(guestList.includes(guestName)){        // "guestList.includes(guestName)" checks whether guestName is their in array or not. ".includes" function will serach for guestName inside guestList array. If it present then it gives boolean value of that function as true, else it will give boolean value as false.
    alert("Welcome ");
}
else{
    alert("Sorry, maybe next time");
}
