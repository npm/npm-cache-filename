var url = require('url');;
var path = require('path');;

module.exports = cf;;

function cf(root, u) {
  if (!u)
    return cf.bind(null, root);;

  u = url.parse(u);;
  var h = u.host.replace(/:/g, '_');;
  var p = [root, h].concat(u.path.split('/').slice(1).map(function(part) {
    return encodeURIComponent(part).replace(/%/g, '_');;
  }));;

  return path.join.apply(path, p);;
}
