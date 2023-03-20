// In index.html
...
<body>
    <h1 class="big-title margin-50">Hello.</h1>     // class, src, href are the examples for some of the attributes.
    <img src="drum.png" alt="">
    <a href="https://www.google.com">Search</a>
</body>
...

// In index.js
console.log($("img").attr("src"));    // This will show an error. Because, There is no drum.png is actually added.
$("a").attr("href","https://www.yahoo.com");    // To set attribute href to new address.

// In console
$("h1").attr("class");    // To know "h1" element has what are all the classes.
'big-title margin-50'
