/*
 from http://www.cnblogs.com/iamzhanglei/archive/2013/02/24/2924680.html
 */

var Promise = function() {
  this.thens = [];
};

Promise.prototype = {
  resolve: function() {
    var t = this.thens.shift(), n;
    n = t.apply(null, arguments); // n instanceof Promise && (n.thens = this.thens));
    //n = t();
    if(n instanceof Promise) {
      n.thens = this.thens;
    }
  },
  then: function(n) {
    this.thens.push(n); //这里的this刚开始是f1的那个promise,在f1执行完后,由上面那句 instanceof检查, 而变成f2的promise.
    return this;
  }
};

function f1() {
  var promise = new Promise();
  setTimeout(function() {
    console.log(1);
    promise.resolve();
  }, 1000);
  return promise;
}

function f2() {
  var promise = new Promise();
  setTimeout(function() {
    console.log(2);
    promise.resolve();
  }, 1000);
  return promise;
}

function f3() {
  var promise = new Promise();
  setTimeout(function() {
    console.log(3);
    promise.resolve();
  }, 1000);
  return promise;
}

function f4() {
  console.log(4);
}

f1().then(f2).then(f3).then(f4);

/*
f1() f1会在1秒后执行, 执行时,它调用resolve, resolve会将f2从thens里shift出来,
然后执行,执行f2时,它调用resolve,将f3从thens里shift出来...
这些操作都是异步的,所以thens的队列里刚一开始执行时f2,f3,f4就都在里面了..

*/
