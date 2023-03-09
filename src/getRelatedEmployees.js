const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => data.employees
  .some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((getEmployee) => getEmployee.managers.includes(managerId))
    .map((getEmployee) => `${getEmployee.firstName} ${getEmployee.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
