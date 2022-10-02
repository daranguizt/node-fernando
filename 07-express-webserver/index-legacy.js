import http from 'http';

http.createServer((req, res) => {
  res.writeHead(404, {'Content-Type': 'application/json'});

  const person = {
    id: 1,
    name: 'diego',
  }
  res.write(JSON.stringify(person));
  res.end();
}).listen(8080);