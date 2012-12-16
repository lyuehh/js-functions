var async = require('async');

function finder(records, cb) {
  setTimeout(function () {
    records.push(3,4);
    cb(null, records);
  }, 1000);
}

function processor(records, cb) {
  setTimeout(function () {
    records.push(5,6);
    cb(null, records);
  }, 1000);
}

async.waterfall([
  function (cb) {
    finder([1,2], cb);
  },
  processor,
  function (records, cb) {
    console.log(records);
  }
]);
