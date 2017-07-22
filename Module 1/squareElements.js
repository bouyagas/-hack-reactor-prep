function squareElements(arr) {
  return arr.map(function(x){
    return Math.pow(x,2);
  });
}


function squareElements(arr) {
  // your code here
  var myArr = [],
  i;
  for(i = 0; i < arr.length; i += 1){
    myArr.push(arr[i] * arr[i]);
  }
  return myArr;
}


var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
