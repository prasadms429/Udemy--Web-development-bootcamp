Mo// In atom server.js
app.get('/',function(request,response){     // "app.get()" get the request from browser and send it to server. This method takes two parameter. First one '/', this represents the location of Root(Server), where requested to be rooted.
                                            // For second parameter we gave call back function, it gets triggered for both request from browser and response from server.
  // console.log(request);          // This logs objects(information) related 'request' into console.
  // response.send("Hello");        // It sends response to browser and prints "Hello" on browser.
  response.send("<h1>Hello world!</h1>");   // This prints html h1 content on browser withought tags.
});

// In hyper
node server.js
