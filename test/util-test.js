
var assert = require('assert');
var guid = require('util');

describe('guid', function() {
  describe('#generateUUID()', function() {
    it('should generate a UUID', function() {
      assert(guid.generateUUID !== null);
    });
  });
});