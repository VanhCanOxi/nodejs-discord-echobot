var http = require('http')

http.createServer(function (rq, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);
