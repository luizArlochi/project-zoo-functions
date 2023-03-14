const data = require('../data/zoo_data');

const categorizeAge = (age) => {
  if (age < 18) {
    return 'child';
  } if (age < 50) {
    return 'adult';
  }
  return 'senior';
};

const countEntrants = (entrants) => {
  if (!Array.isArray(entrants) || entrants.length === 0) {
    return { child: 0, adult: 0, senior: 0 };
  }

  return entrants.reduce((acc, { age }) => {
    const category = categorizeAge(age);
    acc[category] += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
};

const calculateEntry = (entrants) => {
  const count = countEntrants(entrants);

  const totalPrice = Object.entries(count)
    .reduce((acc, [age, countAge]) => acc + data.prices[age] * countAge, 0);

  return Number(totalPrice.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
