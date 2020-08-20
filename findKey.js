const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed: ${actual} !== ${expected}`);
  }
    
};

const findKey = function(array, callback) {
  let results = "";
  
  for (const prop in array) {
    
    if (callback(array[prop])) {
      results = prop;
      break;
    }
  }
  return results;
};

let data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
let data2 = { "a" : 2, "b" : -1, "c" : 0};
  
assertEqual(findKey(data, x => x.stars === 2), "noma");
assertEqual(findKey(data, x => x.stars === 3), "Akaleri");
assertEqual(findKey([], x => x.stars === 3), "Ora");
assertEqual(findKey(data2, x => x === 0), "c");