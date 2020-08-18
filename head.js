const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed : ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed : ${actual}!== ${expected}`);
  }
};
  
const tail = function(array) {
  let headOfArray = array[0];
  return headOfArray;
};
  
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]),"Hello");
assertEqual(tail([7]), 7);
assertEqual(tail([]), undefined);