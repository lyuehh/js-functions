var Event = require('../asynchronous-js/events1');
var should = require('should');
var _ = require('underscore');

describe('Event1', function() {

  it('on', function() {
    var event = new Event();
    var obj = {"name":"obj",'c': 0};
    _.extend(obj, event);
    obj.on('a', function(arg) {
      obj.c++;
    });
    obj.on('b', function(arg) {
      obj.b = arg;
    });
    obj.on('b', function(arg) {
      obj.b2 = arg;
    });
    obj.trigger('a');
    obj.trigger('a');
    obj.c.should.equal(2);
    obj.trigger('b','bbbb');
    obj.b2.should.equal('bbbb');
  });
});
