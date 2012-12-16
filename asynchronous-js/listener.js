var _ = require('underscore');
var Event = require('./events2');

var finder = {
  run: function(records) {
    var self = this;
    setTimeout(function () {
      records.push(3,4);
      self.trigger('done', records);
    }, 1000);
  }
};

var processor = {
  run: function(records) {
    var self = this;
    setTimeout(function () {
      records.push(5,6);
      self.trigger('done', records);
    }, 1000);
  }
};
_.extend(finder, new Event());
_.extend(processor, new Event());

finder.on('done', function(records) {
  processor.run(records);
});
processor.on('done', function (records) {
  console.log(records);
});

finder.run([1,2]);
