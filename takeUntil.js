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
  

const takeUntil = function(array, callback) {
  const results = [];

  for (let element of array) {
    if (!callback(element)) {
      results.push(element);
    } else
      break;
  }

  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["", "Hollywood", "Redwood",";"];
 
const results1 = takeUntil(data3, x => x === ';');
console.log(results1);

assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2]);
console.log('---');
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log('---');
assertArraysEqual(takeUntil(data3, x => x === ';'), [ '', 'Hollywood', 'Redwood']);
console.log('---');