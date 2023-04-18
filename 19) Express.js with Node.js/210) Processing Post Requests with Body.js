// When I run server and give input in browser and click on calculate button on Calculator website. Then I get this error "Cannot POST /index.html".
// click ctrl+shift+I and go to "Network" tab above there. Here we can see what error is. Now I'm getting error 404.

// In calculator.js
    <form action="/" method="post">         // method="post" means sending. To send input data to server, we use action="/" . Previously, it was our inputs to somewhere else.
      <input type="text" name="num1" placeholder="First Number">
      <input type="text" name="num2" placeholder="Second Number">
      <button type="submit" name="submit">Calculate</button>
    </form>

// Still after reruning browser, I'm getting
Cannot POST /
  
// In Network section, If I click on error 404 (local host). Then click on "Headers", we can see Form data below.
