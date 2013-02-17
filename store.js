var store = (function() {
  var data;
  var getData = function () {
    return data;
  };
  var setData = function (d) {
    data = d;
  };
  var clearData = function () {
    data = null;
  };
  return {
    getData: getData,
    setData: setData,
    clearData: clearData
  };
})();


