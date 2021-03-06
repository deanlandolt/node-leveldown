const test       = require('tap').test
    , testCommon = require('abstract-leveldown/testCommon')
    , leveldown  = require('../')
    , abstract = require('abstract-leveldown/abstract/close-test')

module.exports.setUp = function () {
  test('setUp', testCommon.setUp)
}

module.exports.close = abstract.close

module.exports.tearDown = function () {
  test('tearDown', testCommon.tearDown)
}

module.exports.all = function (leveldown) {
  module.exports.setUp()
  module.exports.close(leveldown, test, testCommon)
  module.exports.tearDown()
}

if (require.main === module)
  module.exports.all(leveldown)