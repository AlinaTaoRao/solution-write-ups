'use strict';

// 1st Try: use String(), for loop , Number(). //works
function squareDigits1(num){
  let stringNum = String(num);
  let finalString = "";
  for (item of stringNum) {
   let square = item * item;
    finalString = finalString + square;
  }
  return Number(finalString);
}

// 2nd Try: use split, reduce, * operator, Number(). //works
function squareDigits2(num){

  const stringNum = String(num).split('').reduce((acc, cur) => {return acc + cur*cur}, '');
  return Number(stringNum);
}
// 3rd Try: use split, reduce, ** operator, Number(). //works
function squareDigits3(num){

  const stringNum = String(num).split('').reduce((acc, cur) => {return acc + cur**2}, '');
  return Number(stringNum);
}

// 4th Try: use split, reduce, Math.pow(), Number(). //works
function squareDigits4(num){

  const stringNum = String(num).split('').reduce((acc, cur) => {return acc + Math.pow(cur, 2)}, '');
  return Number(stringNum);
}


// 5th Try: use split, map, ** operator, join(). //works
function squareDigits5(num){

  const stringNum = String(num).split('').map(ele => ele**2).join('');
  return Number(stringNum);
}

// inspiration 01: use + '' concatenate.
function squareDigits01(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

// inspiration 02: use toString() method. Returns a string representing the object.
function squareDigits02(num){
  return +num.toString().split('').map(i => i*i).join('');
}

// inspiration 03: use parseInt(). 
function squareDigits03(num){
  let result = num
    .toString()
    .split("")
    .map( num => parseInt(num) )
    .map( num => num * num )
    .join("")
   
  return parseInt(result)
}

// inspiration 04: use +num to convert string to number.
function squareDigits04(num){
  return +String(num).split('').map(function(num){return +num * +num;}).join('');
}

for (const solution of [squareDigits1, squareDigits2, squareDigits3, squareDigits4, squareDigits5, squareDigits01, squareDigits02, squareDigits03, squareDigits04]) {
  describe(`${solution.name}: Square Every Digit`, () => {
    describe('standard integer number', () => {
      it('3212 -> 9414', () => {
        expect(solution(3212)).toEqual(9414);
      });
      it('2112 -> 4114', () => {
        expect(solution(3212)).toEqual(9414);
      });
      it('3212 -> 9414', () => {
        expect(solution(3212)).toEqual(9414);
      });
    });
    describe('squareDigits(0) should equal 0', () => {
      it('0 -> 0', () => {
        expect(solution(0)).toEqual(0);
      });
    });

  });
}
