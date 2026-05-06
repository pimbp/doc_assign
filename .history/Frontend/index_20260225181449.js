const http = require('http'); // Import the http module to create a server
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Determine which file to serve
    let filePath = req.url === '/' ? './index.html' : '.' + req.url;
    
    // Logic to handle the subfolders
    if (req.url.startsWith('/style/')) filePath = `./style/${path.basename(req.url)}`;
    if (req.url.startsWith('/functions/')) filePath = `./functions/${path.basename(req.url)}`;

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
            return;
        }
        res.writeHead(200);
        res.end(content);
    });
});

server.listen(3000, () => console.log('Server running at http://localhost:3000/'));