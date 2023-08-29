import calculator from '../Code/calculator';

test('Add', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('Subtract', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
  });

  test('divide', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test('multiply', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });



module.exports = calculator;