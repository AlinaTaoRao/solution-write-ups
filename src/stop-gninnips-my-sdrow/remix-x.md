# Remix x

I inspired by the below codes. But I write code myself first, try as many ways as I can. After that, I go to other persons code. And choose the best practice in my eyes, and also those who write the solution with a handy method I didn't cover in my solutions.

```js
// inspiration 01: //use word.length > 4
function spinWords01(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

```

```js
// inspiration 02: //use regex
function spinWords02(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

```

```js
// inspiration 03:  //use for loop
function spinWords03(str) {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split('').reverse().join('');
  }
  return strArr.join(' ');
}
```

My solutions coming below. All of them have passed test and attempt successfully from code war.

```js
// 1st Try: use map //works
function spinWords1(string){
  return string.split(' ').map( (word) => { 
          return (word.length < 5) ? word : Array.from(word).reverse().join('')
          }).join(' ');
}
```

```js
function spinWords2(string){
  return string.split(' ').reduce((acc, word) => {
        (word.length < 5) ? acc += ` ${word}` : acc += ` ${Array.from(word).reverse().join('')}`;
        return acc;
         }, "").slice(1);
}
```


## Strategy

- target words who's length is larger than 4.
- reverse the long words.
- return final string.

## Implementation

- target words who's length is larger than 4.
- build a reverse method.
- for longer words return its reverse version, for shorter words return itself.
- return final string.

## Possible Refactors

- use `regex` to target the words who's length are larger than 4.
- use `for` loop.


## References
