const assertArraysEqual = function(array1, array2) {
  let result = true;
  
  result = eqArrays(array1, array2);
  
  if (result) {
    console.log(`✅✅✅  Arrays are same : [${array1}]  === [${array2}]`);
  } else {
    console.log(`🔴🔴🔴  Arrays are not same : [${array1}] !== [${array2}]`);
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
const middle = function(array) {
  let expectedArray = [];
  let arrayLength = array.length;
  let midIndex;

  //If arrays with one or two elements, then return an empty array.
  if (!arrayLength || arrayLength === 1 || arrayLength === 2) {
    return expectedArray;
  } else if (arrayLength % 2 === 0) {//check for arrays with an even number of elements
    midIndex = array[Math.round(arrayLength / 2)];
    expectedArray.push(array[midIndex - 2]);
    expectedArray.push(array[midIndex - 1]);
  } else {
    midIndex = array[Math.round((arrayLength - 1) / 2)];
    expectedArray.push(array[midIndex - 1]);
  }
  
  // console.log(`Middle-most element(s) of the given array [${array}] : [${expectedArray}]`);
  return expectedArray;
};
  
// Make sure the result are as per the expectation
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6,7]), [4]);