/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var array = [];
  var pathArr = path.split('/');

  pathArr.map((d, i) => {
    if (!d.length || d === '.') {
      return;
    } else if (d === '..') {
      array.pop();
    } else {
      array.push(d);
    }
  });

  return `/${array.join('/')}`;
};

var path = '/';
console.log(simplifyPath(path));
