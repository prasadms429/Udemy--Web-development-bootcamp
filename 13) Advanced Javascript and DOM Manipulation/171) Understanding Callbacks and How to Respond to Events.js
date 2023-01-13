// Open Javascript wikipedia, Right click on Javascript heading and click on Inspect.
$0.addEventListener("click",function(event){    // If I click on Javascript heading, then below output will be shown as in line 6.
    console.log(event);
});
undefined
VM416:2 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}



function sayHi(to){     // This is to show,  WHILE defining the function its input name can be anything.
    console.log("Hello "+to);
}

sayHi("Angella");
VM961:2 Hello Angella

function sayHi(name){   
    console.log("Hello "+name);
}

sayHi("Jack");
VM1142:2 Hello Jack

var name = "Jack";
undefined

var to = "Jack";
undefined

$0.addEventListener("click",function(evt){    // This is to show,  WHILE defining the function its input name can be anything. It can be "evt" or "e".
    console.log(evt);
});
undefined
VM416:2 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}   // mouse click is shown as "PointerEvent".
VM750:2 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

$0.addEventListener("click",function(e){
    console.log(e);
});
undefined
VM416:2 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}   // Now, we are getting three mouse click, because already 2 addEventListener's are defined above.
VM750:2 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
VM1361:2 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

function anotherAddEventListner(typeOfEvent,callBack){    // This is another Event listner function, that we have created to understand "addEventListener" function.
    // Detect Event code
    var eventThatHappened = {   // This is the object to compare with event that happened. It also contains properties such as eventType, key and durationOfKeypress.
        eventType : "keydown",
        key : "p",
        durationOfKeypress : 2
    }
        
    if(eventThatHappened.eventType === typeOfEvent ){   // If this two are equal, then only "callBack" function will get executed.
        callBack(eventThatHappened);
    }
}

anotherAddEventListner("keydown",function(event){
    console.log(event);
});
VM2485:2 {eventType: 'keydown', key: 'p', durationOfKeypress: 2}      // If any key is pressed then "anotherAddEventListner"  fucntion will give only already assigned properties such as key: 'p'.


document.addEventListener("keydown",function(){   // In this code, addEventListener gives which ever key is pressed, that as output.
    console.log(event);
});

keyboardEvent {isTrusted: true, key: 'k', code: 'KeyK', location: 0, ctrlKey: false, …} 

// To debug code
debugger;
anotherAddEventListner("keydown",function(event){
    console.log(event);
});
