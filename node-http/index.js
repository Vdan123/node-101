const http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200)
  res.end('fuck')
}).listen(3000)