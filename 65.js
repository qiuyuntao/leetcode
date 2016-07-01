/**
 * link: https://leetcode.com/problems/valid-number/
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim();
  if (!s.length || s.indexOf(' ') > -1) return false;
  var n = Number(s);
  return !isNaN(n);
};


/**
 * 题意是判断一个字符串是否为数字
 "0" => true
 " 0.1 " => true
 "abc" => false
 "1 a" => false
 "2e10" => true

 首先要把前后空格给去掉,如果字符串长度为0的话,直接返回false.以为使用Number函数的时候,js会将空字符串转换为0
 同时如果字符串里有空格,那肯定也不是数字了
 之后用Number()函数转换一下,再根据isNaN函数判断一下,它是不是非字符,就好了
 */