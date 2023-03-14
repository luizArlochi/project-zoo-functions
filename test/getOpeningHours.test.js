const getOpeningHours = require('../src/getOpeningHours');
const isStringRepresentNumber = require('../src/getOpeningHours');

const closed = 'The zoo is closed';
const opened = 'The zoo is open';
const validDayError = 'The day must be valid. Example: Monday';

describe('Testes da função getOpeningHours', () => {
  it('returns opening hours for a valid day and time', () => {
    const expected = closed;
    const result = getOpeningHours('Monday', '8:30-AM');
    expect(result).toEqual(expected);
  });

  it('throws an error for an invalid day', () => {
    const expected = new Error(validDayError);
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

  it('throws an error for a string that does not represent a number', () => {
    const expected = new Error(validDayError);
    expect(() => isStringRepresentNumber(validDayError)).toThrow(expected);
  });

  it('should throw an error when minutes are not valid', () => {
    expect(() => {
      getOpeningHours('Monday', '10:60-AM');
    }).toThrow('The minutes must be between 0 and 59');
  });

  it('returns the opening hours for a valid day and time', () => {
    const day = 'Monday';
    const time = '10:00-AM';
    expect(() => getOpeningHours(day, time)).not.toThrow();
  });

  it('throws an error if the day is not valid', () => {
    const day = 'InvalidDay';
    const time = '10:00-AM';
    expect(() => getOpeningHours(day, time)).toThrow(validDayError);
  });

  it('throws an error if the time is not valid', () => {
    const day = 'Monday';
    const time = 'invalid-time';
    expect(() => getOpeningHours(day, time)).toThrow('The hour should represent a number');
  });

  it('throw error for invalid day', () => {
    expect(() => {
      getOpeningHours('Invalid Day', '10:00-PM');
    }).toThrowError(validDayError);
  });

  it('throw error for invalid dataHour', () => {
    expect(() => {
      getOpeningHours('Monday', '25:00-AM');
    }).toThrowError('The hour must be between 0 and 12');
  });

  it('return "The zoo is closed" when zoo is closed', () => {
    expect(getOpeningHours('Monday', '6:00-AM')).toEqual(closed);
  });
});
