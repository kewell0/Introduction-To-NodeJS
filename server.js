const path = require('path');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url === '/') {
    let filepath = path.join(__dirname, 'index.html');
    fs.readFile(filepath, 'utf8', (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(data)
    })
   }
   if(req.url === '/about.html') {
    let filepath = path.join(__dirname, 'about.html');
    fs.readFile(filepath, 'utf8', (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(data)
    })
   }

});

const port =5000

server.listen(port, () => {
    console.log(`server is running on ${port} `)
});

