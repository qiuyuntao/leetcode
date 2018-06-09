/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  return A.map((item) => {
    const arr = [];
    const l = item.length;
    for (let i = l - 1; i >= 0; i--) {
      const value = item[i];
      arr.push(value === 1 ? 0 : 1);
    }
    return arr;
  });
};