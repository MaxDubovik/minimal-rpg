const Location = require('../game/Location');

const locations = {
    village: new Location('village', 'Village', ['forest']),
    forest: new Location('forest', 'Dark Forest', ['village', 'cave']),
    cave: new Location('cave', 'Cave', ['forest']),
};

module.exports = {
    locations,
};