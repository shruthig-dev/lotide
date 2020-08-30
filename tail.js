  
const tail = function(array) {
  let cloneArray = array.slice(1); //capture the copy of an array into a variable
  
  return cloneArray; 
};

module.exports = tail;
