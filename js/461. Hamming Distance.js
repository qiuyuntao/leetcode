/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  const binaryX = x.toString(2);
  const binaryY = y.toString(2);
  const binaryXLength = binaryX.length;
  const binaryYLength = binaryY.length;
  let maxLength, minLength, maxNum, minNum;
  let count = 0;
  
  if (binaryXLength > binaryYLength) {
      maxLength = binaryXLength;
      minLength = binaryYLength;
      maxNum = binaryX;
      minNum = binaryY;
  } else {
      maxLength = binaryYLength;
      minLength = binaryXLength;
      maxNum = binaryY;
      minNum = binaryX;
  }
  
  for (let i = 0; i < minLength; i++) {
      if (!isEqual(minNum[minLength - i - 1], maxNum[maxLength - i - 1])) count++;
  }
  
  for (let i = minLength; i < maxLength; i++) {
      if (!isEqual('0', maxNum[maxLength - i - 1])) count++;
  }
  
  return count;
};

function isEqual(x, y) {
  return x === y;
}