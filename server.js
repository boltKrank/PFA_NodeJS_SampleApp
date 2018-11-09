var http = require('http');
try{

  false;

}
wrong();
commnad();

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('This is a new message. Your Node.js application is working!\n\n\n');
}).listen(80);

console.log('Server started');
