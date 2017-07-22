function getLengthOfLongestElement(arr) {
  var maxItem = 0;
  var maxLength = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxItem = arr[i];
      maxLength = arr[i].length;
    }
  }
  return maxLength;
}


function getLengthOfLongestElement(arr) {
  var longer = arr;
  for(var i = 0; i < arr.length; i++){
    if(longer[i].length > arr[0].length){
      longer = arr[i];
    }
  }
  return longer.length;
}

function getLengthOfLongestElement(arr) {
  var longer = arr.filter(function(index) {
    return Math.max(index.length);
  });
  return longer;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
