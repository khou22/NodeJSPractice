var module1 = require('./module1');
var module2 = require('./module2.js'); //Assumes JS file, imports module2.js file, must declare './'
console.log("module2.data:", module2.data);

var http = require('http'); //Built in http server module
//Don't need to npm install http
var port = 3000;

if (http != undefined) {
  console.log("'http' module successfully imported");
}

var server = http.createServer(function(request, response) {
  //Every time the server hears soemthing at its designated port, will respond with this function
  console.log("The server got a request!"); //Returns to the terminal
  response.write("This is in the browser");
  response.end();
});

server.listen(port);