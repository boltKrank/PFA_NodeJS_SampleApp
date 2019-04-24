var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('New Message!\n\n\n');
}).listen(80);

console.log('Server started');
