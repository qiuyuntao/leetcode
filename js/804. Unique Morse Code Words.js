/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const obj = {};
  let count = 0;
  const strArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  
  const wordsLength = words.length;
  for (let i = 0; i < wordsLength; i++) {
      count++;
      let string = '';
      const word = words[i];
      const wordLength = word.length;
      for (let j = 0; j < wordLength; j++) {
          string += strArr[word[j].charCodeAt() - 97];
      }
      if (obj[string]) {
          count--;
      } else {
          obj[string] = true;
      }
  }
  
  return count;
};