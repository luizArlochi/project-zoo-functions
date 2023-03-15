const data = require('../data/zoo_data');

const mapEmployees = () => data.employees.map((employee) => {
  const responsibleSpecies = data.species
    .filter((species) => employee.responsibleFor.includes(species.id))
    .map((species) => species.name);
  const locations = data.species
    .filter((species) => employee.responsibleFor.includes(species.id))
    .map((species) => species.location);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: responsibleSpecies,
    locations,
  };
});

const getEmployeeById = (id) => {
  const employee = mapEmployees().find((employeeTarget) => employeeTarget.id === id);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return employee;
};

const getEmployeesByName = (name) => {
  const filteredEmployees = mapEmployees().filter(
    (employee) =>
      employee.fullName.toLowerCase().includes(name.toLowerCase()),
  );
  if (filteredEmployees.length === 0) {
    throw new Error('Nome inválido');
  } if (filteredEmployees.length === 1) {
    return filteredEmployees[0];
  }
  return filteredEmployees;
};

const getEmployeesCoverage = (element) => {
  if (!element) {
    return mapEmployees();
  }

  if (element.id) {
    return getEmployeeById(element.id);
  }

  if (element.name) {
    return getEmployeesByName(element.name);
  }
};

module.exports = getEmployeesCoverage;
