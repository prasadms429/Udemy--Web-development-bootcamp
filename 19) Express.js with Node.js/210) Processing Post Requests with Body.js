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

// In hyper
npm install body-parser     // To get request(input) from browser to route, we should install body-parser. After installing this, body-parser is added under dependencies of package.json file.

// In index.html
<form action="/" method="post">
      <input type="text" name="n1" placeholder="First Number">      // num1 name is changed to n1.
      <input type="text" name="n2" placeholder="Second Number">
      <button type="submit" name="submit">Calculate</button>
    </form>

// In calculator.js
const bodyParser = require('body-parser');      // To include(incoperate) body-parser in our project, we should require that.

const app = express();
app.use(bodyParser.urlencoded({extend: true})); // body-parser works with express. "urlencoded" get data as html form. "extend: true" is to get nested objects. We should include these each time in our project.

app.post('/',function(req,res){
  // console.log(req.body);                 // This will log complete body objects, i.e is form data.
    // Output in hyper for above line of code
    //    Server started on port 3000
    //    { num1: '2', num2: '3', submit: '' }
  var num1 = Number(req.body.n1);           // req.body.n1 is in the form of text. To conver it into integer format we use "Number()" method. 
  var num2 = Number(req.body.n2);           // To get access to input number2 specifically, then we use this "req.body.n2".
  var result = num1 + num2;
  res.send("Result of the calculation is "+result);
})

// In hyper
nodemon calculator.js

// In browser now if we click ctrl+shift+I then we are able to see only html form. We are not able to see backend code. That is the true power of server side backend development.
// Now we have finally created one web application.
