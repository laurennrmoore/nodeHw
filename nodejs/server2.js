const http = require('http');
const { Server } = require('node:http');

http.createServer((req, res) => {
console.log('request made');
});

server.listenerCount(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});