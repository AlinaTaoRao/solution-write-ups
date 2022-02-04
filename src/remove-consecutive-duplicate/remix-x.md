# Remix x

I inspired by the below codes. But I write code myself first, try as many way as I can. After that, I check other persons code. And choose the best practice in my eyes, and also those who write the solution use a method I didn't cover in my solutions.

```js
//inspiration 1: Imahori //use split(), filter(x,i,arr), join(' ')
// https://www.codewars.com/users/Imahori/stats
const removeConsecutiveDuplicates01 = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");
```

```js
//inspiration 2: stonith //use replace(), Regular expression
// https://www.codewars.com/users/stonith
const removeConsecutiveDuplicates02 = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1'); 
//str = 'a?le a?le banana banana orange' ->"a?le a?le banana orange"
```

```js
//inspiration 3: falsetru //use replace(), Regular expression
const removeConsecutiveDuplicates03 = s => s.replace(/(\b\S+)( \1\b)+/g, '$1');
```

```js
//inspiration 4: adeelbukhari //use split(), filter(word, index, arr), join(' ')
function removeConsecutiveDuplicates04 (str) {
  return str
    .split(" ")
    .filter((word, index, arr) => word !== arr[index + 1])
    .join(" ");
}
```

```js
//  directly copy form code War, this function looks weird. There's no const or function at the beginning, and no ; at the end.
//inspiration 5: Konstantin Modin //use split(), filter(a,b,c), join(' ')
removeConsecutiveDuplicates05=a=>a.split` `.filter((a,b,c)=>!b||a!=c[b-1]).join` `
```

```js
//inspiration 6: AlexLukas //use ternary, `${item}`
// https://www.codewars.com/users/AlexLukas
const removeConsecutiveDuplicates06 = s => s.split(" ").reduce((acc, item, i, arr) => {
  item != arr[++i] ? acc += ` ${item}` : " ";
  return acc;
},"").trim();
```

```js
//inspiration 7: evansst //use slice(),
// https://www.codewars.com/users/evansst
const removeConsecutiveDuplicates07 = string => {
  return string
    .split(' ')
    .reduce((result, word) => (
      result.slice(-1)[0] === word
        ? result
        : [...result, word]
      ), [])
    .join(' ')
}
```

My solutions coming below:

```js
// 1st Try: use for loop //works
const removeConsecutiveDuplicates1 = s => { 
  const arr = s.split(' ');

  let newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (newArr[newArr.length - 1] !== arr[i]) {
  //       newArr.push(arr[i]); // or
      newArr = newArr.concat([arr[i]]);
    }
  }

  return newArr.join(' ');
};
```


```js 
// 2nd Try: use reduce(newArray, element), if else //works
const removeConsecutiveDuplicates2 = s => { 
  let arr = s.split(' ');

  arr = arr.reduce(
    (newArray, element) => { 
      if(newArray.length===0) {
        newArray.push(element);
      }         
      else {
        if(element!==newArray[newArray.length-1])
          newArray.push(element);  
      }
      return newArray;
    },
    []
  );

  return arr.join(' ');
};

```


```js
// 3rd Try: use reduce(newArray, element) //works
const removeConsecutiveDuplicates3 = s => { 

  let arr = s.split(' ');

  arr = arr.reduce(
    (newArray, element) => {
      if(element!==newArray[newArray.length-1])
        newArray.push(element);  
    return newArray; 
    },
    [arr[0]]
  );

  return arr.join(' ');
};

```


```js
// 4th Try: use reduce(acc, current, index) //works
const removeConsecutiveDuplicates4 = s => { 

  let arr = s.split(' ');

  return arr.reduce(
    (acc, current, index) => {
      if(current!==arr[index-1])
        acc += (' ' + current);
      return acc;
    }
  );
};

```

## Strategy
1) convert the original string to array with each words as element.
2) remove the consecutive duplicate words
3) convert the array with filtered words in to string

## Implementation

## Possible Refactors
- use`reduce((acc, item, i, arr)`, arr is not request, but could be used.
- use `filter((x,i,arr)`, the more parameter the more powerful.
- `replace` with `RegExp`, `RegExp`can shorter the code a lot, but not reader friendly.

## References
[Remove consecutive duplicate words](https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript)
