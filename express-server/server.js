const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

let ngAppPath = path.join(__dirname, '..', 'ng2_quickstart'); 
let nodeModulesPath = path.join(__dirname, '..', 'ng2_quickstart', 'node_modules');

app.use('/', express.static(ngAppPath));
app.use('/node_modules', express.static(nodeModulesPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'ng2_quickstart', 'index.html'));
});

http.createServer(app).listen(3000);