// When I run server and give input in browser and click on calculate button on Calculator website. Then I get this error "Cannot POST /index.html".
// click ctrl+shift+I and go to "Network" tab above there. Here we can see what error is. Now I'm getting error 404.

// In index.html
    <form action="/" method="post">         // method="post" means sending. To send input data to server, we use action="/" . Previously, it was sending our inputs to somewhere else.
      <input type="text" name="num1" placeholder="First Number">
      <input type="text" name="num2" placeholder="Second Number">
      <button type="submit" name="submit">Calculate</button>
    </form>

// Still after reruning browser, I'm getting
Cannot POST /
  
// In Network section, If I click on error 404 (local host). Then click on "Headers", we can see Form data below.
// num1 is the name bound to input1 here. num2 is the name bound to input2 here.

// HTTP return code cheat sheet
    1**. Hold on something gonna happen
    2**. Here you go. This is usually a sucessful request code. (200- all ok)
    3**. You screwed up. There is some security concern.
    4**. Me screwed up  ( 400 - User uses browser to request something, that doesn't exist. )
For more info-
 https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
                         
 // In atom calculator.js
 app.post('/',function(req,res){            // "app.post" handles any post request coming to our Route. It accepts request from browser.
  res.send("Thanks for posting that!");     // To reply to that request we send this.
})      // Usually we use this to process the request from browser and send response.

// In hyper
nodemon calculator.js
