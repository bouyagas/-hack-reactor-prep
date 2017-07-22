function countWords(str) {
    var dict = {};
    if (str !== "") {
        var arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            if (typeof dict[arr[i]] !== "undefined") {
                dict[arr[i]] += 1;
            } else {
                dict[arr[i]] = 1;
            }
        }
    }
    return dict;
}

// second es6 way
const countWords(string) => {
  const storeNumberOfWords = {};
  if(string !== '') {
    let arrayOfWords = string.split(' ');
    for(let i = 0; i < arrayOfWords.length; i++){
       (typeof storeNumberOfWords[arrayOfWords[i]] !== "undefined") ?
        storeNumberOfWords[arrayOfWords[i]] += 1 : storeNumberOfWords[arrayOfWords[i]] = 1
    }
  }
  return storeNumberWords;
};

var output = countWords('');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
