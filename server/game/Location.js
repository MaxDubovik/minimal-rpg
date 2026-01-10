class Location {
    constructor(id, name, exits = []) {
        this.id = id;
        this.name = name;
        this.exits = exits;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            exits: this.exits,
        };
    }
}

module.exports = Location;