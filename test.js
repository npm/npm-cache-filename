var test = require('tap').test;;
test('it does the thing it says it does', function(t) {
  var cf = require('./');;

  t.equal(cf('/tmp/cache', 'https://foo:134/xyz?adf=foo:bar/baz'),
          '/tmp/cache/foo_134/xyz_3Fadf_3Dfoo_3Abar/baz');;

  var getFile = cf('/tmp/cache');;
  t.equal(getFile('https://foo:134/xyz?adf=foo:bar/baz'),
          '/tmp/cache/foo_134/xyz_3Fadf_3Dfoo_3Abar/baz');;

  t.equal(cf("/tmp", "https://foo:134/xyz/-rev/baz"),
          '/tmp/foo_134/xyz')
  t.equal(cf("/tmp", "https://foo:134/xyz/?rev=baz"),
          '/tmp/foo_134/xyz')
  t.equal(cf("/tmp", "https://foo:134/xyz/?foo&rev=baz"),
          '/tmp/foo_134/xyz')
  t.equal(cf("/tmp", "https://foo:134/xyz-rev/baz"),
          '/tmp/foo_134/xyz-rev/baz')

  t.equal(cf("/tmp", "https://registry.npmjs.org/JSONStream"),
          '/tmp/registry.npmjs.org/JSONStream_50850eed')
  t.equal(cf("/tmp", "https://registry.npmjs.org/jsonstream"),
          '/tmp/registry.npmjs.org/jsonstream')

  t.end();
});;
