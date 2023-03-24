$("button").click(function(){
  $("h1").hide();                 // To hide "h1" contents on website, when we click on button.
})

// In cmd
$("h1").show();       // It will show once again, whatever hid.

$("button").click(function(){   // when we click on button, once it hide "h1" content and again when we click on button then, website will disply hidden content.
  $("h1").toggle();
})

$("button").click(function(){   // The difference between hide and fadeout is, when we use hide(), it suddenly removes content. But when we use fadeout() then it slowly removes the content from the website.
  $("h1").fadeOut();
})

// IN cmd
$("h1").fadeIn();     // It displays the content in a slow motion, whatsever hidden.

$("button").click(function(){   // when we click on button, once it slowly hide "h1" content and again when we click on button then, website will slowly disply hidden content.
  $("h1").fadeToggle();
})

$("button").click(function(){   
  $("h1").slideUp();            // sideUp() will take the page above and hide the h1 content, when I click on any button on website.
})

// IN cmd
$("h1").slideDown();            // sideDown() will take the page down and disply the h1 content, when I click on any button on website.

$("button").click(function(){
  $("h1").slideToggle();        // This will useful for creating menu bar for toggling up and down
})

$("button").click(function(){
  $("h1").animate({opacity:0.5});     // "animate" means animation, the "opacity:0.5" is to reduce the displyness of the "h1" content by 50%. Inside "animate" we can give only numerical value, not text value.
})
