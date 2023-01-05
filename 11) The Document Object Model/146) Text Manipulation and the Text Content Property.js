// In index.html of atom
<h1 id="title"><strong>Hello</strong></h1>

// In console of chrome developer tool.
document.getElementById("title").innerHTML = "Good Bye";    // "innerHTML" and "textContent" works same. If it contains html element inside one html element then only difference comes as below code line 14 and 17.
'Good Bye'

document.getElementById("title").textContent = "Hello";
'Hello'

document.querySelector("h1").innerHTML;
'Hello'

document.querySelector("h1").innerHTML;     // If inside of html element, if there is an another html element then "innerHTML" displays text with that html element.
'<strong>Hello</strong>'

document.querySelector("h1").textContent;   // If inside of html element, if there is an another html element then "textContent" displays text withought that html element.
'Hello'

document.querySelector("H1").innerHTML = "<em>Good Bye</em>";     // To apply CSS, mention it within quotation as "<em>Good Bye</em>".
'<em>Good Bye</em>'
