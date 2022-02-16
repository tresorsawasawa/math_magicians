import calculate from '../logic/calculate';

let inputs = {
  total: null, // the running total
  next: null, // the next number to be operated on with the total
  operation: null, // the operator
};

describe('Calculator Test', () => {
  it('Testing the sum operation', () => {
    inputs = {
      total: 3,
      next: 4,
      operation: '+',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('7');
  });

  it('Testing the substraction operation', () => {
    inputs = {
      total: 3,
      next: 4,
      operation: '-',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('-1');
  });

  it('Testing the multiplication operation', () => {
    inputs = {
      total: 3,
      next: 4,
      operation: 'x',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('12');
  });

  it('Testing the division operation', () => {
    inputs = {
      total: 20,
      next: 4,
      operation: '÷',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('5');
  });

  it('Testing the modulus operation', () => {
    inputs = {
      total: 20,
      next: 3,
      operation: '%',
    };
    const { total } = calculate(inputs, '=');
    expect(total).toBe('2');
  });

  it('Testing the AC button', () => {
    inputs = {
      total: 209385829394,
      next: 23311114,
      operation: '+',
    };
    const next = calculate(inputs, 'AC');
    const result = {
      total: null,
      next: null,
      operation: null,
    };
    expect(next).toEqual(result);
  });

  it('Testing the +/- button', () => {
    inputs = {
      total: 20,
      next: 3,
      operation: '-',
    };
    const { next } = calculate(inputs, '+/-');
    expect(next).toBe('-3');
  });
});
