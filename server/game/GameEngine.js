const Player = require('./Player');

class GameEngine {
    constructor() {
        this.players = new Map()
    }

    addPlayer(socketId) {
        const player = new Player(socketId);
        this.players.set(socketId, player);
        return player;
    }

    removePlayer(socketId) {
        this.players.delete(socketId);
    }

    getPlayer(socketId) {
        return this.players.get(socketId);
    }

    getState() {
        return {
            players: [...this.players.values()].map(p => p.toJSON()),
        };
    }
}

module.exports = new GameEngine();