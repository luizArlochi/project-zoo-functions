const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  if (!Array.isArray(entrants) || entrants.length === 0) {
    return { child: 0, adult: 0, senior: 0 };
  }

  return entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    } else if (age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
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
