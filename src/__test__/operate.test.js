import operate from '../logic/operate';

describe('Math oparations', () => {
  it('Should test the addition oparation', () => {
    const result = operate(1, 3, '+');
    expect(result).toEqual('4');
  });

  it('Should test the subtraction oparation', () => {
    const result = operate(1, 3, '-');
    expect(result).toEqual('-2');
  });

  it('Should test the multiplcation oparation', () => {
    const result = operate(2, 3, 'x');
    expect(result).toEqual('6');
  });

  it('Should test the division oparation', () => {
    const result = operate(-15, 3, '÷');
    expect(result).toEqual('-5');
  });

  it('Should test the modulus oparation', () => {
    const result = operate(-19, 3, '%');
    expect(result).toEqual('-1');
  });
});
