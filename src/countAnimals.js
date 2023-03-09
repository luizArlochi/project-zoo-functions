const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }

  const { species, sex } = animal;
  const speciesData = data.species.find((getSpecies) => getSpecies.name === species);
  if (!sex) {
    return speciesData.residents.length;
  }
  return speciesData.residents.filter((getResident) => getResident.sex === sex).length;
};

module.exports = countAnimals;
