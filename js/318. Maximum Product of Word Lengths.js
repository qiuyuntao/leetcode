/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  var arr = [];
  var account = 0;
  var result = 0;

  for (i = 0; i < words.length; i++) {
    arr[i] = 0;

    for (j = 0; j < words[i].length; j++) {
      arr[i] |= (1 << (words[i].charCodeAt(j) - 97));
    }
  }

  for (i = 0; i < words.length; i++) {
    for (j = i + 1; j < words.length; j++) {
      if ((arr[i] & arr[j]) === 0) {
        result = Math.max(result, words[i].length * words[j].length);
      }
    }
  }

  return result;
};

var words = ["abcw","baz","foo","bar","xtfn","abcdef"];

console.log(maxProduct(words));

/**
 Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]
 Return 16
 The two words can be "abcw", "xtfn".
 **/