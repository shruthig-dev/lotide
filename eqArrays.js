const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed : ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed : ${actual}!== ${expected}`);
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
  
assertEqual(eqArrays([1,2,3], [1,2,3]), true);

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([], [1,2,3]), true);
assertEqual(eqArrays([], []), false);
assertEqual(eqArrays([1,"a",3], [1,2,3]), true);
assertEqual(eqArrays(["v","a","3"], [1,2,3]),true);
  