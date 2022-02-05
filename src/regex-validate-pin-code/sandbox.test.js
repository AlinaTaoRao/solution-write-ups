'use strict';

// 1st Try: use Regex, test().
function validatePIN1 (pin) {
  const arrOfPin = pin.split('');
  if (arrOfPin.length === 4 || arrOfPin.length === 6) {
    return arrOfPin.every(ele => /^-?\d+$/.test(ele));
  }
  return false;
}

// 2nd Try: use Regex, match().
function validatePIN2 (pin) { 
  const p4 = /^[0-9][0-9][0-9][0-9]$/;
  const p6 = /^[0-9][0-9][0-9][0-9][0-9][0-9]$/;
  const found4 = pin.match(p4);
  const found6 = pin.match(p6);
  return (found4!==null || found6!==null);  
}

// 3rd Try:use Regex, match().
function validatePIN3 (pin) {
  const p = /^\d{4}$|^\d{6}$/;
  const found = pin.match(p);
  return found!==null;
}

// 4th Try: use Regex, match().
function validatePIN4 (pin) {
  const p = /^[0-9]{4}$|^[0-9]{6}$/;
  const found = pin.match(p);
  return found!==null;
}

// 5th Try: use isNaN(), parseInt(). //Best try for me if not use Regex.
function validatePIN5 (pin) {

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
    
  return pin.split('').every( ele => !isNaN(parseInt(ele)) );
}


for (const solution of [validatePIN1, validatePIN2, validatePIN3, validatePIN4, validatePIN5]) {
  describe(`${solution.name}: check if it is a validate PIN code`, () => {
    describe('should return False for pins with length other than 4 or 6', () => {
      it('"12345" --> false', () => expect(solution("12345")).toEqual(false));
      it('"123" --> false', () => expect(solution("123")).toEqual(false));
    });
    describe('should return False for pins which contain characters other than digits', () => {
      it('"a234"  --> false', () => expect(solution("a234")).toEqual(false));
      it('"-12345" --> false', () => expect(solution("-12345")).toEqual(false));
      it('"1.2345" --> false', () => expect(solution("1.2345")).toEqual(false));
    });
    describe('should return True for valid pins', () => {
      it('"1234" --> true', () => expect(solution("1234")).toEqual(true));
      it('"123456" --> true', () => expect(solution("123456")).toEqual(true));
    });
  });
}










