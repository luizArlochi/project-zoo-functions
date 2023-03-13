const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';
const opened = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  it('returns opening hours for a valid day and time', () => {
    const expected = closed;
    const result = getOpeningHours('Monday', '8:30-AM');
    expect(result).toEqual(expected);
  });

  it('throws an error for an invalid day', () => {
    const expected = new Error('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('InvalidDay', '8:30-AM')).toThrow(expected);
  });

  it('throws an error for an invalid hour', () => {
    const expected = new Error('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Monday', '13:30-PM')).toThrow(expected);
  });

  it('throws an error for an invalid abbreviation', () => {
    const expected = new Error('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Monday', '8:30-XX')).toThrow(expected);
  });

  it('returns the correct message for opening time at 12:00 PM', () => {
    const expected = closed;
    const result = getOpeningHours('Monday', '12:00-PM');
    expect(result).toEqual(expected);
  });

  it('returns the correct message for closing time at 12:00 AM', () => {
    const expected = closed;
    const result = getOpeningHours('Saturday', '11:59-PM');
    expect(result).toEqual(expected);
  });

  it('returns the correct message for closing time at 12:00 PM', () => {
    const expected = opened;
    const result = getOpeningHours('Tuesday', '12:00-PM');
    expect(result).toEqual(expected);
  });

  it('returns the correct message for opening time at 12:00 AM', () => {
    const expected = closed;
    const result = getOpeningHours('Wednesday', '12:00-AM');
    expect(result).toEqual(expected);
  });
});
