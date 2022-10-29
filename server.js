const http = require('http');

const server = http.createServer(function(request, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

//    res.end(`
//    {
//     'name': 'Caleb',
//     'College': 'FUTA',
//     'Occupation': 'Software engineer'
//  }
//    `);

res.end(`
    <html>
        <body>
            <h1>Welcome</h1>
            <p>Text here</p>
        </body>
    </html>
`);
});

// Create a port
server.listen(400, '127.0.0.1');

console.log('You created a server');