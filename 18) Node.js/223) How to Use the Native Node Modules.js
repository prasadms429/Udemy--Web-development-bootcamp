// Include below comment, if atom shows any error in atom text editor.
//jshint esversion:6

// Usually we use "var" for variable. The value assigned to variable can be changed later. But if we declare "const" (constant) then the assigned value cant be changed later.
const fs = require("fs");   // Here fs means file system. To include file system ("fs") module to constant "fs" we need "require" method.

fs.copyFileSync("file1.txt","file2.txt");  // "copyFileSync" method copies data of file1.txt to file2.txt. If file2.txt is already exist then it overrides the data within it, using file1.txt data. 
// ELSE it will create new file with given name (file2.txt) and copies data from file1.txt to file2.txt.


// In hyper
node index.js

// To know more about node.js modules, packages, built in libraries and to use it. Refer
https://nodejs.org/api/
