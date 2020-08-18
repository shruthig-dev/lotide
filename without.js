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
const without = function(original, itemsToRemove) {
  let  expectedArray = [];
  
  if (!original.length) {
    console.log(`[${original}] original array is empty. No items to exclude`);
    return;
  }
    
  for (let i = 0; i < original.length; i++) {
    let excludeItem = false;
  
    for (let j = 0; j < itemsToRemove.length; j++) {
      excludeItem = false;
      if (original[i] === itemsToRemove[j]) {
        excludeItem = true;
        break;
      }
    }
    if (!excludeItem) {
      expectedArray.push(original[i]);
    }
  }
  
  console.log(`[${original}] Array after excluding items [${itemsToRemove}] : [${expectedArray}]`);
};
    
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 2, 3], []);
without([], [3,2]);
without(["",null,5,6,.90,"undefined"], [undefined,""]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
  
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);