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
  
const findKeyByValue = function(array1,searchKeyword) {
  let results;
  for (let item in array1) {
    if (item !== " " && array1[item] === searchKeyword) {
      results = item;
    }
  }
  return results;
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, ""), "The Expanse");
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "The Expanse");
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

    
  