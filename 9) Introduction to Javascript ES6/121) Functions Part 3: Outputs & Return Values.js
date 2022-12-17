function getMilk(money,costPerBottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("Bought "+calcBottles(money,costPerBottle)+" bottles of milk");         // we can use function inside of function. The output of function "calcBottles(startingMoney,costPerBottle)" is written in place of calling function, "calcBottles(money,costPerBottle)".
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money,costPerBottle);       // These function takes input and return value.
}

function calcBottles(startingMoney,costPerBottle){
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount,costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}


console.log("Hello master, here is your "+getMilk(5,1.5)+" change.");     // "getMilk(5,1.5)" print the output of function "getMilk(money,costPerBottle)".
