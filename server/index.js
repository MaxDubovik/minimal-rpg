const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');

const server = http.createServer(app);
const io = new Server(server);

require('./sockets/game.socket')(io);
require('./sockets/admin.socket')(io);

server.listen(3000, () => {
    console.log('server is running on port 3000');
});