// This is the program to select a random person, from a gruop of people, to pay lunch fees at hotel.
function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    
    return randomPerson+" is going to buy lunch today!"
  
/******Don't change the code below*******/    
}
