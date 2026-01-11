const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from GitOps with Argo CD - Version 3 🚀");
}).listen(3000);
