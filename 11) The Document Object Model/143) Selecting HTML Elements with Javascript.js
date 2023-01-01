// HTML code
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">

  </head>
  <body>

    <h1 id="title">Hello</h1>
    <a href="https://www.google.com">Google</a>
    <input type="checkbox">

    <button class="btn" style=":active color:red;">Click Me</button>

    <ul id="list">
      <li class="item">
        <a href="https://www.google.com">Google</a>
      </li>
      <li class="item">Second</li>
      <li class="item">Third</li>
    </ul>

  </body>

</html>


// In console of chrome developer tool
document.getElementsByTagName("li");              // getElementsByTagName() will display elements in array. It will display all list items.
HTMLCollection(3) [li.list, li.list, li.list]

document.getElementsByTagName("li").style.color = "purple";         // we cant set color to array, So we have to select particular element in array, to set color to it. 40 th line of code is correct format of this code.
VM706:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:49
(anonymous) @ VM706:1

document.getElementsByTagName("li")[2].style.color = "purple";
'purple'

document.getElementsByTagName("li").length;     // To get length of list items inside array.
3

document.getElementsByClassName("btn");   // To select class.
HTMLCollection [button.btn]

document.getElementsByClassName("btn").style.color = "red";       // getElementsByClassName() gives an array. If class name is single in entire html code also, we have to select it in square bracket i.e, []. 54 th line of code is correct format of this code.
VM922:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:52
(anonymous) @ VM922:1

document.getElementsByClassName("btn")[0].style.color = "red";
'red'

document.getElementById("title");       // Id is unique in entire html. So, It doesnt give an array as output. We can change properties of Id's withought using [].
<h1 id=​"title">​Hello​</h1>​

document.getElementById("title").innerHTML = "Good Bye";
'Good Bye'

document.querySelector("h1");         // In querySelector(), we can use elements i.e, h1, body,p and class, Id. and combination of elements, class, Id's.
<h1 id=​"title">​Good Bye​</h1>​

document.querySelector("#title");
<h1 id=​"title">​Good Bye​</h1>​

document.querySelector(".btn");
<button class=​"btn" style=​":​active color:​red;​">​Click Me​</button>

document.querySelector("li a");       // If elements from two different line of code then we give space betweeen them as this ("li a"). It will select second google link.
<a href=​"https:​/​/​www.google.com">​Google​</a>​

document.querySelector("a");          // There are two google anchor tag link in html code. So, This code select only first google anchor tag link
<a href=​"https:​/​/​www.google.com">​Google​</a>

​​document.querySelector("li.item");  // ("li.item") this list element and item id are from same line of code, so we dont use space between them.
<li class=​"item">​::marker​<a href=​"https:​/​/​www.google.com">​Google​</a>​</li>​

document.querySelector(".item");    // This will select First class that contain class name as ".item".
<li class=​"item">​::marker​<a href=​"https:​/​/​www.google.com">​Google​</a>​</li>​

document.querySelector("#list a");    // To select second google link.
<a href=​"https:​/​/​www.google.com">​Google​</a>​

document.querySelector("#list .item"); // This code select second google link by using id, #list and class .item
<li class=​"item">​::marker​<a href=​"https:​/​/​www.google.com">​Google​</a>​</li>​

document.querySelectorAll("#list .item");   // This will select all classes inside id #list and contain class name as ".item".
NodeList(3) [li.item, li.item, li.item]0: li.item1: li.item2: li.itemlength: 3[[Prototype]]: NodeList

document.querySelectorAll("#list .item")[2].style.color = "blue";   // To select specific element in array to give color in querySelectorAll().
'blue'

document.querySelectorAll("#list .item").style.color = "blue";     // code fails withought specifying which element to set color. i.e, we must use []. Because, "querySelectorAll()" gives an array.
VM3317:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:54

document.querySelector("li a").style.color = "red";    // "querySelector()" will not give output in array. This code is to change color of second google link in website
'red'
