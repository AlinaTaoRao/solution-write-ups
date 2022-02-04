# [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript)


Square Every Digit 
You are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9 * 9 is 81 and 1 * 1 is 1.

**Note:** The function accepts an integer and returns an integer  

 @param {Number} [number] - The number inside which every digit need to Square.  
 @returns {Number} - Returns the number of Squared values.  
 @example  
 
 squareDigits(3212); //  9414
 
 squareDigits(2112); //  4114


## Syntax

> squareDigits(`number`) -> `number`

### Parameters

**paramName**: `number`

The number inside which every digit need to Square.

### Return Value: `number`

Returns the number of Squared values.

## Test Cases

```js
// directly from CodeWars
const { assert } = require("chai")

describe("Basic tests", () => {
  
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
})
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

<!--
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->

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
