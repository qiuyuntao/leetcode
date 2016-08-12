const fs = require('fs');
const exec = require('child_process').exec;
const fileName = process.argv[2] + '.md';
const path = process.cwd() + '/gitbook/solution';

var data = fs.readFileSync('./explaination.md');

fs.writeFile(path + '/' + fileName, data, () => {

})
