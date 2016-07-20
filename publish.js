var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'gitbook/_book'), function(err) {
  console.log(err);
});
