const fs = require('fs');
const exec = require('child_process').exec;
const path = process.cwd() + '/js';

fs.readdir(path, (err, files) => {
  files.map((d) => {
    if (!/^\d+\./.test(d)) {
      var number = /\d+/.exec(d)[0];
      var fileName = d.replace(number, number + '.');
      rename([path, d].join('/'), [path, fileName].join('/'));
    }
  })
});

function rename(preFileName, fileName) {
  fs.rename(preFileName, fileName, function(err){
    console.log('rename ' + preFileName + ' to ' + fileName + ' success');
  })
}
