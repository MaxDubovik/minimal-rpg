class Player {
    constructor(id) {
        this.id = id;
        this.name = `Player_${id.slice(0,4)}`;
        this.hp = 100;
        this.level = 1;
        this.exp = 0;
        this.location = 'village';
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            hp: this.hp,
            level: this.level,
            exp: this.exp,
            location: this.location,
        };
    }
}

module.exports = Player;