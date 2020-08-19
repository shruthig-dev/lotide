const countLetters = function(sentence) {
  const results = {};
    
  for (const letter of sentence) {
    // inside the loop:
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
    
  return results;
};
    
console.log(countLetters("lighthouse in the house"));
console.log(countLetters(""));
console.log(countLetters("lllll"));
console.log(countLetters("count letters 0 1 0 9 0 1 0 9 8"));
