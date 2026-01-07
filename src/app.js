const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from GitOps with Argo CD!");
}).listen(3000);
