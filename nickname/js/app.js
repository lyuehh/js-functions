$(function() {
  'use strict';
  var pi = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989';

  var getChar = function(n) {
    // 1 A 65
    // 2 B 66
    // ...
    console.log(n);
    if(n < 1 || n > 26) {
      throw 'n must between 1 and 26, which is now ' + n;
    }
    if(n === 1) {
      return String.fromCharCode(65);
    } else {
      return String.fromCharCode(n - 1 + 65);
    }
  };

  var getName1 = function(year, month) {
    // 2011.5 - 2013.2 -> E..Z
    // E 5 69
    // M 13 77
    if(year === 2011) {
      return String.fromCharCode(month-5+69);
    } else if(year === 2012) {
      return String.fromCharCode((month-1+77));
    }
  };

  //console.log(getName0(2011,5)); //E
  //console.log(getName1(2011,6)); //F
  //console.log(getName1(2011,12)); //L
  //console.log(getName1(2012,1)); //M
  //console.log(getName1(2012,12)); //X

  var getName2 = function(year, month) {
    // 2013.1 -> Y, 2013.2 -> Z  不区分大小写
    var m12 = {
      1: 'Y',
      2: 'Z'
    };
    if(year === 2013) {
      if(month === 1 || month === 2) {
        return m12[month];
      } else {
        return getName3(year, month);
      }
    } else {
        return getName3(year, month);
    }
  };

  function getName3(year, month) {
    // 2013.3 - > the world end
    var now = new Date();
    var now_year = now.getFullYear();
    var now_month = now.getMonth() + 1;
    // 2013.9 -> 2013.3 6
    var betweenMonth = (year - 2013) * 12 + (month - 2);
    // console.log(betweenMonth);
    var afterDot = pi.substr(2);
    var firstTwo;
    for (var i = 0; i < betweenMonth; i += 1) {
      firstTwo = afterDot.charAt(0) + afterDot.charAt(1);
      // console.log("firstTwo: " + firstTwo);
      // console.log('afterDot: ' + afterDot);
      if(parseInt(firstTwo, 10) <= 26) {
        afterDot = afterDot.substr(2);
        if(i === (betweenMonth-1)) {
          return getChar(firstTwo);
        }
      } else {
        firstTwo = afterDot.charAt(0);
        afterDot = afterDot.substr(1);
        //console.log('firstOne: ' + firstTwo);
        if(i === (betweenMonth-1)) {
          return getChar(firstTwo);
        }
      }
    }
    return 'error';
  }

  // for (var i = 3; i <= 12; i += 1) {
  //   console.log('2013年' + i + '月: ' + getName3(2013, i));
  // }

   // for (var j = 1; j <= 12; j += 1) {
   //   console.log('2014年' + j + '月: ' + getName3(2014, j));
   // }

  var getName = function(y, m) {
    if(y < 2011) {
      return '只能查找2011年5月 到 2078年9月';
    }

    if(m < 1 || m > 12) {
      return "月份只能在1到12之间";
    }

    if(y === 2011 && m < 5) {
      return "2011年只有5月份以后的";
    }

    if(y >= 2078 && m > 9) {
      return '只能查找2011年5月 到 2078年9月';
    }

    if(y === 2011 || y === 2012) {
      return getName1(y, m);
    } else {
      return getName2(y, m);
    }

  };

  $("#go").on("click", function(e) {
    var y = parseInt($("#year").val(), 10);
    var m = parseInt($("#month").val(), 10);
    alert(getName(y, m));
  });

  // now
  var now = new Date();
  $('#now').html(getName(now.getFullYear(), now.getMonth() + 1));
  window.getName = getName;
});
