# Remix x

I inspired by the below codes. But I write code myself first, try as many ways as I can. After that, I go to other persons code. And choose the best practice in my eyes, and also those who write the solution with a handy method I didn't cover in my solutions.

```js
// Inspiration 01: use Regex
// [ooflorent](https://www.codewars.com/users/ooflorent)
function validatePIN01 (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

```

```js
// Inspiration 02:use Regex, match()
// [doot0](https://www.codewars.com/users/doot0)
function validatePIN02 (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }

```


```js
// Inspiration 03: use >, < operator.
// [WnFg](https://www.codewars.com/users/WnFg)
function validatePIN03 (pin) {
    //return true or false
    var n = pin.length;
    if( n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
  }

```


```js
// Inspiration 04: use new RegExp.
// [phil-a](https://www.codewars.com/users/phil-a)
function validatePIN04 (pin) {
    var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
    return reg.test(pin);
  }

```

My solutions coming below. All of them have passed test and attempt successfully from code war.

```js
// 1st Try: use Regex, test().
function validatePIN1 (pin) {
  const arrOfPin = pin.split('');
  if (arrOfPin.length === 4 || arrOfPin.length === 6) {
    return arrOfPin.every(ele => /^-?\d+$/.test(ele));
  }
  return false;
  }

```


```js
// 2nd Try: use Regex, match().
function validatePIN2 (pin) { 
  const p4 = /^[0-9][0-9][0-9][0-9]$/;
  const p6 = /^[0-9][0-9][0-9][0-9][0-9][0-9]$/;
  const found4 = pin.match(p4);
  const found6 = pin.match(p6);
  return (found4!==null || found6!==null);  
}

```


```js
// 3rd Try:use Regex, match().
function validatePIN3 (pin) {
  const p = /^\d{4}$|^\d{6}$/;
  const found = pin.match(p);
  return found!==null;
}

```


```js
// 4th Try: use Regex, match().
function validatePIN4 (pin) {
  const p = /^[0-9]{4}$|^[0-9]{6}$/;
  const found = pin.match(p);
  return found!==null;
}

```


```js
// 5th Try: use isNaN(), parseInt(). //Best try for me if not use Regex.
function validatePIN5 (pin) {

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
    
  return pin.split('').every( ele => !isNaN(parseInt(ele)) );
}

```

## Strategy
1) check the length.
2) check digit.
3) return true or false

## Implementation
1) check the length of a string is 4 or 6.
2) check every element is digit.
3) return true or false

## Possible Refactors
- use `>`, `<` operator to check if every element of a string is digit.
- use new RegExp

## References
