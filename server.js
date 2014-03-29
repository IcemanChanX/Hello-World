var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World: From Node\n');
}).listen(8888, 'localhost');
console.log('Server running at http://localhost:8888/');
