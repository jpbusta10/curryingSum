function sum(num1) {
    var v = function(num2) {
      return sum(num1 + num2);
    };
  
    v.valueOf = v.toString = function() {
      return num1;
    };
  
    return v;
  }
  
  console.log(+sum(1)(2)(3)(4));