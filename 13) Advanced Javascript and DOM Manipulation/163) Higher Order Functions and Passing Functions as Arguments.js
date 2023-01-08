// I have opened Javascript wikipedia and cliked Inspect on Javascript heading.
// In console of Chrome developer tool.
$0          // This is shown when I inspected the code, in front of heading. After entering this "$0" in console. I got this output.  From this I get to know that "$0" represents heading in code of html in this wikipedia.
<span class=​"mw-page-title-main">​JavaScript​</span>​

$0.innerHTML = "PrasadScript";      // To change heading text of wikipedia, I have used this code.
'PrasadScript'

$0.addEventListener("click",function(){   // When I click on heading text, then the message "I got clicked" will logged to console.  In this code "click" is input1 and "function()" is input2. When we use one "function" as input of another function then it is called as "Higher Order Function".
    console.log("I got clicked");
});
undefined
2VM589:2 I got clicked



// In console of Chrome developer tool. In this functions we modifying code each time to perform different operations.
function calculator(num1,num2){
    return num1+num2;
}
undefined

calculator(2,3);
5

function calculator(num1,num2){       // In this functions we modifying code each time to perform different operations.
    return num1*num2;
}
undefined

calculator(2,3);
6



// In console of Chrome developer tool. 
function add(num1,num2){
    return num1+num2;
}
undefined

function multiply(num1,num2){
    return num1*num2;
}
undefined

function subtract(num1,num2){
    return num1-num2;
}
undefined

function divide(num1,num2){
    return num1/num2;
}
undefined

function calculator(num1,num2,operator){    // In this code I'm using same function, but we can perform different operation such as adding, subtracting, multiplication and division, withought modifying code.    
    return operator(num1,num2);     // If we pass num1 =2, num2 = 3, operator= add, then add(2,3) function will be called in return statement and return the result of that function by executing respective function.             
}
undefined

calculator(2,3,add)                         // When we use one "function" as input of another function then it is called as "Higher Order Function". In this "add" function is used as 3rd input in "calculator" function. In this we passed function as argument.
5;

calculator(2,3,multiply);
6

calculator(3,2,subtract);
1

calculator(6,2,divide);
3

// To debug code enter this in console
debugger;  // presss shift + Enter
calculator(2,3,add);  // Then press Enter
