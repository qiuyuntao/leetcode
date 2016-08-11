const fs = require('fs');
const exec = require('child_process').exec;
const path = process.cwd() + '/js';

var title = `#### This is leetcode solution with js.

I have explaination for some leetcode problems.

You can visit https://qiuyuntao.github.io/leetcode to see these explainations.

`;

fs.readdir(path, (err, files) => {
  var array = [[
    'problems',
    'explaination',
    'source'
  ], [
    '-------------------------------------------',
    ':-------------------------------------------:',
    '-------------------------------------------:'
  ]];
  files.map((d) => {
    var number = /\d+/.exec(d)[0];
    var name = d.replace('.js', '');
    var url = name.replace(/\d+\./, '');
    url = url.trim().toLowerCase();
    url = url.split(' ');
    url = url.join('-');
    array.push([
      `[${name}](https://leetcode.com/problems/${url}/)`,
      `[visit explaination](http://qiuyuntao.github.io/leetcode/solution/${number}.html)`,
      `[click me](./js/${name}.js)`
    ]);

    var arr = array.map((data) => {
      return '|' + data.join('|') + '|';
    });

    fs.writeFile('./readme.md', title + arr.join('\n'), () => {

    })
  });
});
