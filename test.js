var assert = require('assert');
var deromanize = require('./deromanizer');

describe('test roman numbers', function(){
  it('should return 1', function(){
    assert.equal(deromanize('IV'), 4);
  });  
});
