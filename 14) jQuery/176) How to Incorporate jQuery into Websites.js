// In google, search "jQuery.com"
// In download section, search for "google CDN". Include most popular CDN such as this, because, when other user try to open our website, if they alredy used most recent used CDN by opening other website, then while loading our webiste, it uses cache and loads it faster.

// In index.html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>jQurery</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello.</h1>
    <button>click me</button>
    <button>click me</button>
    <button>click me</button>
    <button>click me</button>
    <button>click me</button>
                                                                                                // In html, code executed from top to bottom.
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>    // Always include jQuery CDN (computer domain network) before javascript source. Because, If we include it after javascript source then it dont understand what is "$" sign and all while executing javascript code. So, Always include jQuery CDN before javascript source link.
    <script src="index.js" charset="utf-8"></script>        // Always, include jQuery mdn and javascript source at the end of body section. If we include these two lines of code in head section, after link then include these three lines of code as below line number 28-30, because, Javascript code is executed before jQuery CDN is loaded. So, to make sure that jQuery document is ready include those line of code from 28-30.
  </body>
</html>

// In index.js
$("h1").css("color","red");

// $(document).ready(function(){
//   $("h1").css("color","red");
// });
