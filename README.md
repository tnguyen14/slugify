# @tridnguyen/slugify

> Personal convention for using [slugify](https://www.npmjs.com/package/slugify)

- Remove these characters `*+~.()'"!:@`
- Lower case
- Strictly strip special characters
- Replace `/` with `-`

```js
const slugify = require('@tridnguyen/slugify');

slugify('Test\'s < "& merch😀'); // "tests-less-and-merch"
```
