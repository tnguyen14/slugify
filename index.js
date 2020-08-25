const slugify = require('slugify');

module.exports = function(string) {
  return slugify(string, {
    remove: /[*+~.()'"!:@]/g
  }).toLowerCase();
}
