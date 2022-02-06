# [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript)

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.  
@ parameter {String} [string = []] - The string with all five or more letter words to be reversed  
@ return {String} - A The string with all five or more letter words be reversed  
@ example  

Examples:   
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"   
spinWords( "This is a test") => returns "This is a test"   
spinWords( "This is another test" )=> returns "This is rehtona test"  

## Syntax

> spinWords(`string`) -> `string`

### Parameters

**string**: `string`

The string with all five or more letter words to be reversed.

### Return Value: `string`

A The string with all five or more letter words be reversed.

## Test Cases

Sample tests from CodeWars:

```js
// directly from CodeWars
const chai = require("chai");
const assert = chai.assert;

describe("Spinning words",()=>{
  it("Sample tests",()=>{
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
    assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
  });
});
```

My tests from the sandbox:

```js
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


```

## Use Cases

<!--
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->

---

## Retrospective

-regex short code a lot. Try to learn and use it from now.

### Continue Doing

- Many experimental refactors of each solution I studied, this helped a lot with
  `remix-x.md`
- Writing extra test cases

### Start Doing

- Study more solutions that look very similar, there's a lot to learn from the
  small differences.
- Rename all the variables in functions when I start studying them, I think this
  could help inspire new remixes
- Step through the code many different ways: debugger, JS Tutor, drawing on it,
  trace tables.

### Stop Doing

- Expecting to understand every solution perfectly.
