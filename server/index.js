const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

require('./sockets/game.socket')(io);
require('./sockets/admin.socket')(io);

server.listen(PORT, () => {
    console.log('server is running on port ${PORT}');
});