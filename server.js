var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.end('I am programming in node.js \n I am running this on port 3001');
}).listen(3001, "127.0.0.1");
console.log('Server is running at http://127.0.0.1:3001/');