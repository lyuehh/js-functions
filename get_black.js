function getResult(str) {
  var arr = str.split('');
  var b = 0;
  var flag = false;
  var ret = '';
  for (var i = 0; i < arr.length; i += 1) {
    if(arr[i] !== ' ') {
      if(flag) {
        ret += b;
        b = 0;
        flag = false;
      }
      ret += arr[i];
    } else {
      b += 1;
      if(arr[i+1] !== ' ') {
        flag = true;
      }
    }
  }
  return ret;
}

console.log(getResult('abc  d   e'));
