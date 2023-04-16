// In atom
// By using below codes, we developed multi Route websites. We go to different Route to get different information.

app.get('/',function(request,response){   // '/' this one is  Home Route.
  response.send("<h1>Hello world!</h1>");
});

app.get('/contact',function(req,res){     // "req" is short form of request. "res" is short form of response. Here '/contact' is Contact Route to display contact details of a person.
  res.send("contact me at: prasad123@gmail.com");
})

app.get('/about',function(req,res){
  res.send("My name is Prasad M S. I love coding");
})

app.get('/hobbie',function(req,res){
  res.send("<ul><li>coffee</li><li>coding</li><li>news paper</li></ul>")
})

// In hyper
npm install -g nodemon      // This will automatically update server according to code changes in source file, i.e, server.js . No need to press ctrl+c and re-run server each time when code is updated.

nodemon server.js

// For more info refer
https://nodemon.io/


