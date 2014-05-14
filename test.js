var test = require('tap').test;;
test('it does the thing it says it does', function(t) {
  var cf = require('./');;

  t.equal(cf('/tmp/cache', 'https://foo:134/xyz?adf=foo:bar/baz'),
          '/tmp/cache/foo_134/xyz_3Fadf_3Dfoo_3Abar/baz');;

  var getFile = cf('/tmp/cache');;
  t.equal(getFile('https://foo:134/xyz?adf=foo:bar/baz'),
          '/tmp/cache/foo_134/xyz_3Fadf_3Dfoo_3Abar/baz');;

  t.end();
});;
