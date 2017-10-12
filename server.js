const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'dist')));

var port = process.env.PORT || '3891';
app.use('/', api);

app.set('port', port);
const server = http.createServer(app);

server.listen(port, 'localhost', () => {
  console.log(`Server running on localhost: ${port}`);
})
