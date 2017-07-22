// Declative
function filterEvenLengthWords(words) {
  let filteredAry = words.filter((index) => {
     return index.length % 2 === 0;
    });
  return filteredAry;
}

// imperative

function filterEvenLengthWords(words) {
  var arr = [];
  var i;
  for(i = 0; i < words.length; i += 1){
    if(words[i].length % 2 === 0){
      arr.push(words[i]);
    }
  }
  return arr;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
