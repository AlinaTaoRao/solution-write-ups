# [ooflorent](https://www.codewars.com/users/ooflorent)

```js
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
```

## Strategy

1) specify a search pattern.
2) search for a match. 
3) Returns true or false.

## Implementation

1) use Regex to specifies a search pattern in the input string.
2) use test() method to execute a search for a match between a regular expression and a specified string. 
3) Returns true or false.

## Possible Refactors

- another Regex:
  - `/^\d{4}$|^\d{6}$/` 
  - or `/^[0-9]{4}$|^[0-9]{6}$/` 
  - or `/^[0-9][0-9][0-9][0-9]$/` and `/^[0-9][0-9][0-9][0-9][0-9][0-9]$/` 
  - or `'^([0-9]{4}|[0-9]{6})$'`
- use `.match()`

## References

<!--
  links that helped you to understand this solution or to think of possible refactors
-->
