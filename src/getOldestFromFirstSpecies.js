const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstAnimal = data.employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const animalId = data.species
    .find((specie) => specie.id === firstAnimal).residents;
  const oldestAnimal = animalId
    .reduce((oldest, current) => (current.age > oldest.age ? current : oldest), { age: -Infinity });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
