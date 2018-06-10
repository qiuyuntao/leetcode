/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const length = moves.length;
  let x = 0,
    y = 0;
  for (let i = 0; i < length; i++) {
    const step = moves[i];
    switch (step) {
      case 'U':
        y = y + 1;
        break;
      case 'D':
        y = y - 1;
        break;
      case 'L':
        x = x - 1;
        break;
      case 'R':
        x = x + 1;
        break;
      default:
        break;
    }
  }

  return x === 0 && y === 0;
};
