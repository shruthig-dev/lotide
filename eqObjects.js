const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🔴🔴🔴  Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  //if both the object are same length
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const prop in object1) {
      //if key in an object is ofType Array
      if (Array.isArray(object1[prop])) {
        //check array inside object are equal length
        if (object1[prop].length === object2[prop].length) {
          for (const item in object1[prop]) {
            if (!eqArrays(object1[prop][item],object2[prop][item])) {
              return false;
            }
          }
        } else {
          return false;
        }
      } else {
        if (!eqArrays(object1[prop],object2[prop])) {
          return false;
        }
      }
           
    }
  } else {
    return false;
  }
  return true;
};

const x = { a: "1", b: "" };
const y = { b: "2", a: "1" };
assertEqual(eqObjects(x, y),true);// => true

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true);// => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);// => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);// => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);// => false

const cd3 = { c: "1", d: ["2", 3, "4"] };
assertEqual(eqObjects(cd2, cd3),true);// => false