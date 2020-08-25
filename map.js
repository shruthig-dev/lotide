const eqArrays = function(array1, array2) {
  let result = true;
  
  if(array1 === null && array2 === null)
  {
    return true;
  }
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

const assertArraysEqual = function(array1, array2) {
    
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Arrays are same : [${array1}]  === [${array2}]`);
  } else {
    console.log(`🔴🔴🔴  Arrays are not same : [${array1}] !== [${array2}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["", "light", "house", "labs"];
const words2 = [""];
const words3 = ["hello"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

console.log(map(words, word => word[0]));
console.log(map(words1, word => word[0]));
console.log(map(words2, word => word[0]));
console.log(map(words3, word => word[0]));

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words1, word => word[0]), ['','l','h','l']);
assertArraysEqual(map(words2, word => word[0]), []);
assertArraysEqual(map(words3, word => word[6]), undefined);