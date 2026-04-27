const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from GitOps with Argo CD - Version 4 🚀");
}).listen(3000);
