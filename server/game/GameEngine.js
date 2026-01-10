const Player = require('./Player');
const { locations } = require('../config/game.config');

class GameEngine {
    constructor() {
        this.players = new Map();
        this.locations = locations;
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

    movePlayer(socketId, targetLocationId) {
        const player = this.getPlayer(socketId);
        if (!player) return { ok: false, error: 'Invalid lovation'};

        const currentLocation = this.locations[player.location];
        if (!currentLocation) return { ok: false, error: 'Invalid location'};

        if (!currentLocation.exits.includes(targetLocationId)) {
            return { ok: false, error: 'Invalid exit'};
        }

        player.location = targetLocationId;
        return { ok:true, player: player.toJSON()};
    }

    getState() {
        return {
            players: [...this.players.values()].map(p => p.toJSON()),
            locations: Object.values(this.locations).map(l => l.toJSON()),
        };
    }
}

module.exports = new GameEngine();