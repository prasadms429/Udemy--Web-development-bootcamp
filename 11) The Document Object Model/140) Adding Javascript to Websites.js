// In index.html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>My website</title>
    <link rel="stylesheet" href="styles.css">     // Always include css style tag in head section, after title. Otherwise, If we apply it in end, then all html tags will be executed and display them withought style and after some time, at the end, it will include styles to those html elements.
  </head>
  <!-- <body onload="alert('Hello');"> -->        // This is "Inline Javascript".  This code will display an alert, after website is fully loaded.
  <body>
    <h1>Hello</h1>

    <!-- <script type="text/javascript">          // This is "Internal Javascript".
      alert("Hello");
    </script> -->

    <script src="index.js" charset="utf-8"></script>    // This is "External Javascript". The "src" source, specifies the path of javascript fie. Always include script tag at the end of body section, Otherwise if we include it in begining like in head section, then the script will give an error, because html elements used in that script are not executed(initialized) yet.
  </body>
</html>


// In styles.css
h1{
  color: red;
}


// In index.js
// alert("Hello");
document.querySelector("h1").innerHTML = "Good Bye";    // This is to change h1 selector text from "Hello" to "Good Bye".
