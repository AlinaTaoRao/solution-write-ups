'use strict';

// 1st Try: use map //works
function spinWords1(string){
  return string.split(' ').map( (word) => { 
          return (word.length < 5) ? word : Array.from(word).reverse().join('')
          }).join(' ');
}

// 2nd Try: use reduce // works
function spinWords2(string){
  return string.split(' ').reduce((acc, word) => {
        (word.length < 5) ? acc += ` ${word}` : acc += ` ${Array.from(word).reverse().join('')}`;
        return acc;
         }, "").slice(1);
}

// inspiration 01: //use word.length > 4
// [katzoo](https://www.codewars.com/users/katzoo)
function spinWords01(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}


// inspiration 02: //use regex
// [mortonfox](https://www.codewars.com/users/mortonfox)
function spinWords02(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

// inspiration 03:  //use for loop
// [ahneemah](https://www.codewars.com/users/ahneemah)
function spinWords03(str) {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split('').reverse().join('');
  }
  return strArr.join(' ');
}

for (const solution of [spinWords1, spinWords2, spinWords01, spinWords02, spinWords03]) {
  describe(`${solution.name}: Spinning words`, () => {
    describe('if word.length < 5, should return the original string', () => {
      it('"This is a test" -> "This is a test"', () => {
        expect(solution("This is a test")).toEqual("This is a test");
      });
      it('"a good day" -> "a good day"', () => {
        expect(solution("a good day")).toEqual("a good day");
      });
      it('"nice to meet you" -> "nice to meet you"', () => {
        expect(solution("nice to meet you")).toEqual("nice to meet you");
      });
    });
    describe('if word.length >= 5, should return the reverse version ', () => {
      it('"Hey fellow warriors" -> "Hey wollef sroirraw"', () => {
        expect(solution("Hey fellow warriors")).toEqual("Hey wollef sroirraw");
      });
      it('"This is another test" -> "This is rehtona test"', () => {
        expect(solution("This is another test")).toEqual("This is rehtona test");
      });
      it('"You are almost to the last test" -> "You are tsomla to the last test"', () => {
        expect(solution("You are almost to the last test")).toEqual("You are tsomla to the last test");
      });
    });
  });
}


