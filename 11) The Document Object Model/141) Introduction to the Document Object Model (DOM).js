// Use HTML Tree Generator extension of chrome to get overiew of Document Object Model.

// This is entire html code, for below console exercise.
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">

  </head>
  <body>

    <h1>Hello</h1>

    <input type="checkbox">

    <button style=":active color:red;">Click Me</button>

    <ul>
      <li class="list">
        <a href="https://www.google.com">Google</a>
      </li>
      <li class="list">Second</li>
      <li class="list">Third</li>
    </ul>

  </body>

</html>


// In console of chrome developer tool.
document      // To get entire html code.

document.firstElementChild    // It also prints, entire html code. withought <!DOCTYPE html>

document.firstElementChild.firstElementChild    // This will print only head section.

document.firstElementChild.lastElementChild;    // This will print body section, of aboe html code.

document.firstElementChild.lastElementChild.firstElementChild; // This will print h1 tag.

var heading = document.firstElementChild.lastElementChild.firstElementChild;    // we can also declare this in variable.

heading;    // This will print h1 tag.

heading.innerHTML = "Good Bye";   // This will change text inside h1 tag to "Good Bye". In this example i.e, Hello to Good Bye.

heading.style.color = "Green";

document.querySelector("input").click();    // To tick the checkbox, we use this.

document.firstElementChild.lastElementChild.lastElementChild;   // This will print entire ul section.

// This is the code to change the text inside third "li", i.e "Third" to "your name".
var third = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;
third.innerHTML = "Prasad";
