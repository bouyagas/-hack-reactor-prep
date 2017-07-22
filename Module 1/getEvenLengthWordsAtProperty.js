function getEvenLengthWordsAtProperty(obj, key) {
    var arr = [];

    if ((typeof obj[key] != "undefined") && Array.isArray(obj[key]) && obj[key].length > 0) {
        for (var elem in obj[key]) {
            if (obj[key][elem].length % 2 === 0) {
                arr.push(obj[key][elem]);
            }
        }
    }

    return arr;
}


const  getEvenElementAtProperty(obj, key)  => {
  // your code here
   if((typeof obj[key] !== 'undefined') && Array.isArray(obj[key]) && obj[key].length > 0) {
    var evenWord = obj[key].filter((elem) => {
      return elem.length % 2 === 0;
    });
      return evenWord;
   } else {
    return [];
  }
}
var obj = {
    key: ['a', 'long', 'game']
};

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
