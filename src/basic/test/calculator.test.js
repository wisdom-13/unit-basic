const Calculator = require('../calculator.js');



describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  })

  it('inits with 0', () => {
    expect(cal.value).toBe(0)
  })

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  })

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0)
  })

  describe('add', () => {
    it('1 + 2 = 3', () => {
      cal.set(1);
      cal.add(2);
      expect(cal.value).toBe(3)
    })

    it('value가 100보다 크다면 에러', () => {
      expect(() => {
        cal.add(101);
      }).toThrow('Value can not be greater than 100')
    })
  })



  it('subtracts', () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1)
  })

  it('multiplies', () => {
    cal.set(1);
    cal.multiply(4);
    expect(cal.value).toBe(4)
  })

  describe('divides', () => {
    it('0 / 0 === Nan', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN)
    })
    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity)
    })
    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1)
    })
  })
})

// test('add', () => {
//   expect(Calculator.add(1, 2)).toBe(3)
// })