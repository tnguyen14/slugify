const tap = require('tap');
const slugify = require('./');

tap.test('slugify', (t) => {
  t.test('remove unwanted chars', (t) => {
    t.equal(slugify('Test\'s < "& merch👍'), 'tests-less-and-merch');
    t.end();
  });
  t.test('replace / with -', (t) => {
    t.equal(slugify('a/b'), 'a-b');
    t.end();
  });
  t.end();
});
