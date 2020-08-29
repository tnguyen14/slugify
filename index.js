const slugify = require('slugify');

/**
 * DB like firestore doesn't like '/' in document path
 */
slugify.extend({'/': '-'});

module.exports = function(string) {
  return slugify(string, {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: true,
  });
}
