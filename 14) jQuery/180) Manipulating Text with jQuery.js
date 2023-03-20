// In index.js of jquery folder
$("h1").text("Bye");      // To change text of h1 element, we use this.

// $("button").text("<em>Don't click me</em>");   // This will change text of all buttons into "<em>Don't click me</em>" and it treats "<em></em>" as text, not as html property.

$("button").html("<em>Don't click me</em>");      // In jquery we use "html", same as innerhtml of javascript to include html or text. This will consider <em></em> as html property, not as text and applies emphasis or italics to text. Displays text in italics.
