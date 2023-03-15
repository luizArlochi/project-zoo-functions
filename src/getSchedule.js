const data = require('../data/zoo_data');

const getExhibitionOfDay = (day) => {
  const animals = data.species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
  if (animals.length > 0) {
    return animals;
  }
  return 'The zoo will be closed!';
};

const getScheduleOfAnimal = (animal) => data
  .species
  .find((specie) => specie.name === animal)
  .availability;

const getOfficeHour = (day) => (data.hours[day]
  .open !== 0 ? `Open from ${data.hours[day].open}
  am until ${data.hours[day].close}pm`
  : 'CLOSED');

const scheduleDays = (day) => ({
  [day]: {
    officeHour: getOfficeHour(day),
    exhibition: getExhibitionOfDay(day),
  },
});

const animalChoosed = (scheduleTarget) => data.species
  .some((element) => element.name === scheduleTarget);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayChoosed = (scheduleTarget) => days.indexOf(scheduleTarget) !== -1;

const getSchedule = (scheduleTarget) => {
  if (animalChoosed(scheduleTarget)) {
    return getScheduleOfAnimal(scheduleTarget);
  } if (dayChoosed(scheduleTarget)) {
    return scheduleDays(scheduleTarget);
  }
  const result = {};
  days.forEach((day) => {
    result[day] = {
      officeHour: getOfficeHour(day),
      exhibition: getExhibitionOfDay(day),
    };
  });
  return result;
};

console.log(getSchedule('Monday'));

module.exports = getSchedule;
