const fs = require('fs');
const exec = require('child_process').exec;
const path = process.cwd() + '/js';

fs.readdir(path, (err, files) => {
  var title = `#### This is leetcode solution with js. ${files.length} / 386

  I have done some explaination for some leetcode problems.

  You can visit https://qiuyuntao.github.io/leetcode to see these explainations.

  `;
  var array = [[
    'problems',
    'explaination',
    'source'
  ], [
    '-------------------------------------------',
    ':-------------------------------------------:',
    '-------------------------------------------:'
  ]];

  files.sort((a, b) => {
    var c = Number(/\d+/.exec(a)[0]);
    var d = Number(/\d+/.exec(b)[0]);

    return c - d;
  });

  files.map((d) => {
    var number = /\d+/.exec(d)[0];
    var name = d.replace('.js', '');
    var url = name.replace(/\d+\./, '');
    url = url.trim().toLowerCase();
    url = url.split(' ');
    url = url.join('-');
    array.push([
      `[${name}](https://leetcode.com/problems/${url}/)`,
      `[view explaination](http://qiuyuntao.github.io/leetcode/solution/${number}.html)`,
      `[view source](./js/${name}.js)`
    ]);

    var arr = array.map((data) => {
      return '|' + data.join('|') + '|';
    });

    fs.writeFile('./readme.md', title + arr.join('\n'), () => {

    })
  });
});
