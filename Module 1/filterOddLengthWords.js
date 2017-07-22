// Declarative
const filterOddLengthWords = (words) => {
  let filteredAry = words.filter((index) => {
     return index.length % 2 !== 0;
  });
  return filteredAry;
};

// imperative
function filterOddLengthWords(words) {
  var arr = [];
  var i;
  for(i = 0; i < words.length; i += 1){
    if(words[i].length % 2 !== 0){
      arr.push(words[i]);
    }
  }
  return arr;
}


var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
