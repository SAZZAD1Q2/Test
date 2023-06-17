import Calc, { stringLength, reverseString, capitalize } from "./task.js";

describe(' my string length', () => {
  test('should return the correct length', () => {
    const str = 'JavaScript';
    const expectedLength = 10;
    expect(stringLength(str)).toBe(expectedLength);
  });

  test('should throw an error for invalid length', () => {
    const str = 'This is a long string';
    expect(() => {
      stringLength(str);
    }).toThrow('String length must be between 1 and 10 characters');
  });
});

describe('reverse string', () => {
  test('should reverse the string', () => {
    const str = 'Adeeb';
    const expected = 'beedA';
    expect(reverseString(str)).toBe(expected);
  });
});

describe('Calc', () => {
  test('addition operation should return the correct sum', () => {
    expect(Calc.addition(4, 4)).toBe(8);
    expect(Calc.addition(10, 7)).toBe(17);
    expect(Calc.addition(3, 2)).toBe(5);
  });

  test('subtraction operation should return the correct difference', () => {
    expect(Calc.subtraction(4, 4)).toBe(0);
    expect(Calc.subtraction(10, 7)).toBe(3);
    expect(Calc.subtraction(3, 2)).toBe(1);
  });

  test('multiplication operation should return the correct product', () => {
    expect(Calc.multiplication(4, 4)).toBe(16);
    expect(Calc.multiplication(1, 7)).toBe(7);
    expect(Calc.multiplication(3, 2)).toBe(6);
  });

  test('division operation should return the correct quotient', () => {
    expect(Calc.division(4, 4)).toBe(1);
    expect(Calc.division(10, 2)).toBe(5);
    expect(Calc.division(40, 2)).toBe(20);
  });
});

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('fuhidy')).toBe('Fuhidy');
  });
});
