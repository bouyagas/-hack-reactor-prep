function identitytf(x) {
  return function () {
     return x;
  };
}

var three = identitytf(3);
three();
//====================================


function addf(first) {
  return function (second) {
    return first + second;
  };
}




addf(3)(4);



//================================
   function liftf(binary) {
      return function (first){
        return function (second) {
           return binary(first, second);
        };
      };
   }

   var addf = liftf(add);
   addf(2)(4);
   liftf(mul)(5)(6);

   //===============================

    function curry(binary, first) {
      return function(second) {
        return binary(first, second);
      };
    }

    function curry(binary, first) {
      return binary(binary)(first);
    }


    // ===========================

    function curry(func, ...first) {
       return function(...second) {
          return func(...first, ...second);
       };
    }
    var add3 = curry(add, 3);
    add3(4);
    curry(mul, 5)(6);

// ============================
// var inc = addf(1);
// inc(5) = liftf(add)(1);
// inc(inc(5)) = curry(add, 1);

//============================

function twice(binary) {
  return function (a) {
     return binary(a , a);
  };
}


add(11, 11);
var doubl = twice(add);
doubl(11);
var square = twice(mul);
square(11);
