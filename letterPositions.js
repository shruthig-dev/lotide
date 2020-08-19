const assertArraysEqual = function(array1, array2) {
  let result = true;
    
  result = eqArrays(array1,array2);
            
  if (result) {
    console.log(`✅✅✅  Arrays are same : [${array1}]  === [${array2}]`);
  } else {
    console.log(`🔴🔴🔴  Arrays are not same : [${array1}] !== [${array2}]`);
  }
};
      
const eqArrays = function(array1, array2) {
  let result = true;
  if (array1 === undefined || array2 === undefined) {
    if (array1 === array2) {
      return result;
    }
    return false;
  }
  //case 1: check if two array are of same length. else two array are not perfect match
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      //if any one item in an array is not equal then return false
      if (array1[i] !== array2[i]) {
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }
        
  return result;
};

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index++;
  }
      
  return results;
};
      
console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions(""));
console.log(letterPositions("lllll"));
console.log(letterPositions("count letters 0 1 0 9 0 1 0 9 8"));


assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lllll").l, [1]);
assertArraysEqual(letterPositions("").l, [1]);