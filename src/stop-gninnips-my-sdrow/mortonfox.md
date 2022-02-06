# [mortonfox](https://www.codewars.com/users/mortonfox)

```js
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

```

## Strategy

- target words who's length is larger than 4.
- reverse the long words.
- return final string.

## Implementation

- target words who's length is larger than 4.
- build a reverse method.
- replace the original word with its reverse version.
- return final string.

## Possible Refactors

- use `map` instead of `replace`.
- use `for` loop instead of `replace`.
- use `reduce` instead of `replace`.

## References

<!--
  links that helped you to understand this solution or to think of possible refactors
-->
