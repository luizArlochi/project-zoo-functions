const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((getSpecie) => getSpecie.name === animal)
  .residents.every((resident) => resident.age >= age);

module.exports = getAnimalsOlderThan;
