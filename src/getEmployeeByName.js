const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};

  return data.employees
    .find((getEmployee) => getEmployee.firstName === employeeName
    || getEmployee.lastName === employeeName);
};

module.exports = getEmployeeByName;
