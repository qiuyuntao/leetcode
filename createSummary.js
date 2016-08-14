const fs = require('fs');
const exec = require('child_process').exec;
const path = process.cwd();
const solutionPath = `${path}/gitbook/solution`

var title = `Summary
=======

`;

fs.readdir(path, (err, files) => {
  files.sort((a, b) => {
    var c = Number(/\d+/.exec(a)[0]);
    var d = Number(/\d+/.exec(b)[0]);

    return c - d;
  });
});
