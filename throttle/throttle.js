$(function() {
  var $result = $('.result');
  function fun1(e) {
    var val = parseInt($result.text(), 10);
    val++;
    $result.text(val);
  }

  function throttle_1(fun, wait) {
    
    var context, timeout, result, args;
    var previous = 0;
    return function() {
      var now = new Date();
      var remain = wait - (now - previous);
      args = arguments;
      context = this;
      if(remain <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = fun.apply(context, args);
      } else if(!timeout) {
        timeout = setTimeout(function() {
          previous = new Date();
          timeout = null;
          result = fun.apply(context, args);
        }, remain);
      }
      return result;
    };
  }

  function throttle(fun, wait) {
    var context,timeout,result,args;
    var previous = 0;
    return function() {
      var now = new Date();
      var remaining = wait - (now - previous);
      args = arguments;
      context = this;
      if(remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = fun.apply(context, args);
      } else if(!timeout) {
        timeout = setTimeout(function() {
          previous = new Date();
          timeout = null;
          result = fun.apply(context, args);
        }, remaining);
      }
      return result;
    };
  }

  function throttle3(fun, wait) {
    var previous = 0;
    var timeout;

    return function() {
      var now = new Date();
      var remain = wait -(now - previous);
      if(remain <=0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = fun(arguments);
      } else if(!timeout){
        timeout = setTimeout(function() {
          previous = new Date();
          timeout = null;
          result = fun(arguments);
        }, remain);
      }
      return result;
    };
  }
  function throttle4(fun, wait) {
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
          timeout = null;
          result = fun(arguments);
        }, remain);
      }
      return result;
    };
  }
  var fun2 = throttle(fun1, 1000);
  var fun3 = debounce(fun1, 1000, false);

  //$('#container').on('mousemove', fun1);
  //$('#container').on('mousemove', fun2);
  $('#container').on('mousemove', fun3);


  function debounce1 (func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  }

  function debounce(fun, wait, immediate) {
    var timeout, result;
    return function() {
      console.log('111');
      var context = this, args = arguments;
      //var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        //timeout = null;
        console.log(222);
       // if(!immediate) {
          console.log(333);
          result = fun.apply(context, args);
       //}
      }, wait);

      // if(callNow) {
      //   console.log(444);
      //   result = fun.apply(context, args);
      // }

      return result;
    };
  }

});
