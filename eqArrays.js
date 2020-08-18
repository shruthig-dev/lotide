const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed : ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed : ${actual}!== ${expected}`);
  }
};
  
const eqArrays = function(array1, array2) {
  let result = true;
  
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
  
assertEqual(eqArrays([], []), true);
  