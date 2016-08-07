/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var arr_1 = [];
  var n = 1000;
  var string = '';

  for (var i = 0; i < 4; i++) {
    var a = Math.floor(num / n);
    var b = num % n;
    n = n / 10;
    num = b;
    string = getRoman(a, i, string);
  }

  return string;
};

function getRoman(d, index, string) {
  switch (index) {
    case 0:
      return getString(d, '', 'M', '', string);
    case 1:
      return getString(d, 'D', 'C', 'M', string);
    case 2:
      return getString(d, 'L', 'X', 'C', string);
    case 3:
      return getString(d, 'V', 'I', 'X', string);
  }
}


// roman['M'] = 1000;
// roman['D'] = 500;
// roman['C'] = 100;
// roman['L'] = 50;
// roman['X'] = 10;
// roman['V'] = 5;
// roman['I'] = 1;

function getString(d, five, one, ten, string) {
  if (d === 4) {
    string += one + five;
  } else if (d > 0 && d <= 3) {
    while (d > 0) {
      string += one;
      d--;
    }
  } else if (d > 4 && d < 9) {
    string += five;
    d = d - 5;
    while (d > 0) {
      string += one;
      d--;
    }
  } else if (d > 8) {
    string += one + ten;
  }
  return string;
}

var num = 999;

console.log(intToRoman(num));
