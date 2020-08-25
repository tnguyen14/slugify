# @tridnguyen/slugify

> Personal convention for using [slugify](https://www.npmjs.com/package/slugify)

- Remove these characters `*+~.()'"!:@`
- Lower case

```js
const slugify = require('@tridnguyen/slugify');

slugify('Test\'s < "& merch😀'); // "tests-less-and-merch"
```
