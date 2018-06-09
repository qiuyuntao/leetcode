/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const obj = {};
  let count = 0;
  const JLength = J.length;
  const SLength = S.length;
  
  for (let i = 0; i < JLength; i++) {
      obj[J[i]] = true;
  }
  
  for (let i = 0; i < SLength; i++) {
      if (obj[S[i]]) count++;
  }
  
  return count;
};