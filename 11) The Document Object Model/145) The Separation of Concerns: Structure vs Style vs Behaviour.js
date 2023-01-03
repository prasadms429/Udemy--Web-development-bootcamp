// Use HTML for content, CSS for style and Javascript for Behaviour.
document.querySelector("h1").style.color = "green";
'green'

document.querySelector("button").classList;     // To get classes of button.
DOMTokenList ['btn', value: 'btn']


// In styles.css of atom.
.invisible{
  visibility: hidden;
}

// In console of chrome developer tool.
document.querySelector("button").classList.add("invisible");    // To add another extra class "invisible" to pre-existing class of element of "button".
undefined

document.querySelector("button").classList.remove("invisible");   // To remove class from classList.
undefined

document.querySelector("button").classList.toggle("invisible");   // "toggle" will reverse the property, if it is true then it makes false. If it false then it makes it true. If button is visible then it makes invisible and If it is invisible then it makes it visible.
true

document.querySelector("button").classList.toggle("invisible");
false

document.querySelector("button").classList.toggle("invisible");
true

document.querySelector("button").classList.toggle("invisible");
false


// In styles.css of atom.
.huge{          // we can add this class to any element, to apply this class property, as below code of console. We can add this class to as many as elements, that we wish, to change property.
  font-size: 10rem;
}

// In console of chrome developer tool.
document.querySelector("h1").classList.add("huge");   // This will change font size of "h1"  to 10rem. we can just change javascript behaviour of elments by adding class element like this.
