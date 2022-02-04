# Remix x

I inspired by the below codes. But I write code myself first, try as many way as I can. After that, I check other persons code. And choose the best practice in my eyes, and also those who write the solution use a method I didn't cover in my solutions.

```js
// inspiration 01: use + '' concatenate.
// [user2713389](https://www.codewars.com/users/user2713389)
function squareDigits01(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }
```

```js
// inspiration 02: use toString() method. Returns a string representing the object.
// [Lends](https://www.codewars.com/users/Lends)
function squareDigits02(num){
    return +num.toString().split('').map(i => i*i).join('');
  }
```

```js
// inspiration 03: use parseInt(). 
// If the radix value is not of the Number type it will be coerced to a Number and return an integer. 
// [nolds9](https://www.codewars.com/users/nolds9)
function squareDigits03(num){
    let result = num
      .toString()
      .split("")
      .map( num => parseInt(num) )
      .map( num => num * num )
      .join("")
     
    return parseInt(result)
  }
```

```js
// inspiration 04: use +num to convert string to number.
// `+` : a Unary Operator. It converts/parses numbers from a string, boolean or even null values.
// [Kamilius](https://www.codewars.com/users/Kamilius) 
function squareDigits04(num){
    return +String(num).split('').map(function(num){return +num * +num;}).join('');
  }
```

My solutions coming below:

```js
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

```


```js
// 2nd Try: use split, reduce, * operator, Number(). //works
function squareDigits2(num){
  
    const stringNum = String(num).split('').reduce((acc, cur) => {return acc + cur*cur}, '');
    return Number(stringNum);
  }

```

```js
// 3rd Try: use split, reduce, ** operator, Number(). //works
function squareDigits3(num){
  
    const stringNum = String(num).split('').reduce((acc, cur) => {return acc + cur**2}, '');
    return Number(stringNum);
  }

```

```js
// 4th Try: use split, reduce, Math.pow(), Number(). //works
function squareDigits4(num){
  
    const stringNum = String(num).split('').reduce((acc, cur) => {return acc + Math.pow(cur, 2)}, '');
    return Number(stringNum);
  }


```

```js
// 5th Try: use split, map, ** operator, join(). //works
  function squareDigits5(num){
  
    const stringNum = String(num).split('').map(ele => ele**2).join('');
    return Number(stringNum);
  }

```

## Strategy

1) convert num to string.
2) iterate every digit and square every digit and then concatenate the result.
3) convert the final string to number and return it.

## Implementation

## Possible Refactors

- use `parseInt`, to convert a String or Array to Number.
- use `+`Unary Operator to convert String to Number.

## References
