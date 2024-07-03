const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    // res.write(JSON.parse{'message': 'Server running at http://localhost:8080', 'processId': process.pid});
    res.end();
});

server.listen(8080, () => console.log('Server listening on port 3000'));