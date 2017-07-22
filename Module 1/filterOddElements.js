// Declative
function filterOddElements(arr) {
   let filteredAry = arr.filter((index) => {
     return index % 2 !== 0;
  });
   return filteredAry;
}

// imperative
function filterOddElements(arr) {
  var myArr = [];
  var i;
  for (i = 0; i < arr.length; i += 1) {
    if(arr[i] % 2 !== 0){
      myArr.push(arr[i]);
    }
  }
  return myArr;
}


var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);
