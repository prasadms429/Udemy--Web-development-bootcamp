// In index.js of chrome developer tool.
function HouseKeeper(yearOfExperience,name,cleaningRepertoire){     
    this.yearOfExperience = yearOfExperience;   // "HouseKeeper" object contains number of properties and methods.
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaning = function(){             // The fuction associated with object is called as Method.
        alert("cleaning in progress");
    }
}

// In console of chrome developer tool.
var houseKeeper1 = new HouseKeeper(15,"Mack",["BedRoom","BathRoom"]);
undefined

houseKeeper1.cleaning();        // This is calling the method of object "houseKeeper1".
