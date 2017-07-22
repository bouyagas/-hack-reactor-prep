// Declative
function filterEvenElements(arr) {
  let filteredAry = arr.filter((index) => {
   return index % 2 === 0;
 });
  return filteredAry;
}

// imperative
function filterEvenElements(arr) {
  var myArr = [];
  var i;
  for (i = 0; i < arr.length; i += 1) {
    if(arr[i] % 2 === 0){
      myArr.push(arr[i]);
    }
  }
  return myArr;
}
var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
