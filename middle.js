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

module.exports = middle;
