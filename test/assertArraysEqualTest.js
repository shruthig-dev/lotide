const assertArraysEqual = require ('../assertArraysEqual');


assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([], [1,2,3]);
assertArraysEqual([], []);
assertArraysEqual(["a","b"], ["A","b"]);
assertArraysEqual([1,"a",3], [1,2,3]);
assertArraysEqual(["v","a","3"], [1,2,3]);
assertArraysEqual(['Lighthouse Labs'],['Lighthouse Labs']);