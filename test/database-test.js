
var assert = require('assert');
var database = require('../lib/database/dynamodb');

var tableName = "tell-mommy-transactions";
var primaryKeyName = "family-chore-id";
var rangeKeyName = "timestamp";
var objectName = "some-test-object";
var primaryKey = "some-primary-key";
var rangeKey = 12345;
var object = {
    "hello" : "test"
}

describe('database', function() {
  describe('#put', function() {
    it('should add an object to dynamodb', function(done) {
      database.put(tableName, primaryKeyName, primaryKey, rangeKeyName, rangeKey, objectName, objectName, function(err, result) {
        if (err) {
            done(err);
        } else {
            done();
        }
      })
    });
  });
});

describe('database', function() {
  describe('#get', function() {
    it('should get an object from dynamodb', function() {
      assert(false);
    });
  });
});

describe('database', function() {
  describe('#remove', function() {
    it('should remove an object from dynamodb', function() {
      assert(false);
    });
  });
});

