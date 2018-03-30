'use strict';

const app = require('./app');
const http = require('http').Server(app);
const io = require('./io');
const port = 8080;

io.attach(http);
http.listen(port, () => console.log('Server listening on port: ' + port));