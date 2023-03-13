const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  describe('when the parameter is undefined', () => {
    it('should return undefined', () => {
      expect(handlerElephants(undefined)).toBeUndefined();
    });
  });

  describe('when the parameter is not a string', () => {
    it('should return an error message', () => {
      expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
    });
  });

  describe('when the parameter is "count"', () => {
    it('should return the count of elephant residents', () => {
      expect(handlerElephants('count')).toBe(4);
    });
  });

  describe('when the parameter is "names"', () => {
    it('should return an array of elephant names', () => {
      expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    });
  });

  describe('when the parameter is "averageAge"', () => {
    it('should return the average age of elephant residents', () => {
      expect(handlerElephants('averageAge')).toBe(10.5);
    });
  });

  describe('when the parameter is not valid', () => {
    it('should return null', () => {
      expect(handlerElephants('invalidParam')).toBeNull();
    });
  });
});
