 [![Build status](https://img.shields.io/travis/tomekwi/napa-cache-filename.svg?style=flat-square)](https://travis-ci.org/tomekwi/napa-cache-filename)

# napa-cache-filename

This is a fork of [npm-cache-filename][], updated to see the difference between different references. It creates different folders for `https://github.com/tomekwi/napa-cache-filename#v1.0.0` and `...#v1.1.0`.

Given a cache folder and url, return the appropriate cache folder.

[npm-cache-filename]: https://www.npmjs.com/package/npm-cache-filename

## USAGE

```javascript
var cf = require('napa-cache-filename');
console.log(cf('/tmp/cache', 'https://registry.npmjs.org:1234/foo/bar'));
// outputs: /tmp/cache/registry.npmjs.org_1234/foo/bar
```

As a bonus, you can also bind it to a specific root path:

```javascript
var cf = require('napa-cache-filename');
var getFile = cf('/tmp/cache');

console.log(getFile('https://registry.npmjs.org:1234/foo/bar'));
// outputs: /tmp/cache/registry.npmjs.org_1234/foo/bar
```
