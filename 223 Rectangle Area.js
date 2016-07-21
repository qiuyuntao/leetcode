/**
 * link: https://leetcode.com/problems/rectangle-area/
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  var sumArea = (C - A) * (D - B) + (G - E) * (H - F);

  if (E >= C || F >= D || B >= H || A >= G) return sumArea;
  return sumArea - ((Math.min(G, C) - max(A, E)) * (Math.min(D, H) - max(B, F)));
};

console.log(computeArea(-2, -2, 2, 2, 2, 2, 3, 3));
