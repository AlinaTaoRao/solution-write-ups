# [Regex validate PIN code](https://www.codewars.com/kata/55f8a9c06c018a0d6e000132)

Regex validate PIN code
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

@param {String} [pin= ""] - The String to inspect.  
@returns {Boolean} - Returns true or false.  
@example

(Input --> Output)
"1234"   -->  true
"123456"   -->  true
"12345"  -->  false
"a234"   -->  false
"-12345"  -->  false
"1.2345"  -->  false

## Syntax

> validatePIN(`string`) -> `boolean`

### Parameters

**pin**: `string`

The String to inspect.  

### Return Value: `boolean`

Returns true or false. 

## Test Cases

Sample tests from CodeWars:

```js
// directly from CodeWars
describe("validatePIN", function() {
  it("should return False for pins with length other than 4 or 6", function() {
    Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
    Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
    Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
    Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
    Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
    Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
    Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
    Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
    Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
  });
  
  it("should return False for pins which contain characters other than digits", function() {
    Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")
    Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")
  });
  
  it("should return True for valid pins", function() {
    Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");
    Test.assertEquals(validatePIN("0000"),true, "Wrong output for '0000'");
    Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("098765"),true, "Wrong output for '098765'");
    Test.assertEquals(validatePIN("000000"),true, "Wrong output for '000000'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("090909"),true, "Wrong output for '090909'");
  });
});
```

My tests from the sandbox

```js
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

- Expecting to understand every solution perfectly, I learned a lot from
  google without understanding how `/^-?\d+$/` works.
