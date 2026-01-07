module.exports = (io) => {
    io.of('/admin').on('connection', (socket) => {
        console.log('a admin connected', socket.id);

        socket.on('disconnect', () => {
            console.log('a admin disconnected', socket.id);
        });
    });
};