const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

let publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/hello.html'));
});

app.use( (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end('Looks like you didn\'t find a static file');
});



http.createServer(app).listen(3000);