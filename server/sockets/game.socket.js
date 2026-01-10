const game = require('../game/GameEngine');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('a user connected', socket.id);

        const player = game.addPlayer(socket.id);

        socket.emit('init', {
            player: player.toJSON(),
            state: game.getState(),
        });

        io.emit('state:update', game.getState());

        socket.on('disconnect', () => {
            console.log('a user disconnected', socket.id);
            game.removePlayer(socket.id);
            io.emit('state:update', game.getState());
        });
    });
};