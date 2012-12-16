var when = require('when');

function finder(records) {
  var deferred = when.defer();
  setTimeout(function () {
    records.push(3,4);
    deferred.resolve(records);
  }, 1000);
  return deferred.promise;
}

function processor(records) {
  var deferred = when.defer();
  setTimeout(function () {
    records.push(5,6);
    deferred.resolve(records);
  }, 1000);
  return deferred.promise;
}
finder([1,2]).
  then(processor).
  then(function (records) {
    console.log(records);
  });


