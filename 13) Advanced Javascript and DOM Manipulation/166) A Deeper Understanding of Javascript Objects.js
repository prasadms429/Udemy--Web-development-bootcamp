// In index.js of chrome developer tool.
var houseKeeper1 = {    // Below three lines of code is properties of houseKeeper1 variable. To create different objects of houseKepeer like houseKepeer2 and houseKepeer3, we have to write all properties and its values once again. To reduce repated code writing for objects, we create constructor as below of line  22.
    yearOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathRoom","lobby","bedRoom"]
}

var houseKeeper2 = {    
    yearOfExperience: 9,
    name: "Tom",
    cleaningRepertoire: ["lobby","bedRoom"]
}

// In console of chrome developer tool.
houseKeeper1
{yearOfExperience: 12, name: 'Jane', cleaningRepertoire: Array(3)}

console.log(houseKeeper1.name);
VM329:1 Jane

// In index.js of chrome developer tool.
function HouseKeeper(yearOfExperience,name,cleaningRepertoire){     // Let assume, this is the factory to create Objects, Housekeeper. Generally this is called as "constructor" to create objects. All constructor name starts with Capital letter. It takes input values within paranthesis.
    this.yearOfExperience = yearOfExperience;     // This "this.yearOfExperience" is the property of constructor "HouseKeeper". It takes value from input "yearOfExperience".
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

// In console of chrome developer tool.
var houseKeeper2 = new HouseKeeper(15,"Mack",["BedRoom","BathRoom"]);   // To create new object we use "new" keyword.
undefined

houseKeeper2.name;
'Mack'

var houseKeeper1 = new HouseKeeper(9,"Jan",["lobby","Bed Room"]);   // By writing code like this, we can create as many as objects, withought writing code again like line 2 to 12.
undefined

houseKeeper1.name;
'Jan'
