// To change property inside the "Elements" and "Styles" of chrome developer tool.
<h1 id="title" style="color: blue;font-size: 10rem;padding: 30%;visibility: hidden;">Hello</h1>   // click on this in "Element" of chrome developer tool.

element.style {
    color: blue;
    font-size: 10rem;
    padding: 30%;
    visibility: hidden;       // I have written this only.
}


// In console of chrome developer tool.
document.querySelector("h1").style.color = "blue";
'blue'

document.querySelector("h1").style.fontSize = "10rem";      // In javascript we use properties name in camelCase, For example, fontSize = "10rem". While In CSS property names are use dash to separate some words, for example, background-color: yellow;
'10rem'

document.querySelector("h1").style.padding = "30%";   // In javascript we mention values inside string, i.e, "" and In CSS we assign values withought string or quotation.
'30%'

document.querySelector("h1").style.visbility = "hidden";    // To hide text of h1, we use this code.
'hidden'

document.querySelector("h1").style.visbility = "visible";
'visible'

document.querySelector(".btn").style.backgroundColor = "yellow";    // To change back ground color of button we use this code. Refer this link for more info "https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp"
'yellow'

// DOM is to embed javascript code with html.
