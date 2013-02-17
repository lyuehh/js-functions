function throttle(fun, waitl) {
  var timeout,result;
  var previous = 0;
  return function() {
    var now = new Date();
    var remain = wait - (now - previous);
    if(remain <= 0) {
      previous = now;
      clearTimeout(timeout);
      timeout = null;
      result = fun(arguments);
    } else if(!timeout){
      timeout = setTimeout(function() {
        previous = new Date();
        result = fun(artuments);
      }, remain);
    }
    return result;
  };
}
