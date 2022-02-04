# Remix x

I inspired by the below codes. But I write code myself first, try as many way as I can. After that, I check other persons code. And choose the best practice in my eyes, and also those who write the solution use a method I didn't cover in my solutions.

```js
// inspiration 01: use replace, RegEXP. //Matches any single character except line terminators
// [ooflorent](https://www.codewars.com/users/ooflorent)
function DNAStrand01(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}
```

```js
// inspiration 02: use map, join
// [colbydauph](https://www.codewars.com/users/colbydauph)
var pairs = {'A':'T','T':'A','C':'G','G':'C'};
function DNAStrand02(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}
```

```js
// inspiration 03: use for loop, if statement.
// [RahmanNoor](https://www.codewars.com/users/RahmanNoor)
function DNAStrand03(dna){
    var result= "";
        for(var i =0; i<dna.length; i++) 
        {
          if (dna[i]==="A") 
         {
          result +="T";
         }
          else if (dna[i]==="T") 
         {
          result += "A";
          }
          else if (dna[i]==="C")
          {
          result +="G";
          }
          else if (dna[i]==="G")
          {
          result += "C";
          }
          else {
          result +=dna[i];
          }
       }
       return result;
    }
```

```js
// inspiration 04: use for loop, switch.
// [jarrov](https://www.codewars.com/users/jarrov)
function DNAStrand04(dna){
    var res="";
    for(var i=0; i<dna.length; i++) {
      switch(dna[i]) {
        case 'A':
          res += "T";
          break;
        case 'T':
          res += "A";
          break;
        case 'G':
          res += "C";
          break;
        case 'C':
          res += "G";
          break;
      }
    }
    return res;
  }
```

My solutions coming below:

```js
// 1st Try: use for loop //works
function DNAStrand(dna){
  let dnaMap = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  let comDNA = "";
  for (key of dna) {
      comDNA += dnaMap[key];
    }
  return comDNA;
  }
```

```js
// 2nd Try: use replace, RegEXP // works
const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};
const DNAStrand= (dna) => {
  return dna.replace( /./g, c => pairs[c])
}
```

## Strategy
1) build DNA map.
2) use key/value pair to get complementary DNA string and then convert characters to final string.
3) return the complementary DNA string.
## Implementation
1) create DNA map. use Object key/value pairs.
2) use replace to return a new complementary DNA string and the original string is left unchanged.
3) use regexp as the 1st parameter to target every character of str.
4) specify a replacerFunction as the 2nd parameter. The function will be invoked after the match has been performed. 
5) The function will be invoked multiple times for each full match to be replaced if the regular expression in the first parameter is global.

## Possible Refactors

- regexp to target 'A', 'T', 'G', 'C' instead of any single character except line terminators.
- ust `map` to create an array of complementary DNA string and `join('')` every single string without space between.

## References
